import './Button.css'

const Button = ({btn, className, icon}) => {
  return (
    <>
        <button className={`btns ${className}`}>{btn}{icon && <span>{icon}</span>}</button>
    </>
  )
}

export default Button
