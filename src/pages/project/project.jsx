import { useParams, Link} from 'react-router-dom'
import './project.css'
import axios from 'axios';
import { useEffect, useState } from 'react';







export default function Project(){

    const [project, setProject] = useState({});

    const params = useParams();


    useEffect(() => {
        axios.get('/projects.json')
            .then(response => {
                const selectedWork = response.data.works.find(work => work.name === params.name)
                setProject(selectedWork)
            })
    })

    return <>
        <h1>{project.id}</h1>
    </>

}