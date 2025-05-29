import { LuCircleArrowOutUpRight } from "react-icons/lu"
import Platform from "../components/Platform/Platform"
import DividerBetSec from "../components/DividerBetSec/DividerBetSec"
import Footer from "../components/Footer/Footer"
import BestProjects from "../components/BestProjects/BestProjects"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Projects = () => {
  const location = useLocation()
  const selectedId = location.state?.selectedId || 0

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Platform selectedId={selectedId} icon={<LuCircleArrowOutUpRight className='arrow-icon' />} />
      <DividerBetSec />
      <BestProjects subTitle="Portfolio" title="The Best " span="Projects" />
      <Footer rights="@ 2025. All Rights Reserved" develop="Develpoment by Nour" />
    </>
  )
}

export default Projects
