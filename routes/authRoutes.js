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

module.exports = router;