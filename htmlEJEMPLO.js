import './styles/main.css';

console.log('hola');

const containerPrincipal = document.getElementById('containerPrincipal');
containerPrincipal.innerHTML = `
    <header class="header">
    <nav class="nav__header">
        <div class="container nav__container">
            <input id="nav-toggle" type="checkbox">

            <div class="logo">
                <h2 class="logo_name">Global Consul Management<pan class="point">.</pan></h2>
            </div>
            <div class="links">
                <a href="header" class="link">Inicio</a>
                <a href="main" class="link">¿Que hacemos?</a>
                <a href="" class="link">Preguntas Frecuentes</a>
                <a href="" class="link ">Contacto</a>
            </div>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </div>
    </nav>
    <section class="container header__main">
        <div class="header__textos">
            <h1 class="title">La mejor Asesoria <span class="title__active">Garantizada</span></h1>
            <p class="copy">Nos aseguramos en ayudarte a conseguir la <span class="visa">Visa</span> que tanto <span class="copy__active ">deseas</span></p>
            <a id="boton" href="#" target="_blank">
                Contactanos<span class="espacioBlanco">...</span><img class="logito__whatsapp" src="../src/assets/images/whatsappLogoSinBorde.svg" alt="">
            </a>
        </div> 
        <img src="../src/assets/images/passporteSinFondo.png" class="mockup">
    </section>
    </header>
    <!-- LO QUE HACEMOS -->
    <main> 
    <section class="hacemos">
        <div class="container"> 
            <h2 class="subtitle"><span class="point">¿</span>Qué hacemos<span class="point">?</span></h2>
            <p class="copy__section">Te ofrecemos los servicios perfectos para que logres obtener tu <span class="visa">Visa</span>
            <article class="container-cards">
                <div class="card">
                    <img src="../src/assets/images/reloj2.svg" alt="" class="card__img">
                    <div class="card__text">
                        <h3 class="card__title">Sin contratiempos</h3>
                        <p class="card__copy">Sabemos que hacer para que no tengas que esperar</p>
                    </div>
                </div>
            
            
                <div class="card">
                    <img src="../src/assets/images/billeteraAhorro.svg" alt="" class="card__img">
                    <div class="card__text">
                        <h3 class="card__title">Sin repeticiones costosas</h3>
                        <p class="card__copy">No te arriesges a que te rechazen, con nosotros sabras que hacer</p>
                    </div>
                </div>
            
            
                <div class="card">
                    <img src="../src/assets/images/relajate.svg" alt="" class="card__img">
                    <div class="card__text">
                        <h3 class="card__title">Sin preocupaciones</h3>
                        <p class="card__copy">Descansa y dejanoslo todo a nosotros, para que no estes despiert@ cazando la cita</p>
                    </div>
                </div>
            </article>

        </div>
    </section>
    </main>

    <footer class="footer">
    <div class="container footer__caption">
    <h2 class="subtitle">
        Preguntas Frecuentes
    </h2>
    <details>
        <summary><p class="pregunta">¿Pildora Azul o roja?</p></summary>
    <div>
        <h3 class="respuesta">
                La eleccion es una ilucion
        </h3>
    </div>
    </details>
    <details>
        <summary><p class="pregunta">¿Pildora Azul o roja?</p></summary>
        <div>
            <h3 class="respuesta">
                La eleccion es una ilucion
            </h3>
        </div>
    </details>
    <details>
        <summary><p class="pregunta">¿Pildora Azul o roja?</p></summary>
        <div>
            <h3 class="respuesta">
                La eleccion es una ilucion
            </h3>
        </div>
    </details>
    </div>
    <!-- CONTACTO --> 
    <div class="container contacto">
    <div>
    <h2 class="contactoSub">
        Contactanos
    </h2>
    <p class="contactoCopy">Contratanos para evitar malos resultados</p>
    </div>
    <img src="../src/assets/images/mrbean.gif" class="gif" alt="">
    </div>
    <div class="contact">

    <div class="item__contact">
    <a href="" class="link">
        <img src="../src/assets/images/instagramLOGO2.svg" alt="" srcset="" class="logoContacto">

    </a>
    </div>
    <div class="item__contact">
    <a href="" class="link">
        <img src="../src/assets/images/facebookLOGO.svg" alt="" srcset="" class="logoContacto">

    </a>
    </div>
    <div class="item__contact">
    <a href="" class="link">
        <img src="../src/assets/images/gmailLOGO.svg" alt="" srcset="" class="logoContacto">

    </a>
    </div>
    <div class="item__contact ">
    <a href="" class="link">
        <img src="../src/assets/images/whatsappLogo.svg" alt="" srcset="" class="logoContacto">
        
    </a>
    </div>
    </div>

    </footer>
    `;