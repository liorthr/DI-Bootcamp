import jwt from "jsonwebtoken";

//sign({payload},     secret-code,       {expire-time})

// const token = jwt.sign(
//     {
//         email: 'zivuch@gmail.com',
//         userid: 16,
//     },
//     '1234@334!55$',
//     {
//         expiresIn:'30s'
//     },
// );

// console.log(token)

const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppdnVjaEBnbWFpbC5jb20iLCJ1c2VyaWQiOjE2LCJpYXQiOjE3MTAxNzU1NjYsImV4cCI6MTcxMDE3NTU5Nn0._HxBLI6gCAJZKtvRZbpodvWlK57vVzaeoucHfc-JGCQ";

/**
 * verify(
 * 1.token,
 * 2.secret,
 * 3.(err,decode)=>{} )
 */

jwt.verify(myToken, "1234@334!55$", (err,decode)=>{
    if(err) return console.log(err.message)
    console.log(decode)
})