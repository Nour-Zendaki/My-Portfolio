import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useRef } from 'react'
import './Footer.css'

const Footer = ({rights, develop}) => {
    const social = [
        {
            icon : <FaFacebookF />,
            url : "https://www.facebook.com/share/163j7aQpeF/"
        },
        {
            icon : <FaInstagram />,
            url : "https://www.instagram.com/nour.zendaki?igsh=MXFwdDFtam9tbjZ0Yw=="
        },
        {
            icon : <FaLinkedinIn />,
            url : "https://www.linkedin.com/in/nour-alhuda-zendaki-4a36b2255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            icon : <FaGithub />,
            url : "https://github.com/Nour-Zendaki"
        }
    ]
  return (
    <div className='footer'>
      <p>{rights}</p>
      <p>{develop}</p>
      <ul className="social">
        {social.map((social, index)=> (
            <a href={social.url} target='_blank' rel='noopener noreferrer' key={index} className='goToSocial'><li>{social.icon}</li></a>
        ))}
      </ul>
    </div>
  )
}

export default Footer
