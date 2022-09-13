import React, { useState }  from 'react';
import '@styles/BarNav.css';
import BurguerButton from '@components/BurguerButton';

const BarNav = () => {
    const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)}

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="Cabecera">
        <div className="logo">
             <h2 className="logo_name">Global Consul Management<span className="point">.</span></h2>
        </div>

        <div
            onClick={ toggleMenu }
         className="Cabecera-button">
            <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className="links">
        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="Cabecera-ul">
                <li className="Cabecera-li"><a href="header" className="link">Inicio</a></li>
                <li className="Cabecera-li"><a href="main" className="link">¿Que hacemos?</a></li>
                <li className="Cabecera-li"><a href="" className="link">Preguntas Frecuentes</a></li>
                <li className="Cabecera-li"><a href="" className="link ">Contacto</a></li>
            </ul>
        </nav>
        </div>
    </header>
)
}

export default BarNav
