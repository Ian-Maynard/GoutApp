/* jshint esversion: 6 */ 

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.render('index', {title:'MyGout App',message:'Really getting there now!'});
});  // Base route


module.exports = router;