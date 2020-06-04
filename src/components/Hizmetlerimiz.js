import React from 'react';

import STORE from './STORE'


export default class Hizmetlerimiz extends React.Component {
    render() {
        return (
            <section className="hizmetlerimiz">
                <ul className="hizmet-listesi">
                    <li><a href="#dijital-baski-list">Dijital Baskı</a></li>
                    <li><a href="#isikli-tabela-list">Işıklı Tabela</a></li>
                    <li><a href="#isiksiz-tabela-list">Işıksız Tabela</a></li>
                    <li><a href="#kutu-harf-list">Kutu Harf</a></li>
                    <li><a href="#krom-harf-list">Krom Harf</a></li>
                    <li><a href="#pleksi-harf-list">Pleksi Harf</a></li>
                    <li><a href="#light-box-list">Light Box</a></li>
                    <li><a href="#germe-branda-list">Germe Branda</a></li>
                    <li><a href="#logo-tasarim-list">Logo Tasarım</a></li>
                    <li><a href="#cam-giydirme-list">Cam Giydirme</a></li>
                    <li><a href="#one-way-vision-list">One-Way Vision</a></li>
                    <li><a href="#arac-kaplama-list">Araç Kaplama</a></li>
                    <li><a href="#yelken-bayrak-list">Yelken-Bayrak</a></li>
                    <li><a href="#duba-list">Duba</a></li>
                    <li><a href="#matbaa-isleri">Matbaa İşleri</a></li>
                </ul>

                <div className="all-hizmetler">
                    <div id="dijital-baski-list">
                        <h3>Dijital Baski:</h3>
                        {STORE.DijitalBaski.map(item => 
                            <ul key={item.name}>
                                <li>
                                    <img className="dijital-baski" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>

                    <div id="isikli-tabela-list">
                        <h3>Işıklı Tabelalar:</h3>
                        {STORE.IsikliTabela.map(item => 
                            <ul key={item.name}>
                                <li>
                                    <img className="isikli-tabela" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    <div id="isiksiz-tabela-list">
                        <h3>Işıksız Tabelalar:</h3>
                        {STORE.IsiksizTabela.map(item => 
                            <ul key={item.name}>
                                <li>
                                    <img className="isiksiz-tabela" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    {/* <div id="kutu-harf-list">
                        <ul>
                            <h3>Kutu Harf:</h3>
                            <li>
                                <img className="kutu-harf" src={KutuHarf} alt="kutu-harf" />
                            </li>
                        </ul>
                    </div>
                    <div id="krom-harf-list">
                        <ul>
                            <h3>Krom Harf:</h3>
                            <li>
                                <img className="krom-harf" src={KromHarf} alt="krom-harf" />
                            </li>
                        </ul>
                    </div>
                    <div id="pleksi-harf-list">
                        <ul>
                            <h3>Pleksi Harf:</h3>
                            <li>
                                <img className="pleksi-harf" src={PleksiHarf} alt="pleksi-harf" />
                            </li>
                        </ul>
                    </div>
                    <div id="light-box-list">
                        <ul>
                            <h3>Light Box:</h3>
                            <li>
                                <img className="light-box" src={IsikliTabela} alt="light-box" />
                            </li>
                        </ul>
                    </div>
                    <div id="germe-branda-list">
                        <ul>
                            <h3>Germe Branda:</h3>
                            <li>
                                <img className="germe-branda" src={IsikliTabela} alt="germe-branda" />
                            </li>
                        </ul>
                    </div>
                    <div id="logo-tasarim-list">
                        <ul>
                            <h3>Logo Tasarım:</h3>
                            <li>
                                <img className="logo-tasarim" src={IsikliTabela} alt="logo-tasarim" />
                            </li>
                        </ul>
                    </div>
                    <div id="cam-giydirme-list">
                        <ul>
                            <h3>Cam Giydirme:</h3>
                            <li>
                                <img className="cam-giydirme" src={IsikliTabela} alt="cam-giydirme" />
                            </li>
                        </ul>
                    </div>
                    <div id="one-way-vision-list">
                        <ul>
                            <h3>One-Way Vision:</h3>
                            <li>
                                <img className="one-way-vision" src={IsikliTabela} alt="one-way-vision" />
                            </li>
                        </ul>
                    </div>
                    <div id="arac-kaplama-list">
                        <h3>Araç Kaplama:</h3>
                        {STORE.AracKaplama.map(item =>
                            <ul key={item.name}>

                                <li>
                                    <img className="arac-kaplama" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    <div id="yelken-bayrak-list">
                        <ul>
                            <h3>Yelken-Bayrak:</h3>
                            <li>
                                <img className="yelken-bayrak" src={IsikliTabela} alt="yelken-bayrak" />
                            </li>
                        </ul>
                    </div>
                    <div id="duba-list">
                        <ul>
                            <h3>Duba:</h3>
                            <li>
                                <img className="duba" src={IsikliTabela} alt="duba" />
                            </li>
                        </ul>
                    </div>
                    <div id="matbaa-isleri-list">
                        <ul>
                            <h3>Matbaa İşleri:</h3>
                            <li>
                                <img className="matbaa-isleri" src={IsikliTabela} alt="matbaa-isleri" />
                            </li>
                        </ul>
                    </div> */}
                </div>
            </section>
        )
    }
}