const express = require('express');
const bp = require('body-parser');
const app = express();
const { db } = require('./config/pg.connect.js');
const PORT = 3002;

app.use(bp.json());

//LIST ALL POST

db.query("SELECT * FROM posts", (err,rows, fileds)=>{
    if(err) throw err;
    console.log(`Les données sont ${rows}`)
})

// app.get('/', (req, res) => {
//     return db('posts')
//         .select('*')
//         .then(posts => res.json(posts))
//         .catch(error => {
//             console.error(error);
//             res.status(500).json({ message: 'Post not found' });
//         });
// });

// ONE POST

// app.get(`/:id`, (req,res)=>{
// const postID = req.params.id;

//     return db('posts')
//         .select('*')
//         .where('id','=',postID)
//         .then(posts=>res.json(posts))
//         .catch(error =>{
//             console.log(error);
//             res.status(500).json({message:'Post not found'})
//         })
// })

//ADD A NEW POST
// app.get('/', (req,res)=>{
// const {title, content} = req.body;

//     return db('posts')
//         .insert({title, content})
//         .returning('*')
//         .then(posts=>res.json(posts))
//         .catch(error =>{
//             console.log(error);
//             res.status(500).json({message:'Post not found'})
//         })
// })

//UPDATE A POST

//SQL
// UPDATE name_table
// SET name_of_column = 'New text'
// WHERE _post_id = _id_want_to_change

// app.put(`/:id`, (req,res)=>{
//     const postID = req.params.id;
//     const {new_itle} = 'new title';

//     return db('posts')
//     .update({title: newTitle})
//     .where('id' , '=', postID)
//     .returning('*')
//     .then(updatedPosts => {
//         if (updatedPosts.length > 0) {
//             res.json(updatedPosts[0]);
//         } else {
//             res.status(404).json({ message: 'Post not found' });
//         }
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to update post' });
//     });
// })


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
