const db = require("./database");

db.serialize(() => {

db.run(`

CREATE TABLE IF NOT EXISTS projects(

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT,

description TEXT,

technology TEXT,

github TEXT,

image TEXT

)

`);

console.log("Projects table created.");

});