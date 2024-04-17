import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';


const app = express();
const PORT = process.env.PORT || 3001

app.use(cors({credentials: true, origin: 'http://localhost:5173' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use('/users',userRouter)

app.listen(PORT, ()=>{
    console.log(`run on port ${PORT}`)
})
