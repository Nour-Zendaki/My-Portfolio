import { MdOutlineZoomOutMap } from 'react-icons/md'
import Button from '../Button/Button'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Platform.Css'

const Platform = ({icon}) => {
    const projectItems = [
        {
          image : "/assets/img/EduPress-Project.png",
          title : "EduPress Platform",
          date : "27-10-2024",
          desc: "This website was developed as an online platform to present training courses in a well-organized and visually appealing manner, using HTML and CSS to ensure a responsive and user-friendly design. It offers a smooth user experience, allowing visitors to browse courses, view detailed information, and register effortlessly. The design is fully flexible and responsive, providing an optimal browsing experience across all device types.",
          href : "https://nour-zendaki.github.io/Mid-Project/",
          repo : "https://github.com/Nour-Zendaki/Mid-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/Flora-Project.png",
          title : "FloraHouses",
          date : "13-11-2024",
          desc: "This website was developed as a modern digital platform dedicated to showcasing and selling real estate properties in a clear and organized way. It allows users to explore a wide selection of luxury apartments and homes, with advanced search options based on location, price, and property type. The design features a clean and user-friendly interface, visually highlighting trending properties and the best real estate deals. The site also includes a simple step-by-step guide to help users understand the booking process easily. Built using HTML and CSS, the website ensures a fully responsive experience across all devices, whether on smartphones, tablets, or desktops.",
          href : "https://nour-zendaki.github.io/Flora-Project/",
          repo : "https://github.com/Nour-Zendaki/Flora-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/K2Skiing-Project.png",
          title : "K2Skiing",
          date : "26-9-2024",
          desc: "This is a single-page website dedicated to skiing and ski trips. It features a clean layout that showcases popular ski destinations, trip details, and highlights of winter adventures. The design focuses on clarity and ease of navigation, making it ideal for presenting seasonal travel offers.",
          href : "https://nour-zendaki.github.io/K2Skiing-Project/",
          repo : "https://github.com/Nour-Zendaki/K2Skiing-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/severalTools-Project.png",
          title : "severalTools Project",
          date : "20-11-2024",
          desc: "This website features an interactive user interface built with HTML, CSS, and JavaScript. It includes multiple dynamic functions such as dark/light mode toggle, text color and size customization, text positioning, a dropdown menu, and product display. These features enhance the browsing experience by allowing users to personalize the page and explore content more effectively.",
          href : "https://nour-zendaki.github.io/Several-Tools-Project/",
          repo : "https://github.com/Nour-Zendaki/Several-Tools-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css , Vanilla JavaScript"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/Evaluation-Project.png",
          title : "Evaluation Project",
          date : "25-2-2025",
          desc: "This website features an interactive user interface built with HTML, CSS, and JavaScript. It includes multiple dynamic functions such as dark/light mode toggle, text color and size customization, text positioning, a dropdown menu, and product display. These features enhance the browsing experience by allowing users to personalize the page and explore content more effectively.",
          href : "https://nour-zendaki.github.io/Evaluation-Project/",
          repo : "https://github.com/Nour-Zendaki/Evaluation-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css , Vanilla JavaScript"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/ShoesShoppingProject.png",
          title : "ShoesShopping Project",
          date : "22-12-2024",
          desc: "This is an online shoe store website designed with interactive features using JavaScript. Users can browse a variety of shoes, add items to the shopping cart, remove them, and search for specific products. The interface is clean and user-friendly, making the shopping experience smooth and efficient.",
          href : "https://nour-zendaki.github.io/Shoes-Shopping-Project/",
          repo : "https://github.com/Nour-Zendaki/Shoes-Shopping-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css , Vanilla JavaScript , CRUD"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/DashBoard-Project.png",
          title : "DashBoard Project",
          date : "18-3-2025",
          desc: "This is a dashboard web application designed with interactive features using JavaScript and API integration. Users can browse, create, update, and delete data records through a simple interface. The layout is clean and easy to use, enabling efficient management of information and smooth user experience.",
          href : "https://nour-zendaki.github.io/DashBoard-Project/",
          repo : "https://github.com/Nour-Zendaki/DashBoard-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css , Vanilla JavaScript , API(CRUD)"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        },
        {
          image : "/assets/img/Travel-Project.png",
          title : "Travel Project",
          date : "18-3-2025",
          desc: "This is a multi-page authentication website that includes four main pages: Login, Sign Up, Password Reset, and Verification Code Entry. Users can create new accounts, log in to their existing ones, reset forgotten passwords, and enter verification codes sent to their email or phone. The interface is clear and user-friendly, providing a smooth and secure experience throughout the authentication process.",
          href : "https://nour-zendaki.github.io/Travel-Project/",
          repo : "https://github.com/Nour-Zendaki/Travel-Project",
          specification : [
        {
            name : "Basic Languages : " ,
            content : "Html5 , Css"
        },
        {
            name : "Framework : " ,
            content : "Nothing Yet" 
        },
        {
            name : "Libraries : " ,
            content : "Nothing Yet"
        }
    ]
        }
    ]

    const [showImage , setShowImage] = useState(false)
    const [selectedImage , setSelectedImage] = useState("")
    const location = useLocation()
    const selectedId = location.state?.selectedId || 0
    const project = projectItems[selectedId]


  return (
    <>
        <div className="platformContainer">
            <div className="img-card">
                <img src={project.image} alt="" className='eduImg'/>
                <div className="overlay">
                    <MdOutlineZoomOutMap className='icon' onClick={() => setShowImage(true)}/>
                    <a href={project.href} target='_blank' rel='noopener noreferrer'><LuCircleArrowOutUpRight className='icon demo' /></a>
                </div>
            </div>
            <div className="description">
                <a href={project.href} target='_blank' rel='noopener noreferrer'><button className='projectDemo'>{icon}</button></a>
                <h2 className='projectTitle'>{project.title}</h2>
                <span className='date'>{project.date}</span>
                <p className='desc'>{project.desc}</p>
                {project?.specification?.map((specific, index) => (
                    <p className='specific' key={index}>{specific.name}<span className='content'>{specific.content}</span></p>
                ))}
                <a href={project.repo} target='_blank' rel='noopener noreferrer'><Button className="repo-btn" btn="Github Repo" /></a>
            </div>
        </div>
        {showImage && (
            <div className="showImage" onClick={() =>{setSelectedImage(project.image); setShowImage(false);}}>
                <img src={selectedImage} alt="full veiw" className='showEduImg'/>
            </div>
        )}
    </>
  )
}

export default Platform
