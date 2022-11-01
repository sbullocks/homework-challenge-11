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
  // Reading db.json file to gather info.
  let readFromFile = fs.readFileSync(
    path.resolve(__dirname, "../../db/db.json"),
  )
  // Parsing the gathered data.
let readDb = await JSON.parse(readFromFile);
// Returning the parsed data.
return readDb;
};

router.get('/notes', async (req, res) => {
  // console.log(req, res);
  let saved = await reader();
  // console.log(saved);
  return res.json(saved);
  // reader('../../db/db.json').then((data) => res.json(JSON.parse(data))); //working on saving the notes.
});

// POST method route.
async function poster(newNote) {
  let writetoFile = await fs.writeFileSync(
    path.resolve(__dirname, "../../db/db.json"), newNote,
  )
  return newNote;
  // let postDb = await JSON.parse(writeToFile);
  // return postDb;
}

router.post('/notes', async (req, res) => {
  console.log(req.body);
  console.log('sjaskjfs');
  let saved = await reader();
  saved.push(req.body);
  // req.body.id = notes.length.toString();
  // let note = await noteCreateNewNote(req.body, notes);
  // const newNote = (req.body);
  const newNote = await poster(JSON.stringify(saved)); //successfully wiring to the database.      .then is not being excuted.  
  console.log(newNote);
  return newNote;
  // return newNote; 
});

console.log(router);

// DELETE method route.
router.delete('/notes/:id', (req, res) => {
  noteDeleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;