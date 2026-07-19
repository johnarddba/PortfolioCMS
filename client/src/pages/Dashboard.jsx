import { useEffect,useState } from "react";

import api from "../services/api";

function Dashboard(){

const [projects,setProjects]=useState([]);

useEffect(()=>{

load();

},[]);

function load(){

api.get("/projects")

.then(res=>{

setProjects(res.data);

});

}

async function remove(id){

await api.delete("/projects/"+id);

load();

}

return(

<div className="container">

<h1>

Dashboard

</h1>

<table>

<thead>

<tr>

<th>Title</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

projects.map(project=>

<tr key={project.id}>

<td>{project.title}</td>

<td>

<button>Edit</button>

<button

onClick={()=>remove(project.id)}

>

Delete

</button>

</td>

</tr>

)

}

</tbody>

</table>

</div>

);

}

export default Dashboard;