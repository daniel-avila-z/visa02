import React from 'react';
import '@styles/main.css';
import whatsappLogoSinBorde from '@images/whatsappLogoSinBorde.svg';
import mockup from '@images/passporteSinFondo.png';
import reloj2 from '@images/reloj2.svg';
import billeteraAhorro from '@images/billeteraAhorro.svg';
import relajate from '@images/relajate.svg';
import mrbean from '@images/mrbean.gif';
import instagramLOGO2 from '@images/instagramLOGO2.svg';
import facebookLOGO from '@images/facebookLOGO.svg';
import gmailLOGO from '@images/gmailLOGO.svg';
import whatsappLogo from '@images/whatsappLogo.svg'

import BarNav from '@components/BarNav.jsx'
const Spa = () => {
    return (
        <div>
            <header className="header">
                <BarNav/>
                <section className="container header__main">
                    <div className="header__textos">
                        <h1 className="title">La mejor Asesoría <span className="title__active">Garantizada</span></h1>
                            <p className="copy">Nos aseguramos en ayudarte a conseguir la <span className="visa">Visa</span> que tanto <span className="copy__active ">deseas</span>.</p>
                            <a id="boton" href="#" target="_blank">
                            Contactanos<span className="espacioBlanco">...</span><img className="logito__whatsapp" src={whatsappLogoSinBorde} alt="whatsappLogoSinBorde" />
                            </a>
                    </div> 
                    <img src={mockup} className="mockup" />
                </section>
            </header>
            {/* LO QUE HACEMOS */}
            <main> 
                <section className="hacemos">
                <div className="container"> 
                    <h2 className="subtitle"><span className="point">¿</span>Qué hacemos<span className="point">?</span></h2>
                    <p className="copy__section">Te ofrecemos los servicios perfectos para que logres obtener tu <span className="visa">Visa</span>.
                    </p><article className="container-cards">
                    <div className="card">
                        <img src={reloj2} alt="" className="card__img" />
                        <div className="card__text">
                        <h3 className="card__title">Sin contratiempos</h3>
                        <p className="card__copy">Sabemos que hacer para que no tengas que esperar</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={billeteraAhorro} alt="" className="card__img" />
                        <div className="card__text">
                        <h3 className="card__title">Sin repeticiones costosas</h3>
                        <p className="card__copy">No te arriesgues a que te rechacen, con nosotros sabrás qué hacer</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={relajate} alt="" className="card__img" />
                        <div className="card__text">
                        <h3 className="card__title">Sin preocupaciones</h3>
                        <p className="card__copy">Descansa y dejánoslo todo a nosotros, para que no estés despiert@ cazando la cita</p>
                        </div>
                    </div>
                    </article>
                </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container footer__caption">
                <h2 className="subtitle">
                    Preguntas Frecuentes
                </h2>
                <details>
                    <summary><p className="pregunta">¿Pregunta?</p></summary>
                    <div>
                    <h3 className="respuesta">
                        Respuesta
                    </h3>
                    </div>
                </details>
                <details>
                    <summary><p className="pregunta">¿Pregunta?</p></summary>
                    <div>
                    <h3 className="respuesta">
                        Respuesta
                    </h3>
                    </div>
                </details>
                <details>
                    <summary><p className="pregunta">¿Pregunta?</p></summary>
                    <div>
                    <h3 className="respuesta">
                        Respuesta
                    </h3>
                    </div>
                </details>
                </div>
                {/* CONTACTO */} 
                <div className="container contacto">
                <div>
                    <h2 className="contactoSub">
                    Contactanos
                    </h2>
                    <p className="contactoCopy">Contratanos para evitar malos resultados</p>
                </div>
                <img src={mrbean} className="gif" alt="" />
                </div>
                <div className="contact">
                <div className="item__contact">
                    <a href="" className="link">
                    <img src={instagramLOGO2} alt="" srcSet="" className="logoContacto" />
                    </a>
                </div>
                <div className="item__contact">
                    <a href="" className="link">
                    <img src={facebookLOGO} alt="" srcSet="" className="logoContacto" />
                    </a>
                </div>
                <div className="item__contact">
                    <a href="" className="link">
                    <img src={gmailLOGO} alt="" srcSet="" className="logoContacto" />
                    </a>
                </div>
                <div className="item__contact ">
                    <a href="" className="link">
                    <img src={whatsappLogo} alt="" srcSet="" className="logoContacto" />
                    </a>
                </div>
                </div>
            </footer>

        </div>
    );
};

export default Spa;



// import React from 'react';
// import '@styles/Header.scss';

// import menu from '@icons/icon_menu.svg';
// import logo from '@logos/logo_yard_sale.svg';
// import carrito from '@icons/icon_shopping_cart.svg';

// const Header = () => {
//     return (
//     <nav>
//         <img src={menu} alt="menu" className="menu" />
//         <div className="navbar-left">
//             <img src={logo} alt="logo" className="nav-logo" />
//             <ul>
//                 <li>
//                     <a href="/">All</a>
//                 </li>
//                 <li>
//                     <a href="/">Clothes</a>
//                 </li>
//                 <li>
//                     <a href="/">Electronics</a>
//                 </li>
//                 <li>
//                     <a href="/">Furnitures</a>
//                 </li>
//                 <li>
//                     <a href="/">Toys</a>
//                 </li>
//                 <li>
//                     <a href="/">Others</a>
//                 </li>
//             </ul>
//         </div>
//         <div className="navbar-right">
//             <ul>
//                 <li className="navbar-email">platzi@example.com</li>
//                 <li className="navbar-shopping-cart">
//                     <img src={carrito} alt="shopping cart" />
//                     <div>2</div>
//                 </li>
//             </ul>
//         </div>
//     </nav>

//     );
// };

// export default Header;