const express = require('express');
const router = express.Router();
const {users} = require('../data/myData')
const {getAllUsers,searchForUserId,addNewUser} = require('../controllers/users.controllers')


router.get('/users',getAllUsers)

router.get('/users/:id',searchForUserId )
      
router.post('/users',addNewUser)

module.exports = router;

