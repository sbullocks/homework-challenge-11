const router = require('express').Router();

const { notes } = require('../../db/db');

// This will allow user to create or delete notes.
const {
  noteCreateNewNote,
  noteDeleteNote,
} = require('../../lib/noteFunctions');

// GET method route.
router.get('/notes', (req, res) => {
  let saved = notes;
  res.json(saved);
});

// POST method route.
router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  let note = noteCreateNewNote(req.body, notes);
  res.json(note);
});

// DELETE method route.
router.delete('/notes/:id', (req, res) => {
  noteDeleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;

