import React from "react";

class AppClass extends React.Component {
    constructor(){
        super();
        this.state = {
            username : 'Jhon',
            age: 21,
            married: false,
        }
        console.log('')
    }

    handleChenge = (e) => {
        this.setState({username: e.target.value})
    }

    render(){
        return(
            <>
            <h1>Class componeent</h1>
            <h3>Username: {this.state.username}</h3>
            <h3>Married: {this.state.married}</h3>
            <h3>Age: {this.state.age}</h3>
            <input type="text" onChange={this.handleChenge} />
            </>
        )
    }
}

export default AppClass;