const express = require('express');
const router = express.Router(); 
const { Comments } = require("../models"); 

//POST a new comment to the DB 
router.post("/", async (req, res) => {
    const comment = req.body; 
    await Comments.create(comment); 
    res.json(comment); 
}); 

//GET all the post in the DB 
router.get("/", async (req, res) => {
    const commentList = await Comments.findAll(); 
    res.json(commentList); 
}); 

module.exports = router; 