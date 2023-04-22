import React from 'react';
import '@styles/main.css';

const Spa = () => {
    return (
        <div>
            <header className="header">
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
            </header>
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