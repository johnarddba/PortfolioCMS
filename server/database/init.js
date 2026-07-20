const db = require("../config/database");

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

db.run(`
INSERT INTO projects
(title,description,technology,github,image)

VALUES
(
'Portfolio CMS',
'Full Stack Portfolio',
'React, Node, SQLite',
'https://github.com/johnarddba/PortfolioCMS',
''
)
`);

});