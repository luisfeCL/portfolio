import { useParams, Link} from 'react-router-dom'
import './project.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from './image/image';
import { useSpring, animated } from "react-spring";
import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import MoreProjects from './moreProjects/moreProjects';


export default function Project(){
    const {theme} = useContext(ThemeContext)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const [project, setProject] = useState({});
    const [more, setMore] = useState([])
    const params = useParams();
    
    useEffect(() => {
        axios.get('/projects.json')
            .then(response => {
                const selectedWork = response.data.works.find(work => work.urlname === params.name )
                setProject(selectedWork)
                const moreWorks = response.data.works.filter(other => other.urlname !== params.name )
                setMore(moreWorks)
            })
    },[])



    return <>
        <animated.section style={props} className="project__container">
                <article id={theme} className="project__title">
                    <Link to={`/works`} id={theme} className="back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id={theme} d="M20 12.9999L20 10.9999L8 10.9999L13.5 5.49992L12.08 4.07992L4.16 11.9999L12.08 19.9199L13.5 18.4999L8 12.9999L20 12.9999Z" fill="black"/>
                        </svg><span className="back__text">back</span>
                    </Link>
                    <h1 className="project__name">{project.name}</h1>
                </article>
                <article id={theme} className='details'>
                    <Image 
                        color={project.color} 
                        techImage1={project.techimage1} 
                        techImage2={project.techimage2} 
                        techImage3={project.techimage3} 
                        techImage4={project.techimage4} 
                        name={project.name}>
                    </Image>
                    <div className='detail__container'>
                        <div className="detail">
                            <h3 className='detail__title'>Year:</h3>
                            <p className='detail__text'>{project.year}</p>
                        </div>
                        <div className="detail">
                            <h3 className='detail__title'>Category:</h3>
                            <p className='detail__text'>{project.category}</p>
                        </div>
                        <div className="detail">
                            <h3 className='detail__title'>Github repository:</h3>
                            <p className='detail__text'><a target="_blank" href={project.github}>Github/{project.name}</a></p>
                        </div>
                        <div className="detail">
                            <h3 className='detail__title'>Link:</h3>
                            <p className='detail__text'><a target="_blank" href={project.link}>{project.linktext}</a></p>
                        </div>
                        <p className="detail__description">{project.description}</p>
                    </div>
            </article>
            <h2 id={theme} className='objectives__title'>Objectives & goals</h2>
            <article id={theme} className="objectives">
                <ul>
                    <li>{project.objective1}</li>
                    <li>{project.objective2}</li>
                    <li>{project.objective3}</li>
                    <li>{project.objective4}</li>
                    <li>{project.objective5}</li>
                    <li>{project.objective6}</li>
                </ul>
            </article>

        <h2  className='more__title'>More Projects</h2>
        <article className="more__projects--container">
            
            {more.map(more => <a className='other__project' href={`/works/${more.urlname}`}>
                <MoreProjects color={more.color} 
                        moreImage1={more.techimage1} 
                        moreImage2={more.techimage2} 
                        moreImage3={more.techimage3} 
                        moreImage4={more.techimage4} 
                        name={more.name}>
                </MoreProjects>
            </a>)}
            
        </article>
        </animated.section>
        <footer>
            <h5>Designed & Coded with 💜 by Luisfe (and with Figma & React)</h5>
            <div className='rrss__footer'>
                <a className='rrss__link' href="twitter.com">
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.92 12C43.38 12.7 41.72 13.16 40 13.38C41.76 12.32 43.12 10.64 43.76 8.62C42.1 9.62 40.26 10.32 38.32 10.72C36.74 9 34.52 8 32 8C27.3 8 23.46 11.84 23.46 16.58C23.46 17.26 23.54 17.92 23.68 18.54C16.56 18.18 10.22 14.76 5.99996 9.58C5.25996 10.84 4.83996 12.32 4.83996 13.88C4.83996 16.86 6.33996 19.5 8.65996 21C7.23996 21 5.91996 20.6 4.75996 20C4.75996 20 4.75996 20 4.75996 20.06C4.75996 24.22 7.71996 27.7 11.64 28.48C10.92 28.68 10.16 28.78 9.37996 28.78C8.83996 28.78 8.29996 28.72 7.77996 28.62C8.85996 32 12 34.52 15.78 34.58C12.86 36.9 9.15996 38.26 5.11996 38.26C4.43996 38.26 3.75996 38.22 3.07996 38.14C6.87996 40.58 11.4 42 16.24 42C32 42 40.66 28.92 40.66 17.58C40.66 17.2 40.66 16.84 40.64 16.46C42.32 15.26 43.76 13.74 44.92 12Z" fill="white"/>
                    </svg>
                </a>
                <a className='rrss__link' href="twitter.com">
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4C21.3736 4 18.7728 4.51732 16.3463 5.52241C13.9198 6.5275 11.715 8.00069 9.85787 9.85786C6.10714 13.6086 4 18.6957 4 24C4 32.84 9.74 40.34 17.68 43C18.68 43.16 19 42.54 19 42C19 41.54 19 40.28 19 38.62C13.46 39.82 12.28 35.94 12.28 35.94C11.36 33.62 10.06 33 10.06 33C8.24 31.76 10.2 31.8 10.2 31.8C12.2 31.94 13.26 33.86 13.26 33.86C15 36.9 17.94 36 19.08 35.52C19.26 34.22 19.78 33.34 20.34 32.84C15.9 32.34 11.24 30.62 11.24 23C11.24 20.78 12 19 13.3 17.58C13.1 17.08 12.4 15 13.5 12.3C13.5 12.3 15.18 11.76 19 14.34C20.58 13.9 22.3 13.68 24 13.68C25.7 13.68 27.42 13.9 29 14.34C32.82 11.76 34.5 12.3 34.5 12.3C35.6 15 34.9 17.08 34.7 17.58C36 19 36.76 20.78 36.76 23C36.76 30.64 32.08 32.32 27.62 32.82C28.34 33.44 29 34.66 29 36.52C29 39.2 29 41.36 29 42C29 42.54 29.32 43.18 30.34 43C38.28 40.32 44 32.84 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4Z" fill="white"/>
                    </svg>
                </a>
                <a className='rrss__link' href="twitter.com">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="white"/>
                </svg>
                </a>
            </div>
        </footer>
    </>


}