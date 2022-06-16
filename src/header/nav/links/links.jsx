import './links.css'
import { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'


export default function Pagenav(props){
    const {theme} = useContext(ThemeContext)
    return <div id={theme} className="nav-link">{props.text}</div>
}