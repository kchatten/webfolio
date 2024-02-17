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

        // Insert user data into the database
        const conn = await pool.getConnection();
        const result = await conn.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        conn.release();

        // Respond with success message
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;