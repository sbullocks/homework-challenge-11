const router = require('express').Router();

// Imports modular routers for noteRoutes.
const notesRoutes = require('./noteRoutes')

router.use(notesRoutes);

module.exports = router;

