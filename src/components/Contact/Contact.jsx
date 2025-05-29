import { BsTelephone } from 'react-icons/bs'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import Button from '../Button/Button'


const Contact = ({subTitle, title, span}) => {
    const communicationItems = [
        {
            icon : <BsTelephone />,
            name : "Call me",
            content : "+963934614650"
        },
        {
            icon : <HiOutlineMail />,
            name : "Email me",
            content : "nour.nour.nr2004@gmail.com"
        },
        {
            icon : <GrLocation />,
            name : "Address",
            content : "Damascus,syria"
        }
    ]
  return (
    <div className='contact-container'>
        <div className="secHead">
            <div className="title">
                <p className='subTitle'>{subTitle}</p>
                <h1 className='mainTitle'>{title}<span className='span'>{span}</span></h1>
            </div>
        </div>
        <div className="information">
            <ul className='my-communication'>
                {communicationItems.map((communi, index)=> (
                    <li key={index} className='info'>
                        <div className='communi-icon'>{communi.icon}</div>
                        <div className='details'>
                            <p className='communi-name'>{communi.name}</p>
                            <p className='communi-content'>{communi.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="fill-form">
                <form>
                    <input type="text" placeholder='Full name' className='boxes name sameStyleBoxes'/>
                    <input type="email" placeholder='Your email'className='boxes sameStyleBoxes' />
                </form>
                <input type="number" placeholder='Phone number' className='boxes number'/>
                <textarea name="message" id="message" rows="10" placeholder='Message' className='boxes'></textarea>
                <Button className="contact-btn"  btn="Send Message" />
            </div>
        </div>
    </div>
  )
}

export default Contact
