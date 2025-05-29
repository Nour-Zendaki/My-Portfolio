import { LiaDotCircle } from 'react-icons/lia'
import './DividerBetSec.css'

const DividerBetSec = () => {
  return (
    <div className='dividerContainer'>
      <div className="dashedLine"></div>
      <div className="dotBorder">
        <LiaDotCircle />
      </div>
    </div>
  )
}

export default DividerBetSec
