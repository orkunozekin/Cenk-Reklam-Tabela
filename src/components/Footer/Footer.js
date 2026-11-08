import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p className="site-footer__text">
                © {new Date().getFullYear()}{' '}
                <a
                    className="site-footer__link"
                    href="https://studioartemis.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Studio Artemis LLC
                </a>
                . All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
