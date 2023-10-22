const express = require('express');
const router = express.Router();
const path = require('path');

// Serve static files
router.use('/static', express.static(path.join(__dirname, 'public')));

// Serve the HTML file
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the CSS file
router.get('/styles.css', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'styles.css'));
});

// Serve the JavaScript file
router.get('/scripts.js', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'scripts.js'));
});

// Create a route to send the message as JSON
router.get('/message', function (req, res, next) {
    res.json({ message: 'Hello, this message is alive!' });
});

module.exports = router;
