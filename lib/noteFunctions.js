// Package(s) needed for this application
const fs = require("fs");
const path = require("path");

// Function to create new notes.
function noteCreateNewNote(body, noteTakerArray) {
  const note = body;
  noteTakerArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteTakerArray,
      },
      null,
      2
    )
  );
  return note;
}

// Function to delete existing notes and rewrite the array with updated notes.
function noteDeleteNote(noteTakerArray, id) {
  let deleteID = parseInt(id);
  noteTakerArray.splice(deleteID, 1);
  for (let i = deleteID; i < noteTakerArray.length; i++) {
    noteTakerArray[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteTakerArray,
      },
      null,
      2
    )
  );
}

module.exports = {
  noteCreateNewNote,
  noteDeleteNote,
};