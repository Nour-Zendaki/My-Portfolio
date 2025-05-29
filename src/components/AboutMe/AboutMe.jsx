import { FaCaretDown } from "react-icons/fa";
import './AboutMe.css'

const skills = [
    {
        name : "HTML5",
        level : "90%"
    },
    {
        name : "CSS3",
        level : "80%"
    },
    {
        name : "Javascript",
        level : "95%"
    },
    {
        name : "React",
        level : "90%"
    }
]
const AboutMe = ({progLang, title, description}) => {
  return (
    <div className='about-container'>
        <img className='progLang-img' src={progLang} alt="" />
        <div className="desc">
            <h1 className='title'>{title}</h1>
            <p className='description'>{description}</p>
            <div className="skill-levels">
                {skills.map((skill, index) => (
                    <div className='skill' key={index}>
                        <h3 className='skill-name'>{skill.name}</h3>
                        <div className="rate" style={{left:skill.level}}>
                            {skill.level}
                            <FaCaretDown className="triangle-icon" />
                        </div>
                        <div className="progressBar">
                            <div className="progress-wrapper"  style={{"--target-width":skill.level}}>
                                <div className="progress-fill"></div>
                                <div className='progress-circle'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutMe
