import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ArrowBack.css'

const ArrowBack = ({targetRef, scrollToRef}) => {
  const [showArrow, setShowArrow] = useState(false);
  const [offsetBottom , setOffsetBottom] = useState(20);
  useEffect(() => {
    const attentionToSec = ()=> {
      if(!targetRef.current) return 
      const sectionTop = targetRef.current.offsetTop;
      const currentScroll = window.scrollY + window.innerHeight;
      setShowArrow(currentScroll > sectionTop + 100);
      const totalPageHeight = document.body.scrollHeight
      const scrollPosition = window.scrollY + window.innerHeight
      const distanceFromBottom = totalPageHeight - scrollPosition
      const isMobile = window.innerWidth <= 992;
      if (distanceFromBottom < 100) {
        const extra = isMobile ? 110 : 20;
        setOffsetBottom(50-distanceFromBottom + extra)
      }else{
        setOffsetBottom(isMobile ? 110 : 20)
      }
    }
    window.addEventListener('scroll', attentionToSec );
    return ()=> window.removeEventListener('scroll', attentionToSec);
  },[targetRef]);
  const scrollToTop = () => {
    scrollToRef.current?.scrollIntoView({behavior : 'smooth'});
  };
  return (
      <div className="arrow-container">
        <button className={`arrowBack ${showArrow ? "show" : ""}`} onClick={scrollToTop} style={{bottom: `${offsetBottom}px`}}><FaArrowUp /></button>
      </div>
  )
}

export default ArrowBack
