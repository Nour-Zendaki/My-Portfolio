import Button from '../Button/Button'
import './Hero.css'

const Hero = ({personalPhoto, lines, layout, myImageCircle, squers, span, title , describtion, btn}) => {
  return (
    <div className='hero' id='hero'>
      <div className="container">
        <h1><span>{span}</span>{title}</h1>
        <p className='describtion'>{describtion}</p>
        <a href="/assets/files/NourAlhudaZendakiCV.pdf" download><Button className="hero-btn"  btn="Download Cv" /></a>
      </div>
      <div className="layout">{layout}</div>
      <div className="images">
        {/* <img src={personalPhoto} alt="personalPhoto" className='personalPhoto'/> */}
        <img src={myImageCircle} alt="myImageCircle" className='myImageCircle'/>
        <img src={squers} alt="squers Design" className='squers'/>
        <img src={lines} alt="Lines Style" className='lines'/>
      </div>
    </div>
  )
}

export default Hero
