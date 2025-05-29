import { FaCircle } from 'react-icons/fa'
import './EduAndExp.css'

const eduAndExp = [
  {
    startingSign : <FaCircle />,
    title : "Information Technology",
    explain : "I am an IT Engineering student at (IUST).Throughout my academic journey, I have built a solid foundation in computer science, learning programming languages such as C, C++, and C#. My studies have focused on algorithms, data structures, and object-oriented programming, which have enhanced my logical thinking and problem-solving skills."
  },
  {
    startingSign : <FaCircle />,
    title : "Frontend Developer Trainee",
    explain : "During my front-end development training at Vica Company, I established a solid foundation in HTML and pure CSS, and gradually advanced to JavaScript, React.js, and Tailwind CSS. I was also introduced to Next.js, along with essential tools such as Bootstrap and GitHub. Throughout the program, I applied my skills through practical, real-world projects that demonstrated each stage of my technical progression."
  },
  {
    startingSign : <FaCircle />,
    title : "Languages",
    explain : "I studied English at an institute and have an intermediate level that allows me to communicate effectively. I'm always working to improve my skills further."
  },
  {
    startingSign : <FaCircle />,
    title : "Computer Skills",
    explain : "I have Knowledge how using PowerPoint and Word, and have created numerous documents and presentations for various purposes."
  }
]
const EduAndExp = ({text, title}) => {
  return (
    <div className='eduAndExp-container' id='eduAndExp'>
      <img src="/assets/img/design.svg" alt="" className='design right'/>
      <div className="head">
        <p className='text-head'>{text}</p>
        <h1 className='title-head'>{title}</h1>
      </div>
      <div className="exp-Section">
      {eduAndExp.map((parag, index) => (
        <div className="paragraph" key={index}>
          <div className="paragraph-margin">{parag.startingSign}</div>
          <div className="expAndEdu">
            <h3 className='parag-title'>{parag.title}</h3>
            <p className='parag-explain'>{parag.explain}</p>
          </div>
        </div>
      ))}
      </div>
      <img src="/assets/img/design.svg" alt="" className='design left'/>
    </div>
  )
}

export default EduAndExp
