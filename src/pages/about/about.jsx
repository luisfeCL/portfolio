import "./about.css";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";



export default function About() {
    const {theme} = useContext(ThemeContext)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration:2000}})
    document.body.style.setProperty('--container-bgcolor', 'linear-gradient(1.67deg, #11875D -24.41%, rgba(125, 114, 196, 0) 119.89%)')


return (<animated.main style={props} className="container">
    <section id={theme} className="aboutContainer">
    <h1 className="aboutTitle">Sobre mí</h1>
    <article className="infoContainer">
        <button id={theme} className="mailButton">Mail</button>
        <ul  className="socialNetworks">
            <li className="socialNetwork"><a id={theme} className="socialNetworkLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/luisfe-camacho
">LinkedIn</a></li>
            <li className="socialNetwork"><a id={theme} className="socialNetworkLink" target='_blank' rel="noreferrer" href="https://twitter.com/MarxistaMarxoso">Twitter</a></li>
            <li className="socialNetwork"><a id={theme} className="socialNetworkLink" target='_blank' rel="noreferrer" href="https://github.com/luisfeCL">Github</a></li>
        </ul>

        <p className="aboutPresentation">
            Video & Motion Graphic designer.<br/> 
            tras más de 5 años dedicándome a la producción audiovisual encontré en el desarrollo web la interacción que necesitaba y que me faltaba en mi vídeos.
            Decidí realizar un master en desarrollo web en ESAT (Valencia) y ahora ando en busca de mi primera experiencia como desarrollador.
        </p>
    </article>
    <h1 className="aboutTitle">Previous experiences</h1>
    <article className="infocontainer">
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
    </article>
    </section>
    </animated.main>
);
}
