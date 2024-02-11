const express = require("express")
const app = express()

const { fetchPosts } = require("./data/dataService.js")

// app.listen(3001) // Port 5000 not working for me

app.listen(3001, () => {
  console.log(`Server is running `);
});

app.get('/posts', async (req, res) => {
    try {
      const posts = await fetchPosts(); 
      res.json(posts); 
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts' });
    }
  });