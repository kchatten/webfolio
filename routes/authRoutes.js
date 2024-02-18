const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');

// Create a MariaDB connection pool
const pool = mariadb.createPool({
    host: 'localhost',
    port: '3306',
    user: 'Owner',
    password: 'aMf5@r705',
    database: 'gameproj'
});

// Route for user registration
router.post('/register', async (req, res) => {
    try {
        // Extract user registration data from request body
        const { username, email, password } = req.body;

        // Validate user registration data (e.g., check for required fields, validate email format, etc.)
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if the email address is already registered
        const conn = await pool.getConnection();
        const existingUser = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
        conn.release();

        if (existingUser.length > 0) {
            res.redirect('/');
            // If the email address is already registered, return an error
            return res.status(400).json({ error: 'Email address already registered' });
           
        }

        // Insert user data into the database
        const insertUser = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);

        // Redirect user back to the homepage
        res.redirect('/');

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        // Extract login credentials from request body
        const { email, password } = req.body;

        // Validate login credentials
        if (!email || !password) {
            return res.status(400).json({ error: 'Missing email or password' });
        }

        // Check if the user exists in the database
        const conn = await pool.getConnection();
        const user = await conn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        conn.release();

        if (user.length === 0) {
            // If no user found, return authentication error
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // User authenticated successfully, redirect to the homepage or any other page
        res.redirect('/');

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;