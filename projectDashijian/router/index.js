const express = require('express') 

const router = express.Router() 

// user模块 
router.use('/user', require('./user')) 

// my模块 
router.use('/my', require('./my'))


module.exports = router
