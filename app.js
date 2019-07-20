/* jshint esversion: 6 */ 
const express = require('express');
const  app = express();

app.get('/', (req, res) => { 
    res.send('Sending this to localhost');
});

app.listen(3000, () => console.log('Listening on port 3000'));
