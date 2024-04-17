import { useState, useEffect } from "react";
import {BASE_URL} from '../App'

import axios from 'axios'

const Home = (props) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async() => {
        console.log('users=>', users)
        try {
            const response = await axios.get(BASE_URL + '/users',{
                withCredentials: true,
            })
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <h2>Home</h2>
        {
            users.map(item=>{
                return(
                    <div key={item.id}>
                       Email: {item.email}
                       ID: {item.id}
                    </div>
                )
            })
        }
        </>
    )
};

export default Home;
