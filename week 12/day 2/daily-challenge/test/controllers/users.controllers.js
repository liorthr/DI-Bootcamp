const {users} = require('../data/myData.js')


const getAllUsers =  (req, res)=>{
    res.json(users)
}

const searchForUserId = (req,res)=>{
    const userId = parseInt(req.params.id)
    const user = users.find(user=>user.id === userId)
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
    }
    console.log(req.params)
}
const addNewUser =  (req,res)=>{
    const newUser = {
        id: users.length+1,
        nom: "Albert",
        age: 19,
        email: "lior@example.com",
        ville: "Netanaya",
        pays: "Israël"
    }
        users.push(newUser)
        console.log(users)
        res.send("Useer ajouté avec succés")
    }


    
module.exports = {
    getAllUsers,
    searchForUserId,
    addNewUser,

}