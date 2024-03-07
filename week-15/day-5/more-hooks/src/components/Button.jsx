const Button = (props) => {
    return(
        <>
        <h2>Button</h2>
        <button onClick={()=> props.setCountAction(props.countAction + 1)}>+</button>
        </>
    )
}
export default Button;