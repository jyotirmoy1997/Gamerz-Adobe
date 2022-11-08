const Button = ({characteristics}) => {
    const {title, color} = characteristics
    return(
        <div>
            <button>{title}</button>
        </div>
    )
}

export default Button