import './links.css'


export default function Pagenav(props){
    return <a className="nav-link" href={props.link}>{props.text}</a>
}