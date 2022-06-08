import './nav.css'
import Switch from './switch/switch'
import Pagenav from './links/links'


export default function Nav(){
    return <nav>
            <Pagenav text="Works" link="/works"></Pagenav>
            <Pagenav text="About" link="/about"></Pagenav>
            <Switch></Switch>
        </nav>
}