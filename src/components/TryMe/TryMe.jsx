import { FaArrowRight } from 'react-icons/fa'
import Button from '../Button/Button'
import './TryMe.css'

const TryMe = ({image, title, description, span}) => {
  return (
    <div className='tryMe-container'>
        <div className="content">
        <div className="text">
            <h1 className='title'>{title}</h1>
            <p className='desc'>{description}<span className='span'>{span}</span></p>
        </div>
        <a href="#contact"><Button className="contact-btn" btn="Contact" icon={<FaArrowRight className='arrow-icon' />} /></a>
        </div>
    </div>
  )
}

export default TryMe
