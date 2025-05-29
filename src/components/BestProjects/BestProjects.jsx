import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './BestProjects.css'
import Card from '../Card/Card'
import { useEffect, useRef, useState } from 'react'

const cardItems = [
  {
      image : "assets/img/EduPress-Project.png",
      projectTitle : "EduPress Project",
      skills : "Html-Css3-ResponsiveDesign",
      url : "https://nour-zendaki.github.io/Mid-Project/"
  },
  {
      image : "assets/img/Flora-Project.png",
      projectTitle : "Flora Project",
      skills : "Html-Css3-ResponsiveDesign",
      url : "https://nour-zendaki.github.io/Flora-Project/"
  },
  {
      image : "assets/img/K2Skiing-Project.png",
      projectTitle : "K2Skiing Project",
      skills : "Html-Css3",
      url : "https://nour-zendaki.github.io/K2Skiing-Project/"
  },
  {
      image : "assets/img/severalTools-Project.png",
      projectTitle : "severalTools Project",
      skills : "Html-Css3-Vanilla javscript",
      url : "https://nour-zendaki.github.io/Several-Tools-Project/"
  },
  {
      image : "assets/img/Evaluation-Project.png",
      projectTitle : "Evaluation Project",
      skills : "Html-Css3-Vanilla javscript",
      url : "https://nour-zendaki.github.io/Evaluation-Project/"
  },
  {
      image : "assets/img/ShoesShoppingProject.png",
      projectTitle : "Shoes Shopping Project",
      skills : "Html-Css3-Vanilla javscript-CRUD",
      url : "https://nour-zendaki.github.io/Shoes-Shopping-Project/"
  },
  {
      image : "assets/img/DashBoard-Project.png",
      projectTitle : "DashBoard Project",
      skills : "Html-Css3-Vanilla javscript-CRUD-API",
      url : "https://nour-zendaki.github.io/DashBoard-Project/"
  },
  {
      image : "assets/img/Travel-Project.png",
      projectTitle : "Travel Project",
      skills : "Html-Css3",
      url : "https://nour-zendaki.github.io/Travel-Project/"
  }
]
const BestProjects = ({subTitle, title, span}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const [cardWidth, setCardWidth] = useState(0)
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const visibleWidth = containerRef.current.offsetWidth
        const count = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3
        setCardWidth(visibleWidth / count)
      }
    }
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardItems.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardItems.length) % cardItems.length)
  }

  return (
    <div className='bestProjects-container'>
        <div className="secHead">
            <div className="title">
                <p className='subTitle'>{subTitle}</p>
                <h1 className='mainTitle'>{title}<span className='span'>{span}</span></h1>
            </div>
            <div className="slider-btns">
              <button className='slider-btn' onClick={prevSlide}><MdOutlineKeyboardArrowLeft className='desten-icon' /></button>
              <button className='slider-btn' onClick={nextSlide}><MdOutlineKeyboardArrowRight className='desten-icon' /></button>
            </div>
        </div>
        <div className="card-container" ref={containerRef}>
          <div className="slide-track" style={{width: `${cardItems.length * cardWidth}px`, transform: `translateX(-${currentIndex * cardWidth}px)`}}>
            {cardItems.map((item, index) => (
              <div key={index} className='slider-card' style={{width: `${cardWidth}px`}}>
                <Card item={item} index={index}/>
              </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default BestProjects
