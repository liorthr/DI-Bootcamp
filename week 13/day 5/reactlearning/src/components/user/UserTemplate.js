import { user_style } from "./style"
const UserTemplate = (props) =>{
    console.log(props)
    return (
        <div style={user_style }>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default UserTemplate