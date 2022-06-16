import "./home.css";
import { useSpring, animated } from "react-spring";
import ThemeContext from "../../context/themeContext";
import { useContext } from 'react'


export default function Home() {
    document.body.style.setProperty('--container-bgcolor', 'linear-gradient(1.67deg, #F5E0A9 -24.41%, rgba(107, 172, 219, 0.2) 119.89%)')
    const {theme} = useContext(ThemeContext)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration:2000}})
    return (
        <animated.main style={props} className= "container" id={theme}>
        <section id={theme} className="intro">
            <article className="helloContainer">
                <h1 className="hello">Hi, I'm Luisfe 👋</h1>
                <h2 className="subtitle">Frontend developer</h2>
                <a href="mailto:luisfe.camacho@gmail.com" id={theme} className="contactButton">¡Contactame!</a>
            </article>
            <article className="presentationContainer">
                <p className="presentationText">
                ¡Bienvenido a mi Portfolio!<br/>
                Aquí podrás ver un poco de mi trabajo. soy dearrollador web Frontend con conocimientos en diseño UX|UI.<br/>
                Hace dos años descubrí mi pasión por el diseño y el desarrollo web, ahora intento construir aplicaciones responsive y accesibles para todo el mundo<br/>
                Si te gusta lo que has visto o simplemente quieres hablar no dudes en contactarme :).
                
                </p>
            </article>
        </section>
        </animated.main>
    );
    }
