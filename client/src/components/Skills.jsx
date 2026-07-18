function Skills() {

const skills=[
"SQL Server",
"Azure SQL",
"AWS",
"PostgreSQL",
"MySQL",
"Python",
"Terraform",
"PowerShell",
"Git",
"React"
];

return(

<section id="skills" className="skills">

<div className="container">

<h2 className="section-title">
Technical Skills
</h2>

<div className="skills-grid">

{skills.map((skill,index)=>

<div className="skill-card" key={index}>

{skill}

</div>

)}

</div>

</div>

</section>

)

}

export default Skills;