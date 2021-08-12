const express = require('express');
const router = express.Router(); 
const { Comments } = require("../models"); 

//POST a new comment to the DB 
router.post("/", async (req, res) => {
    const comment = req.body; 
    await Comments.create(comment); 
    res.json(comment); 
}); 

