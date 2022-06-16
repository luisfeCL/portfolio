import './nav.css'
import { useState } from 'react'
import Pagenav from './links/links'
import ThemeButton from './themeButton/themeButton'
import { Link } from 'react-router-dom'
import { useSpring, config, animated } from 'react-spring'
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'



export default function Nav(){
    const {theme} = useContext(ThemeContext)
    const [show, setShow] = useState(false)

    const springWidth = useSpring({
        from:{ width: show ? "0" : "100vw"},
        width: show ? "100vw" : "0",
        display: !show ? "none" : "block",
        config: config.gentle
    })
    const menuOpacity = useSpring({ to: { opacity: 1,
        }, 
        from: { opacity: 0,
        }, 
        config: {duration:500},
        delay: 2000,
    })

    return <>
            <nav className='nav__desktop'>
                <Link to={`/works`} className="nav-link"><Pagenav text="Works"></Pagenav></Link>
                <Link to={`/about`} className="nav-link"><Pagenav text="About"></Pagenav></Link>
                <ThemeButton className="theme__button"></ThemeButton>
            </nav>
            <nav className='nav__mobile'>
                <button id={theme} onClick={()=>{setShow(true)}} className='open__menu'>Menú</button>
                <animated.div id={theme} style={springWidth} className="menu__container">
                    <button onClick={()=>(setShow(false))} className='menu__close'>X</button>
                    <animated.div style={menuOpacity} className="menu">
                        <Link onClick={()=>(setShow(false))} to={`/`} className="nav-link"><Pagenav text="Home"></Pagenav></Link>
                        <Link onClick={()=>(setShow(false))} to={`/works`} className="nav-link"><Pagenav text="Works"></Pagenav></Link>
                        <Link onClick={()=>(setShow(false))} to={`/about`} className="nav-link"><Pagenav text="About"></Pagenav></Link>
                    </animated.div>
                    <animated.div style={menuOpacity} className="theme__container">
                    
                        <ThemeButton></ThemeButton>
                    
                    </animated.div>
                </animated.div>
            </nav>
        </>
        
}