import { Link } from 'react-router-dom'
import Pagenav from '../links/links'
import ThemeButton from '../themeButton/themeButton'
import './sideMenu.css'

export default function SideMenu(){
    return <div className="menu__container">
            <button className='menu__close'>X</button>
            <div className="menu">
            <Link to={`/`} className="nav-link"><Pagenav text="Home"></Pagenav></Link>
            <Link to={`/works`} className="nav-link"><Pagenav text="Works"></Pagenav></Link>
            <Link to={`/about`} className="nav-link"><Pagenav text="About"></Pagenav></Link>
            </div>
            <div className="theme__container">
                <ThemeButton></ThemeButton>
            </div>
    </div>
}