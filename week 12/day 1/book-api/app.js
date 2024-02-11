const express = require('express');
const app = express();

const books = [
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publishedYear": 1960
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "publishedYear": 1949
  },
  {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publishedYear": 1813
  }
];

// const PORT = 5000; 
//Port 5000 not working 

// app.listen(3001, () => {
//   console.log(`Server is running `);
// });

app.listen(3001)

// app.get('/books', (req, res) => {
//         res.json(books); 
//     });

    app.get('/books/:id', (req,res)=>{
        const { id } = req.params
        const book = books.find((books)=>books.id==id)
        // res.status(200).json({msg:"all its good "})
        if(!book){
            res.status(404).json({msg:"book not found"})
        }
        res.json(book)
    })