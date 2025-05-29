import { CiCircleList } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useActive } from '../../context/ActiveContext'
import './NavBar.css'
import ProjectMode from '../ProjectMode/ProjectMode'
import { IoMoon } from 'react-icons/io5'
import { MdLightMode } from 'react-icons/md'


const NavBar = ({logo, navItems}) => {
  const {activeSection, setActiveSection} = useActive();
  const location = useLocation();
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [isListOpen, setIsListOpen] =useState(false);
  const [listPosition, setListPosition] = useState({top: 0, left: 0})
  const calculatePosition = useCallback(() => {
    if (btnRef.current) {
      const btnRect = btnRef.current.getBoundingClientRect();
      const listWidth = menuRef.current.offsetWidth;
      setListPosition({
        top: btnRect.bottom - 35,
        left: btnRect.left - listWidth - 35
      })
    }
  })
  useEffect(() => {
    if (isListOpen) {
      calculatePosition()
      window.addEventListener('resize', calculatePosition)
    }
    return () => window.removeEventListener('resize',calculatePosition)
  }, [isListOpen, calculatePosition])
  
  useEffect(()=> {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)){
        setIsListOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  },[])

  const handleNavClick =(href) => {
    setIsListOpen(false);
    if (href.startsWith('#')) {
      const section = document.getElementById(href.replace('#', ''))
      if (section) {
        const offset = 54
        const sectionTop = section.offsetTop - offset
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        })
      }
    }
  }

  const isActive = (href) => {
    return href.startsWith('#') ? activeSection === href : location.pathname === href;
  }
  
  return (
    <nav>
      <h1>{logo}</h1>
      <ul 
      ref={menuRef} 
      className={`nav-list ${isListOpen ? 'active' : ''}`}
      style={{
        top: `${listPosition.top}px`,
        left: `${listPosition.left}px`
      }}
      >
        {navItems?.map((item , index) => {
        return (
          <li key={index}>
            <Link 
            to={item.href} 
            className={isActive(item.href) ? 'active' : ''}
            onClick={(e)=> {
              if (item.href.startsWith('#')) {
                e.preventDefault();
                handleNavClick(item.href)
              }
              setIsListOpen(false);
            }}
            >
              {item.content}
            </Link>
          </li>
        )
        })}
      </ul>
      <div className="listAndMode">
        <button ref={btnRef} className='sideList' onClick={() => setIsListOpen(!isListOpen)}>{isListOpen ? <FaXmark /> : <CiCircleList />}</button>
        <ProjectMode darkBtn={<IoMoon />} lightBtn={<MdLightMode />} />
      </div>

    </nav>
  )
}

export default NavBar
