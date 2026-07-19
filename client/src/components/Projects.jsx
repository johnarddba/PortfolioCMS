import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {

const [projects,setProjects]=useState([]);

useEffect(()=>{

loadProjects();

},[]);

function loadProjects(){

api.get("/projects")

.then(res=>{

setProjects(res.data);

});

}

return(

<section id="projects">

<div className="container">

<h2>Projects</h2>

<div className="project-grid">

{

projects.map(project=>

<div
className="project-card"
key={project.id}
>

<h3>{project.title}</h3>

<p>{project.description}</p>

<p>{project.technology}</p>

</div>

)

}

</div>

</div>

</section>

);

}

export default Projects;