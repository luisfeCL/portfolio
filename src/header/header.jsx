import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/themeContext'
import './header.css'
import Logo from './Logo/logo'
import Nav from './nav/nav'



export default function Header(){
    const {theme} = useContext(ThemeContext)
    return <header id={theme}>
        <Link to={`/`}><Logo></Logo></Link>
        <Nav></Nav>
    </header>

}