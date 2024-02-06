
const path = require('path'); // Import the path module

const express = require('express');
const mysql = require('mysql2'); // Change this line
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 5500;

const db = mysql.createConnection({
    host: '108.61.62.139',
    user: 'ali',
    password: 'Syrou2206',
    database: 'newsletter'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

app.use(express.static(path.join(__dirname, 'webpage')));
app.use(express.json());
app.use(cors());
app.use(express.static('css'));

app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    console.log('Received subscription request:', email); // Added console log
    const sql = 'INSERT INTO subscribers (email) VALUES (?)';
    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error('Error occurred while inserting subscriber:', err); // Added console log
            res.status(500).json({ error: 'An error occurred while subscribing.' });
            throw err;
        }
        console.log('New subscriber added:', email);
        res.json({ message: 'Subscription successful' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
