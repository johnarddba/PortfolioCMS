const db = require("../config/database");

class ProjectModel {

    static getAll(callback) {

        db.all(

            "SELECT * FROM projects ORDER BY id DESC",

            [],

            callback

        );

    }

    static getById(id, callback) {

        db.get(

            "SELECT * FROM projects WHERE id=?",

            [id],

            callback

        );

    }

    static create(project, callback) {

        const sql = `

        INSERT INTO projects

        (title,description,technology,github,image)

        VALUES(?,?,?,?,?)

        `;

        db.run(

            sql,

            [

                project.title,

                project.description,

                project.technology,

                project.github,

                project.image || null

            ],

            callback

        );

    }

    static update(id, project, callback) {

        const sql = `

        UPDATE projects

        SET

            title=?,

            description=?,

            technology=?,

            github=?,

            image=?

        WHERE id=?

        `;

        db.run(

            sql,

            [

                project.title,

                project.description,

                project.technology,

                project.github,

                project.image || null,

                id

            ],

            callback

        );

    }

    static delete(id, callback) {

        db.run(

            "DELETE FROM projects WHERE id=?",

            [id],

            callback

        );

    }

}

module.exports = ProjectModel;