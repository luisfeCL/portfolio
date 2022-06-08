
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import Home from './pages/home/home';
import Works from './pages/works/works';
import Project from './pages/project/project';





function App() {
return (
    <>
        <main className='container'>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/works' element={<Works/>}></Route>
                <Route path='/project/:name' element={<Project/>}></Route>
            </Routes>
        </main>
    </>
);
}

export default App;
