const db = require("../database/database");

exports.getProjects = (req, res) => {
    db.all("SELECT * FROM projects ORDER BY id DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(rows);
    });
};

exports.getProject = (req, res) => {
    db.get(
        "SELECT * FROM projects WHERE id=?",
        [req.params.id],
        (err, row) => {
            if (err) return res.status(500).json(err);

            res.json(row);
        }
    );
};

exports.createProject = (req, res) => {
    const { title, description, technology, github } = req.body;

    db.run(
        `
        INSERT INTO projects(title,description,technology,github)
        VALUES(?,?,?,?)
        `,
        [title, description, technology, github],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Project created",
                id: this.lastID,
            });
        }
    );
};

exports.updateProject = (req, res) => {
    const { title, description, technology, github } = req.body;

    db.run(
        `
        UPDATE projects
        SET title=?,description=?,technology=?,github=?
        WHERE id=?
        `,
        [title, description, technology, github, req.params.id],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Project updated",
            });
        }
    );
};

exports.deleteProject = (req, res) => {
    db.run(
        "DELETE FROM projects WHERE id=?",
        [req.params.id],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Project deleted",
            });
        }
    );
};