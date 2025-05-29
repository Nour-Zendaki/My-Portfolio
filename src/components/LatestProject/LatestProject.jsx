import { MdArrowOutward } from 'react-icons/md'
import Button from '../Button/Button'
import Card from '../Card/Card'
import './latestProject.css'
import { useNavigate } from 'react-router-dom'

const LatestProject = ({subTitle, title, span}) => {
  const cardItems = [
    {
        image : "/assets/img/EduPress-Project.png",
        projectTitle : "EduPress Project",
        skills : "Html-Css3-ResponsiveDesign",
        url : "https://nour-zendaki.github.io/Mid-Project/"
    },
    {
        image : "/assets/img/Flora-Project.png",
        projectTitle : "Flora Project",
        skills : "Html-Css3-ResponsiveDesign",
        url : "https://nour-zendaki.github.io/Flora-Project/"
    },
    {
        image : "/assets/img/K2Skiing-Project.png",
        projectTitle : "K2Skiing Project",
        skills : "Html-Css3",
        url : "https://nour-zendaki.github.io/K2Skiing-Project/"
    },
    {
        image : "/assets/img/severalTools-Project.png",
        projectTitle : "severalTools Project",
        skills : "Html-Css3-Vanilla javscript",
        url : "https://nour-zendaki.github.io/Several-Tools-Project/"
    },
    {
        image : "/assets/img/Evaluation-Project.png",
        projectTitle : "Evaluation Project",
        skills : "Html-Css3-Vanilla javscript",
        url : "https://nour-zendaki.github.io/Evaluation-Project/"
    },
    {
        image : "/assets/img/ShoesShoppingProject.png",
        projectTitle : "Shoes Shopping Project",
        skills : "Html-Css3-Vanilla javscript-CRUD",
        url : "https://nour-zendaki.github.io/Shoes-Shopping-Project/"
    },
    {
        image : "/assets/img/DashBoard-Project.png",
        projectTitle : "DashBoard Project",
        skills : "Html-Css3-Vanilla javscript-CRUD-API",
        url : "https://nour-zendaki.github.io/DashBoard-Project/"
    },
    {
        image : "/assets/img/Travel-Project.png",
        projectTitle : "Travel Project",
        skills : "Html-Css3",
        url : "https://nour-zendaki.github.io/Travel-Project/"
    }
]
const navigate = useNavigate()
const handleClick = () => {
    navigate(`/Projects/${index}`);
}

  return (
    <div className='latestProject-container'>
        <div className="secHead">
            <div className="title">
                <p className='subTitle'>{subTitle}</p>
                <h1 className='mainTitle'>{title}<span className='span'>{span}</span></h1>
            </div>
            <a href="https://github.com/Nour-Zendaki" target='_blank' rel='noopener noreferrer'><Button className="githubBtn" btn="View Github" icon={<MdArrowOutward className='arrowBtn'/>} /></a>
        </div>
        <div className="card-container">
        {cardItems.map((item, index) => (
          <Card key={index} item={item} index={index}/>
        ))}
        </div>
    </div>
  )
}

export default LatestProject
