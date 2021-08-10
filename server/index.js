//setup express server 
const express = require('express'); 
const cors = require('cors'); 

//Use .env file for environment variables.
require('dotenv').config(); 

//initialize express into "app" variable
const app = express(); 

//recognize incoming request as JSON and setup CORS 
app.use(express.json()); 
app.use(cors()); 

//setup PORT
const PORT = process.env.PORT || 3001; 

//Database
const db = require("./models"); 

//Sync check against models if table doesnt exist then create them while verifying server is connected to PORT
db.sequelize.sync().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on PORT ${PORT}`)
    });
})

