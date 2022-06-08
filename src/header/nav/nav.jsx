import './nav.css'
import Switch from './switch/switch'
import Pagenav from './links/links'


export default function Nav(){
    return <nav>
            <Pagenav text="Works" link="youtube.com"></Pagenav>
            <Pagenav text="About" link="youtube.com"></Pagenav>
            <Switch></Switch>
        </nav>
}