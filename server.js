// Setup app to listen for port 3001.
// Package(s) needed for this application
// Dynamic web port. If there is a dynamic port available, ||or otherwise use port 3001.
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Get for Homepage and Notes page.
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Invokes app.use() and serves static files from the '/public' folder
app.use(express.static('public'));

// Imports middleware for the routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// This app starts a server and listens on port 3001 for connections. Same as server.listen().
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});