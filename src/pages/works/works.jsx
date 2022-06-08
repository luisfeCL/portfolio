import Card from './cards/card'
import './works.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Works(){


    const [works, setWorks]= useState([]);

    useEffect(() => {
        axios.get('/projects.json')
        .then(response => setWorks(response.data.works));
    }, [])

    return <article className='worksContainer'>
                <section className='sectionHeader'>
                    <h1 className="title">
                        My projects
                    </h1>
                    <button className="resumeButton">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12.3751V14.6251H18L11.8125 20.8126L13.41 22.4101L22.32 13.5001L13.41 4.59009L11.8125 6.18759L18 12.3751H4.5Z" fill="black"/>
                        </svg> My resume
                    </button>
                </section>
                <section className="works">
                        {works.map(work => <Link to={`/project/${work.urlname}`}>
                            <Card year={work.year} title={work.name} category={work.category}></Card>
                            </Link>)}
                    {/* <Card year='2022' title='emojiBook' category='Wordpress blog'></Card> */}
                </section>
            </article>
}