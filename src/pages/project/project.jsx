import { useParams, Link} from 'react-router-dom'
import './project.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from './image/image';
import Card from '../works/cards/card';







export default function Project(){

    const [project, setProject] = useState({});
    const [more, setMore] = useState({})
    const params = useParams();
    


    useEffect(() => {
        axios.get('/projects.json')
            .then(response => {
                const selectedWork = response.data.works.find(work => work.urlname === params.name )
                setProject(selectedWork)
            })
            .then(response => {
                const moreWorks = response.data.works.find(work => work.urlname !== params.name )
                setMore(moreWorks)
            })
    })

    
    return <>
        <section className="project__container">
                <article className="project__title">
                    <button className="back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12.9999L20 10.9999L8 10.9999L13.5 5.49992L12.08 4.07992L4.16 11.9999L12.08 19.9199L13.5 18.4999L8 12.9999L20 12.9999Z" fill="black"/>
                        </svg><span className="back__text">back</span>
                    </button>
                    <h1 className="project__name">{project.name}</h1>
                </article>
                <article className='details'>
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
                            <p className='detail__text'>{project.year}</p>
                        </div>
                        <div className="detail">
                            <h3 className='detail__title'>Link:</h3>
                            <p className='detail__text'>{project.year}</p>
                        </div>
                        <p className="detail__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, debitis corporis obcaecati libero quisquam modi consectetur. Quia optio cum soluta quod tenetur aliquam mollitia. Ex quaerat accusamus accusantium ea velit.</p>
                    </div>
            </article>
            <h2 className='objectives__title'>Objectives & goals</h2>
            <article className="objectives">
                <ul>
                    <li>{project.objective1}</li>
                    <li>{project.objective2}</li>
                    <li>{project.objective3}</li>
                    <li>{project.objective4}</li>
                    <li>{project.objective5}</li>
                    <li>{project.objective6}</li>
                </ul>
            </article>

        <h2 className='more__title'>More Projects</h2>
        <article className="more__projects">
            <h1>
                
            </h1>
        </article>
        </section>
    </>


}