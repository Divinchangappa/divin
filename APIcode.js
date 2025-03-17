const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple GET route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the simple API for Git pull testing!' });
});

// Example POST route
app.post('/api/data', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}! This is a Git pull test.` });
});

// Test route for Git pull
app.get('/api/test', (req, res) => {
    res.json({ message: 'This is a test endpoint for Git pull testing.' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port} for Git pull testing`);
});

