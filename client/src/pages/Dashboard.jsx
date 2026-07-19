import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">

      <h1>Portfolio Dashboard</h1>

      <Link to="/projects/new">
        Add Project
      </Link>

      <hr />

      <p>Your projects will appear here.</p>

    </div>
  );
}

export default Dashboard;