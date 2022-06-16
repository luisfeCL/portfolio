
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './pages/loader/loader';
import Header from './header/header';
import Home from './pages/home/home';
import Works from './pages/works/works';
import Project from './pages/project/project';
import About from './pages/about/about';
import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from './context/themeContext';
import SideMenu from './header/nav/sideMenu/sideMenu';

export const ThemeContext = createContext(null);


function App() {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
return (
    <>
        {
            loading ?
                <Loader></Loader>
            :
            
            <ThemeProvider>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/works' element={<Works/>}></Route>
                        <Route path='/works/:name' element={<Project/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                    </Routes>
            </ThemeProvider>
            

        }

    </>

);
}

export default App;
