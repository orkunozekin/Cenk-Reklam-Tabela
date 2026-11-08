import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    const RealDate = Date;

    afterEach(() => {
        global.Date = RealDate;
    });

    it('renders the Studio Artemis LLC copyright for the current year', () => {
        const fixed = new RealDate('2027-03-01T12:00:00Z');
        global.Date = class extends RealDate {
            constructor(...args) {
                if (args.length === 0) return new RealDate(fixed);
                return new RealDate(...args);
            }
        };
        const { getByRole } = render(<Footer />);
        expect(getByRole('contentinfo')).toHaveTextContent(
            '© 2027 Studio Artemis LLC. All rights reserved.'
        );
    });

    it('links the company name to the Studio Artemis site in a new tab', () => {
        const { getByText } = render(<Footer />);
        const link = getByText('Studio Artemis LLC');
        expect(link.tagName).toBe('A');
        expect(link).toHaveAttribute('href', 'https://studioartemis.io');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
