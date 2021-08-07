//setup express server 
// import express from 'express'; 
// import cors from 'cors'; 

const express = require('express'); 
const cors = require('cors'); 

//initialize express into "app" variable
const app = express(); 

app.use(cors()); 

//setup PORT
const PORT = process.env.PORT || 3001; 

//verify server is connected to PORT
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
});

