import { useState } from "react";
import api from "../services/api";

function AddProject(){

const [project,setProject]=useState({

title:"",

description:"",

technology:"",

github:""

});

function handleChange(e){

setProject({

...project,

[e.target.name]:e.target.value

});

}

async function saveProject(e){

e.preventDefault();

await api.post("/projects",project);

alert("Project Saved!");

}

return(

<form onSubmit={saveProject}>

<input

name="title"

placeholder="Title"

onChange={handleChange}

/>

<textarea

name="description"

placeholder="Description"

onChange={handleChange}

/>

<input

name="technology"

placeholder="Technology"

onChange={handleChange}

/>

<input

name="github"

placeholder="Github"

onChange={handleChange}

/>

<button>

Save

</button>

</form>

);

}

export default AddProject;