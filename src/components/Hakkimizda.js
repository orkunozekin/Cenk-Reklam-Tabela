import React from 'react';
import hello from './hello.mp3'


export default class Hakkimizda extends React.Component {
    render() {
        return (
            <section id="hakkimizda">
                <h2>Biz Kimiz?</h2>
                <p>Cenk Reklam olarak profosyonel ekibimizle 2013 yılından bugune çalışmalarımızı müşteriye çözüm ortağı olarak kurumsallaşma yolunda eksiklerimizi tamamlayarak ilerledik. İç ve dış mekan alanlarındaki görsel iletişim ürünlerini kaliteden ödün vermeden ve tam zamanında tasarlıyor, üretiyor ve montajını gercekleştiriyoruz.</p>
                <audio
                    controls
                    src={hello}>
                    Your browser does not support the
            <code>audio</code> element.
    </audio>
            </section>

        )
    }
}