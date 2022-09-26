const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");
const api = require("./routes/index.js");
const { clog } = require("./middleware/clog");

const app = express();
const PORT = 3001;

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

app.get("/", (req, res) => res.send("/public/index.html"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.get("/api/notes", (req, res) => res.json(db));

app.post("/api/notes", (req, res) => res.json(db));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// module.exports =
