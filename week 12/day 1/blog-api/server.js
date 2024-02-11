const express = require('express')
const app = express();
app.listen(3000)
// const http = require('http')


const blogPosts = [
  {
    "id": 1,
    "title": "Introduction to JavaScript",
    "content": "JavaScript is a programming language that is commonly used for creating interactive effects within web browsers."
  },
  {
    "id": 2,
    "title": "Python Tips and Tricks",
    "content": "Python is a versatile programming language known for its simplicity and readability. Here are some useful tips and tricks to enhance your Python programming skills."
  },
  {
    "id": 3,
    "title": "Machine Learning Basics",
    "content": "Machine learning is a subset of artificial intelligence that focuses on the development of algorithms that enable computers to learn from and make predictions based on data."
  },
  {
    "id": 4,
    "title": "Introduction to React",
    "content": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
  },
  {
    "id": 5,
    "title": "Data Structures in C++",
    "content": "Data structures are a way of organizing and storing data so that it can be accessed and modified efficiently. C++ provides a wide range of data structures such as arrays, linked lists, stacks, queues, trees, and graphs."
  }
];


// app.get('/blog-posts', (req, res) => {
//     res.json(blogPosts); 
// });
 

app.get('/blog-posts/:id', (req,res)=>{
    // console.log(req.query)
    const { id }=req.params
    const blogPost = blogPosts.find((post)=>post.id==id)
    if(!blogPost){
        res.status(404).json({msg:"product not found"})
    }
    res.json(blogPost)
})

//PORT 3001 Work 
//PORT 3000 Work also