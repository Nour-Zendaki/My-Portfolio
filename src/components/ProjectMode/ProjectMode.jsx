
import './ProjectMode.css'
import {useTheme } from '../../context/ThemeContext'

const ProjectMode = ({darkBtn, lightBtn}) => {
    const {theme, toggleTheme} = useTheme()
  return (
    <>
        <button className='mode-btn' onClick={toggleTheme}>{theme === 'light' ? darkBtn : lightBtn}</button>
    </>
  )
}

export default ProjectMode
