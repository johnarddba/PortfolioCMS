const projects = [
  {
    title: "SQL Server Monitoring Dashboard",
    description:
      "Real-time monitoring dashboard using SQL Server DMVs, Power BI, and Python.",
    tech: "SQL Server • Power BI • Python",
  },
  {
    title: "Portfolio CMS",
    description:
      "A full-stack portfolio website built with React, Express, and SQLite.",
    tech: "React • Express • SQLite",
  },
  {
    title: "AWS SQL Automation",
    description:
      "Automated SQL Server deployment using Terraform and PowerShell.",
    tech: "AWS • Terraform • PowerShell",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span>{project.tech}</span>

              <button>View Project</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;