import React from 'react';
import STORE from '../STORE'



export default class Hizmetlerimiz extends React.Component {
    render() {
        return (
            <section className="hizmetlerimiz">
                <a className="naving" href="#hizmet-listesi">
                    <i className="fas fa-angle-double-up"></i>
                </a>


                <ul id="hizmet-listesi">
                    <li><a href="#dijital-baski-list">Dijital Baskı</a></li>
                    <li><a href="#isikli-tabela-list">Işıklı Tabela</a></li>
                    <li><a href="#isiksiz-tabela-list">Işıksız Tabela</a></li>
                    <li><a href="#kutu-harf-list">Kutu Harf</a></li>
                    <li><a href="#krom-harf-list">Krom Harf</a></li>
                    <li><a href="#pleksi-harf-list">Pleksi Harf</a></li>
                    <li><a href="#light-box-list">Light Box</a></li>
                    <li><a href="#cam-giydirme-list">Cam Giydirme ve Kumlama</a></li>
                    <li><a href="#yelken-bayrak-list">Yelken-Bayrak</a></li>
                    <li><a href="#arac-kaplama-list">Araç Kaplama</a></li>
                    <li><a href="#duba-list">Duba</a></li>
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
                    <div id="kutu-harf-list">
                        <h3>Kutu Harf:</h3>
                        {STORE.KutuHarf.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="kutu-harf" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    <div id="krom-harf-list">
                        <h3>Krom Harf:</h3>
                        {STORE.KromHarf.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="krom-harf" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    <div id="pleksi-harf-list">
                        <h3>Pleksi Harf:</h3>
                        {STORE.PleksiHarf.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="pleksi-harf" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                    <div id="light-box-list">
                        <h3>Light Box:</h3>
                        {STORE.LightBox.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="light-box" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>


                    <div id="cam-giydirme-list">
                        <h3>Cam Giydirme ve Kumlama:</h3>
                        {STORE.CamKaplama.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="cam-giydirme" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>

                    <div id="yelken-bayrak-list">
                        <h3>Yelken-Bayrak:</h3>
                        {STORE.YelkenBayrak.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="one-way-vision" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}
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

                    <div id="duba-list">
                        <h3>Duba:</h3>
                        {STORE.Duba.map(item =>
                            <ul key={item.name}>
                                <li>
                                    <img className="duba" src={item.img} alt={item.name} />
                                </li>
                            </ul>
                        )}

                    </div>
                </div>
            </section>
        )
    }
}