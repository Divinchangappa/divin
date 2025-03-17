const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple GET route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the simple API!' });
});

// Example POST route
app.post('/api/data', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
