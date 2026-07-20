const Project = require("../models/projectModel");

// GET ALL
exports.getProjects = (req, res) => {

    Project.getAll((err, rows) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        res.json(rows);

    });

};

// GET ONE
exports.getProject = (req, res) => {

    Project.getById(req.params.id, (err, row) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        res.json(row);

    });

};

// CREATE
exports.createProject = (req, res) => {

    Project.create(req.body, function(err){

        if(err){

            return res.status(500).json({
                success:false,
                message:err.message
            });

        }

        res.status(201).json({

            success:true,

            id:this.lastID,

            message:"Project created"

        });

    });

};

// UPDATE
exports.updateProject = (req,res)=>{

    Project.update(

        req.params.id,

        req.body,

        function(err){

            if(err){

                return res.status(500).json({

                    success:false,

                    message:err.message

                });

            }

            res.json({

                success:true,

                message:"Project updated"

            });

        }

    );

};

// DELETE
exports.deleteProject=(req,res)=>{

    Project.delete(

        req.params.id,

        function(err){

            if(err){

                return res.status(500).json({

                    success:false,

                    message:err.message

                });

            }

            res.json({

                success:true,

                message:"Project deleted"

            });

        }

    );

};