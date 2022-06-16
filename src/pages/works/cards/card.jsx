import './card.css'
import { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'


export default function Card(props){
    const {theme} = useContext(ThemeContext)
    return <div onMouseEnter={props.handleHover} className={props.active ? 'inactive' : 'active'}>
            <div id={theme} className='secondary'>
                <div className="workElement1">{props.year}</div>
                <div className="workElement2">{props.title}</div>
                <div className="workElement3">{props.category}</div>
            </div>
        </div>
}