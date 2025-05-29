import { useNavigate } from 'react-router-dom'
import './Card.css'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'

const Card = ({item, index}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/Projects", { state: { selectedId: index } });
    }
  return (
                <div className='card'>
                    <img src={item.image} alt="project-img" className='project-img' title='Show Details' onClick={handleClick}/>
                    <div className="desc-container">
                        <div className="description">
                            <h2 className="projectTitle">{item.projectTitle}</h2>
                            <p>{item.skills}</p>
                        </div>
                        <a href={item.url} target='_blank' rel='noopener noreferrer' title='Show Demo Project'><button className='projectBtn'><LuCircleArrowOutUpRight className='arrow-icon' /></button></a>
                    </div>
                </div>
  )
}

export default Card
