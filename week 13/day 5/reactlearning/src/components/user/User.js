import UserTemplate from "./UserTemplate"
const User = () =>{
    const allUsers = [
        {id:1, name: "Jhon", email: "jhontest@gmail.com"},
        {id:2, name: "David", email: "david@gmail.com"},
        {id:3, name: "Marry", email: "marry@gmail.com"},
        {id:4, name: "AAA", email: "AAA@gmail.com"},
        {id:5, name: "BBB", email: "BBB@gmail.com"},
    ]
    return (
        <>
        
            {/* Map over allUsers and pass each user as props to UserTemplate */}
            {allUsers.map((user) => (
                <UserTemplate key={user.id} name={user.name} email={user.email} />
            ))}
       
        {/* <UserTemplate name={allUsers.name} email={allUsers.email}/> */}
        {/* <h1>Users in this plateform are:</h1>
        {
            allUsers.map((item)=>{
              return <>{item.name} is mail is {item.email}</> 
            })
        } */}

        </>
        )
}

export default User