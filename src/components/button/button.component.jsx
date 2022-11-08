import './button.component.css'
const Button = ({characteristics}) => {
    const {title, color} = characteristics
    return(
        <div>
            <button className="button">{title}</button>
        </div>
    )
}

export default Button