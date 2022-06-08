import { useParams} from 'react-router-dom'
import './project.css'




export default function Project(){

    const params = useParams();
    return <h1 className='projectTitle'> hello {params.name} </h1>;
    
}