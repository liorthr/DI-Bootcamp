import { register, login, allusers } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const _register = async (req,res) => {
    const {email, password} = req.body;
    const loweremail = email.toLowerCase();

    //encrypt the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + "", salt);

    try{
        const user = await register(loweremail,hash)
        res.json(user)
    }catch(error){
        console.log(error)
        res.status(404).json({message: "email is already use"})
    }
};

export const _login = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await login(email.toLowerCase());

        //check if user exist in user table
        if(user.length === 0) 
            return res.status(404).json({msg: 'email not found😡'});

        //check password
        const match = bcrypt.compareSync(password+"", user[0].password)
        if(!match) 
            return res.status(404).json({msg: 'Wrong password!😡'});

        //token
        const userId = user[0].id;
        const userEmail = user[0].email
        const secret = process.env.ACCESS_TOKEN_SECERT;

        const accessToken = jwt.sign(
            {userId, userEmail},
            secret,
            {expiresIn: '60s'}
            )

        res.cookie(
            'token',
            accessToken,
            {
                maxAge: 60*1000,
                httpOnly: true
            });

        res.json({token: accessToken});

    }catch(error){
        console.log(error)
        res.status(404).json({message: "the password or email is incorrect"})
    }
}

export const _allusers = async (req,res) => {
    try{
        console.log(req)
        const users = await allusers()
        res.json(users)
    }catch(error){
        console.log(error)
        res.status(404).json({message: "not found!"})
    }
}

export const _logout = (req,res) => {
    //Delete cookie from table
    res.clearCookie('token');
    req.userId = null;
    register.userEmail = null;
    res.send.status(200);
}