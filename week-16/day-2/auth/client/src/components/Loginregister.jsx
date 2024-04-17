import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import {Box, TextField, Button} from '@mui/material';
import { AuthContext } from "../App";
import { BASE_URL } from "../App";


const Loginregister = (props) => {
    const {page} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const {setToken} = useContext(AuthContext)

    const navigate = useNavigate()

    const loginregister = async()=>{
        if(page === 'Login'){
            try {
                const response = await axios.post(BASE_URL + '/users/login' , 
                //body
                {
                    email,
                    password,
                },
                //header
                {
                    withCredentials: true,
                });
                if(response.status === 200){
                    console.log(response.data)
                    setToken(response.data)
                    setMessage('')
                    navigate('/')
                }
            } catch (error) {
                console.log(error)
                setMessage(error.response.data?.msg)
            }

        }
        else{
            try {
                const response = await axios.post(BASE_URL + '/users/register' , 
                //body
                {
                    email,
                    password,
                },
                //header
                {
                    withCredentials: true,
                });
                if(response.status === 200){
                    setMessage('')
                    navigate('/login')
                }
            } catch (error) {
                console.log(error)
                setMessage(error.response.data?.msg)
            }
        }
    }

    return (
        <>
        <h2>{page}</h2>
        <Box component={'form'} sx={{m:1}} autoComplete="off">
            <TextField 
            type="email"
            sx={{m:1 ,color: "#fff59d"}}
            id='email'
            label="Enter your email"
            variant="outlined"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField 
            type="password"
            sx={{m:1, color: "#fff59d"}}
            id='password'
            label="Enter your password"
            variant="outlined"
            onChange={(e)=>setPassword(e.target.value)}
            />
        </Box>
            <Button variant="contained" onClick={loginregister}>{page}</Button>
            <div>{message}</div>
        </>
    )
};

export default Loginregister;