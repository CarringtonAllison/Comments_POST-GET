//setup express server 
const express = require('express'); 
const cors = require('cors'); 

//Use .env file for environment variables.
require('dotenv').config(); 

//initialize express into "app" variable
const app = express(); 

app.use(cors()); 

//setup PORT
const PORT = process.env.PORT || 3001; 

//verify server is connected to PORT
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
});

