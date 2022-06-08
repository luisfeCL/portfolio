import { useParams} from 'react-router-dom'
import './project.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




export default function Project(){

    const params = useParams();

    const [projects, setProjects]= useState([]);

    useEffect(() => {
        axios.get('/projects.json')
        .then(response => setProjects(response.data.works));
    }, [])

    return <h1 className='projectTitle'> 
            {projects.map(project => <Link to={`/project/${project.urlname}`}>
                                <p> {project.year} {project.name} {project.category}</p>
                            </Link>)}
        </h1>;
    
}