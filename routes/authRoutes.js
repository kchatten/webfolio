const express = require("express");
const router = express.Router();


// POST route for user registration.    
router.post('/register', (req, res)=> {
// Get user data from request body.
const {username, email, password} = req.body;

// Validate user information.

if(!username || !email || !password) {
    return res.status(400).json({error: "Missing required fields" });
}


// TODO: Registration logic

// Respond with success message
res.status(201).json({message: `User registered succesfully`})

});

module.exports = router;