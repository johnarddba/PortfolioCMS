function About() {
    return (
        <section id="about" className="about">

            <div className="container">

                <h2 className="section-title">
                    About Me
                </h2>

                <div className="about-grid">

                    <div className="about-left">

                        <h3>
                            Senior Database Administrator
                        </h3>

                        <p>
                            I'm Johnard Hidalgo, a Senior Database Administrator
                            with 12+ years of experience managing mission-critical
                            SQL Server environments, cloud databases, automation,
                            disaster recovery, and performance tuning.
                        </p>

                        <p>
                            I specialize in Microsoft SQL Server, AWS,
                            Azure SQL, PostgreSQL, Terraform,
                            PowerShell, and Python automation.
                        </p>

                    </div>

                    <div className="about-right">

                        <div className="card">

                            <h2>12+</h2>
                            <p>Years Experience</p>

                        </div>

                        <div className="card">

                            <h2>2000+</h2>
                            <p>Databases Managed</p>

                        </div>

                        <div className="card">

                            <h2>99.9%</h2>
                            <p>Database Uptime</p>

                        </div>

                        <div className="card">

                            <h2>AWS</h2>
                            <p>Cloud Practitioner</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;