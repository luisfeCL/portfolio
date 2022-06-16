import { useContext } from 'react'
import './themeButton.css'
import ThemeContext from '../../../context/themeContext'

export default function ThemeButton(){
    const {handleTheme, theme} = useContext(ThemeContext)
    return <>
        <input type="radio" name='theme' id='light' onClick={handleTheme} value='light' />
        <label className='change' htmlFor="light">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id={theme} d="M12 7C13.326 7 14.5978 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5978 16.4732 13.326 17 12 17C10.6739 17 9.40211 16.4732 8.46443 15.5355C7.52675 14.5979 6.99997 13.3261 6.99997 12C6.99997 10.6739 7.52675 9.40215 8.46443 8.46447C9.40211 7.52678 10.6739 7 12 7V7ZM12 9C11.2043 9 10.4413 9.31607 9.87864 9.87868C9.31604 10.4413 8.99997 11.2044 8.99997 12C8.99997 12.7956 9.31604 13.5587 9.87864 14.1213C10.4413 14.6839 11.2043 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 2L14.39 5.42C13.65 5.15 12.84 5 12 5C11.16 5 10.35 5.15 9.60997 5.42L12 2ZM3.33997 7L7.49997 6.65C6.89997 7.16 6.35997 7.78 5.93997 8.5C5.49997 9.24 5.24997 10 5.10997 10.79L3.33997 7ZM3.35997 17L5.11997 13.23C5.25997 14 5.52997 14.78 5.94997 15.5C6.36997 16.24 6.90997 16.86 7.49997 17.37L3.35997 17ZM20.65 7L18.88 10.79C18.74 10 18.47 9.23 18.05 8.5C17.63 7.78 17.1 7.15 16.5 6.64L20.65 7ZM20.64 17L16.5 17.36C17.09 16.85 17.62 16.22 18.04 15.5C18.46 14.77 18.73 14 18.87 13.21L20.64 17ZM12 22L9.58997 18.56C10.33 18.83 11.14 19 12 19C12.82 19 13.63 18.83 14.37 18.56L12 22Z" fill="black"/>
            </svg>
        </label>
        <span>/</span>
        <input type="radio" name='theme' id='dark' onClick={handleTheme} value='dark' />
        <label className='change' htmlFor="dark">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id={theme} d="M17.7499 4.09L15.2199 6.03L16.1299 9.09L13.4999 7.28L10.8699 9.09L11.7799 6.03L9.24995 4.09L12.4399 4L13.4999 1L14.5599 4L17.7499 4.09ZM21.2499 11L19.6099 12.25L20.1999 14.23L18.4999 13.06L16.7999 14.23L17.3899 12.25L15.7499 11L17.8099 10.95L18.4999 9L19.1899 10.95L21.2499 11ZM18.9699 15.95C19.7999 15.87 20.6899 17.05 20.1599 17.8C19.8399 18.25 19.4999 18.67 19.0799 19.07C15.1699 23 8.83995 23 4.93995 19.07C1.02995 15.17 1.02995 8.83 4.93995 4.93C5.33995 4.53 5.75995 4.17 6.20995 3.85C6.95995 3.32 8.13995 4.21 8.05995 5.04C7.78995 7.9 8.74995 10.87 10.9499 13.06C13.1399 15.26 16.0999 16.22 18.9699 15.95ZM17.3299 17.97C14.4999 17.81 11.6999 16.64 9.52995 14.5C7.35995 12.31 6.19995 9.5 6.03995 6.68C3.22995 9.82 3.33995 14.64 6.34995 17.66C9.36995 20.67 14.1899 20.78 17.3299 17.97Z" fill="black"/>
            </svg>
        </label>
    </>
}