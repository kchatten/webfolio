const registerUser = async(req, res)=> {
    const {username, email, password} = req.body;

    // Validate user information
    if (!username || !email || !password){
        return res.status(400).json(( error: `Missing required fields`));
    }

    try{
        // Perform registration logic (e.g., create user record in the database)
        const connection = await pool.getConnection();
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const result = await connection.query(query, [username, email, password]);
        connection.release();

        // Check if the query was successful
        if (result.affectedRows === 1) {
            // Send success response
            res.status(201).json({ message: 'User registered successfully' });
        } else {
            // If no rows were affected (query failed)
            res.status(500).json({ error: 'Failed to register user' });
        }
    }
    catch (error) {res.status(500).json(( error: `Internal server error `))};
}

module.exports = {
    registerUser,
}