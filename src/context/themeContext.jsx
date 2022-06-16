import { createContext, useState } from "react";


const ThemeContext = createContext();



const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState()

    const handleTheme = (e) =>{
        console.log(e.target.value)
        if(e.target.value === "light"){
            document.body.style.setProperty('--body-bgcolor', 'White')
            setTheme("light")
            
        }else{
            document.body.style.setProperty('--body-bgcolor', '#393D60')
            setTheme("dark")
        }
    };
    const data = {theme, handleTheme}
    return <ThemeContext.Provider value={data}> {children} </ThemeContext.Provider>
};

export {ThemeProvider};
export default ThemeContext

