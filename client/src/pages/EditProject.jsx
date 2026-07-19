import { useParams } from "react-router-dom";

function EditProject() {
  const { id } = useParams();

  return (
    <div className="container">

      <h1>Edit Project</h1>

      <h3>Project ID: {id}</h3>

    </div>
  );
}

export default EditProject;