// Package(s) needed for this application
const router = require('express').Router();

const { notes } = require('../../db/db.json');

const fs = require('fs');
const path =require('path');

// This will allow user to create or delete notes.
const {
  noteCreateNewNote,
  noteDeleteNote,
} = require('../../lib/noteFunctions');

// GET method route.
async function reader() {
  let readFromFile = fs.readFileSync(
    path.resolve(__dirname, "../../db/db.json"),
  )
// let readFromFile = fs.readFileSync (
//   './db/db.json',
//   'utf8',
//   (err,data) => {err ? console.error("Error @ fs readfile @ this is a error message " + err) : data;
// });
let readDb = await JSON.parse(readFromFile);
return readDb;
};

router.get('/notes', async (req, res) => {
  console.log(req, res);
  let saved = await reader();
  console.log(saved);
  res.json(saved);
});

// POST method route.
router.post('/notes', (req, res) => {
  console.log(req);
  console.log('sjaskjfs');
  req.body.id = notes.length.toString();
  let note = noteCreateNewNote(req.body, notes);
  res.json(note);
});

console.log(router);

// DELETE method route.
router.delete('/notes/:id', (req, res) => {
  noteDeleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;