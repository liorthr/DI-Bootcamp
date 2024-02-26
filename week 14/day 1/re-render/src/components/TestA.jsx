import React from "react";

class TestA extends React.Component {
    constructor(){
        super()
    }
    getUsers = () =>{
        

        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res=>res.json)
        // .then((data)=>{
        //     console.log(data)})
        // .catch((err)=>{
        //     console.log(err)})
    }
    render(){
        return(
            <>
            <h2>I am a class component</h2>
            <button onClick={this.getUsers}>get users data</button>
            </>
        )
    }
}

export default TestA