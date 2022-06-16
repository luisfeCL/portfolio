import Card from './cards/card'
import './works.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from "react-spring";
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

export default function Works(){
    const {theme} = useContext(ThemeContext)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration:2000}})
    const [works, setWorks]= useState([]);
    const [activeWork, setActiveWorks] = useState(true);

    useEffect(() => {
        axios.get('/projects.json')
        .then(response => setWorks(response.data.works));
    }, [])

    document.body.style.setProperty('--container-bgcolor', 'linear-gradient(1.67deg, #DF88CC -24.41%, rgba(82, 176, 182, 0) 119.89%)')

    return <animated.main style={props} className="container">
    <article id={theme} className='worksContainer'>
                <section className='sectionHeader'>
                    <h1 className="title">
                        My projects
                    </h1>
                    <a href='/LuisfeCV.pdf' download="Luisfe CV" id={theme} className="resumeButton">
                        <svg  width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id={theme} d="M4.5 12.3751V14.6251H18L11.8125 20.8126L13.41 22.4101L22.32 13.5001L13.41 4.59009L11.8125 6.18759L18 12.3751H4.5Z" fill="black"/>
                        </svg> <span className='resumeButton__text'>My resume</span>
                    </a>
                </section>
                <section className="works" onMouseLeave={()=> setActiveWorks(false)}>
                        {works.map(work => <Link className='work' to={`/works/${work.urlname}`}>
                            <Card active={activeWork !== work.name} handleHover={() => setActiveWorks(work.name)} year={work.year} title={work.name} category={work.category}></Card>
                        </Link>)}
                    {/* <Card year='2022' title='emojiBook' category='Wordpress blog'></Card> */}
                </section>
            </article>
            </animated.main>
}


// onMouseLeave={setActiveWorks(true)}
