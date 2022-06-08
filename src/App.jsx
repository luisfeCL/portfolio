
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import Home from './pages/home/home';
import Works from './pages/works/works';
import Project from './pages/project/project';
import About from './pages/about/about';





function App() {
return (
    <>
        <main className='container'>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/works' element={<Works/>}></Route>
                <Route path='/project/:name' element={<Project/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </main>
    </>
);
}

export default App;
