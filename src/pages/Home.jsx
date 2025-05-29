import { useEffect, useRef } from "react"
import AboutMe from "../components/AboutMe/AboutMe"
import ArrowBack from "../components/ArrowBack/ArrowBack"
import DividerBetSec from "../components/DividerBetSec/DividerBetSec"
import EduAndExp from "../components/EduAndExp/EduAndExp"
import Hero from "../components/Hero/Hero"
import TryMe from "../components/TryMe/TryMe"
import LatestProject from "../components/LatestProject/LatestProject"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import { useActive } from "../context/ActiveContext"


const Home = () => {
  const {setActiveSection} = useActive();
  const eduSectionRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRef = useRef([])
    useEffect(() => {
      sectionRef.current = Array.from(document.querySelectorAll('section[id]'))
    }, [])
    useEffect(() => {
      let timeoutId
      const handleScroll = () => {
        if (timeoutId) window.cancelAnimationFrame(timeoutId)
          timeoutId = window.requestAnimationFrame(() => {
        const navbarHeight = 54
        const scrollPosition = window.scrollY + navbarHeight
        const active = sectionRef.current.find(section => {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
          const visibilityRatio = visibleHeight / rect.height;
          return visibilityRatio > 0.5;
        });
        if (active) {
          setActiveSection(`#${active.id}`)
        }
      })
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [setActiveSection])
    
    return (
        <>
          <section id="hero" ref={heroRef}><Hero personalPhoto="" lines="/assets/img/hero-lines.svg" layout="" myImageCircle="/assets/img/myImageCircle.png" squers="/assets/img/squers.svg" span="HEY!" title=" I’m Nour, Frontend Developer" describtion="Agency-quality Webflow websites with the personal touch of a freelancer."/></section>
          <DividerBetSec />
          <section id="about"><AboutMe progLang="/assets/img/progLang.png" title="About Me " description="I’m Nour Alhuda Zendaki, a Front-End Developer in training with hands-on experience gained through a development program at VICA. I specialize in building responsive web interfaces and writing clean, efficient code." /></section>
          <section ref={eduSectionRef} id='eduAndExp'><EduAndExp text="Education and Experience" title="Education & Experience" /></section>
          <ArrowBack targetRef={eduSectionRef} scrollToRef={heroRef}/>
          <TryMe image="/assets/img/layer.png" title="Try me out, risk free!" description="If you’re not happy with the design after the first draft,I’ll refund your deposit, " span="no questions asked" />
          <LatestProject id='projects' subTitle="Portfolio" title="My Creative Works Latest " span="Projects"  />
          <section id="contact"><Contact subTitle="Contact" title="Let’s Discuss Your " span="Project" /></section>
          <Footer rights="@ 2025. All Rights Reserved" develop="Develpoment by Nour" />
        </>
    )
}

export default Home
