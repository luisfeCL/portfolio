import './logo.css'
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'


export default function Logo(){
    const {theme} = useContext(ThemeContext)
    return <div id={theme} className="logo" href="/">Luisfe Camacho</div>
}