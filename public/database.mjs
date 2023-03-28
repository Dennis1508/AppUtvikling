const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "root",
    port: "1508",
});

async function createUser(email, password) {
    try {
        const res = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [email, password]
        );
        return res.rows[0];
    } catch (err) {
        console.error('Error creating user', err);
        throw err;
    }
}

async function getUserByEmailAndPassword(email, password) {
    try {
        const res = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );
        return res.rows[0];
    } catch(err){
        console.error('Error getting user', err);
        throw err;
    }
}

module.exports = {
    createUser,
    getUserByEmailAndPassword
};














