import { useEffect, useState } from "react";

function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="container py-5">
      <h1>Portfolio CMS</h1>

      <hr />

      <h3>Projects</h3>

      {projects.map((project) => (
        <div key={project.id} className="border p-3 mb-3">
          <h4>{project.title}</h4>

          <p>{project.description}</p>

          <small>{project.technology}</small>

          <br />

          <a href={project.github}>
            Github
          </a>
        </div>
      ))}
    </div>
  );
}

export default Admin;