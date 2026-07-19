import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {

        try {

            const response = await api.get("/projects");

            setProjects(response.data.data);

        } catch (err) {

            console.error(err);

            setError("Unable to load projects.");

        } finally {

            setLoading(false);

        }

    }

    if (loading)
        return (
            <section id="projects" className="projects">
                <div className="container">
                    <h2>Loading Projects...</h2>
                </div>
            </section>
        );

    if (error)
        return (
            <section id="projects" className="projects">
                <div className="container">
                    <h2>{error}</h2>
                </div>
            </section>
        );

    return (

        <section id="projects" className="projects">

            <div className="container">

                <h2 className="section-title">
                    Featured Projects
                </h2>

                <div className="project-grid">

                    {projects.length === 0 ? (

                        <p>No projects found.</p>

                    ) : (

                        projects.map((project) => (

                            <div
                                className="project-card"
                                key={project.id}
                            >

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <p>
                                    <strong>Technology:</strong>
                                    <br />
                                    {project.technology}
                                </p>

                                <div className="project-actions">

                                    {project.github && (

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub
                                        </a>

                                    )}

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </section>

    );

}

export default Projects;