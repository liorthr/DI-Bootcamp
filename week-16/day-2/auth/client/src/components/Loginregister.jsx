import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import {Box, TextField, Button} from '@mui/material';
import { AuthContext } from "../App";


const Loginregister = (props) => {
    const {page} = props
    return (
        <>
        <h2>{page}</h2>
        <Box component={'form'} sx={{m:1}} autoComplete="off">
            <TextField 
            type="email"
            sx={{m:1}}
            id='email'
            label="Enter your email"
            variant="outlined"
            />
            <TextField 
            type="password"
            sx={{m:1}}
            id='password'
            label="Enter your password"
            variant="outlined"
            />
        </Box>
            <Button variant="contained">{page}</Button>
            <div>message</div>
        </>
    )
};

export default Loginregister;