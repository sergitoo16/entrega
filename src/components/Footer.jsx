import React from 'react';
import "./src/components/Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                    <h4>Para ti</h4>
                    <a href="/ejemplo1">
                        <p>Ejemplo1</p>
                    </a>
                    <a href="/ejemplo2">
                        <p>Ejemplo2</p>
                    </a>
                    <a href="/ejemplo3">
                        <p>Ejemplo3</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Recursos</h4>
                    <a href="/ejemplo4">
                        <p>Ejemplo4</p>
                    </a>
                    <a href="/ejemplo5">
                        <p>Ejemplo5</p>
                    </a>
                    <a href="/ejemplo6">
                        <p>Ejemplo6</p>
                    </a>
                </div>
                    <div className="sb_footer-links_div">
                        <h4>Patrocinadores</h4>
                        <a href="https://www.nintendo.com/es-es/?srsltid=AfmBOoq9XflZNdsE1XnISQlaESEEwcJIUNfv5viia9Za8WusX-GheFCK">
                            <p>Nintendo</p>
                        </a>
                        <a href="https://www.xbox.com/es-CL/?xr=mebarnav">
                            <p>Microsoft</p>
                        </a>
                        <a href="https://www.playstation.com/es-cl/ps5/">
                            <p>Sony</p>
                        </a>

                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Compañia</h4>
                    <a href="https://www.valvesoftware.com/es/about">
                        <p>Sobre nosotros</p>
                    </a>

                    <a href="/historia">
                        <p>Historia</p>
                    </a>
                    <a href="/contactanos">
                        <p>Contactanos</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Nuestras Redes</h4>
                    <div className="socialmedia">
                        <a href="https://www.facebook.com/Steam"><img src={facebook} alt="..."/></a>
                        <a href="https://x.com/Steam"><img src={twiter} alt="..."/></a>
                        <a href="https://www.instagram.com/steam_games_official/?hl=es"><img src={instagram} alt="..."/></a>
                        <a href="https://store.steampowered.com/?l=spanish"><img src={steam} alt="..." /></a>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-bellow">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Valve Corporation. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="sb_footer-bellow-links">
                        <a href="">
                            <div><p>Terminos y Condiciones</p></div>
                        </a>
                        <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_">
                            <div><p>Privacidad</p></div>
                        </a>
                        <a href="/seguridad">
                            <div><p>Seguridad</p></div>
                        </a>
                        <a href="/declaracion">
                            <div><p>Declaracion de Cookies</p></div>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer