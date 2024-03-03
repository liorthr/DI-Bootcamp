const User = (props) => {
    console.log(props)

    return(
        <>
            <h2>User Name: {props.username}</h2>
            <h3>age : {props.num}</h3> 
            <h3>Married: {props.yesno}</h3>
        </>
    )
}

export default User;