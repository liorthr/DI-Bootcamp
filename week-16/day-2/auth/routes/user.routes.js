import express from 'express';
import { _allusers, _login, _register, _logout } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()


const router = express.Router();

router.post('/register' , _register);
router.post('/login', _login)
router.get('/',verifyToken,  _allusers);
router.get('/logout', _logout)
router.get('/verify',verifyToken, (req,res) => {
    //res.sendStatus(200)
    const userId = req.userId;
        const userEmail = req.userEmail;
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

})

export default router





