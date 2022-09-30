// const notes = require("express").Router();
// const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

// notes.get("/api/notes", (req, res) => {
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
// });

// notes.post("/api/notes", (req, res) => {
//   console.log(req.body);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//     };

//     readAndAppend(newNote, "./db/db.json");
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error("Error in adding note");
//   }
// });

// module.exports = notes;
