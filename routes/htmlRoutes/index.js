// Package(s) needed for this application
const path = require('path');
const router = require('express').Router();

// Creates individual routes for every static asset

// Creates 1st individual route for static asset
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Creates 2nd individual route for static asset
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;