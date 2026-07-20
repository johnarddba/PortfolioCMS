import { useEffect, useState } from "react";

function Admin() {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error(data);
        }
      });
  };

useEffect(() => {
    fetch("http://localhost:5000/api/projects")
        .then((res) => res.json())
        .then((data) => {
            console.log("API Response:", data);
            setProjects(data);
        })
        .catch((err) => console.error(err));
}, []);

  return (
    <div className="container py-5">
      <h1>Portfolio CMS Admin</h1>

      <hr />

      {projects.map((project) => (
        <div
          key={project.id}
          className="card p-3 mb-3 shadow-sm"
        >
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <strong>{project.technology}</strong>

          <br />

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      ))}
    </div>
  );
}

export default Admin;