import React, {createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : 'light'
    })
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
    useEffect(() => {
        document.body.className = theme
        localStorage.setItem('theme',theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)