import "./home.css";
import { useSpring, animated } from "react-spring";
import ThemeContext from "../../context/themeContext";
import { useContext } from 'react'


export default function Home() {
    const {theme} = useContext(ThemeContext)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration:2000}})
    return (
        <animated.main style={props} className= "container" id={theme}>
        <section id={theme} className="intro">
            <article className="helloContainer">
                <h1 className="hello">Hi, I'm Luisfe 👋</h1>
                <h2 className="subtitle">Frontend developer</h2>
                <button id={theme} className="contactButton">Get in touch!</button>
            </article>
            <article className="presentationContainer">
                <p className="presentationText">
                Lorem ipsum dolor sit amet consectetur adipiscing elit elementum, sem
                fusce felis porttitor nam quisque curae nibh erat, suscipit dapibus
                mollis aptent vivamus metus mus. Id donec faucibus tincidunt congue
                mauris diam facilisis pharetra sed, lobortis parturient fusce primis
                euismod aptent sem mollis dapibus, hac a molestie platea rutrum felis
                turpis hendrerit. Nascetur vestibulum consequat sociis in odio iaculis
                eleifend, rhoncus eros id felis suspendisse erat, sed ultrices tempus
                rutrum porttitor nisi.
                </p>
            </article>
        </section>
        </animated.main>
    );
    }
