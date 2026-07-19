function AddProject() {
  return (
    <div className="container">

      <h1>Add New Project</h1>

      <form>

        <input
          placeholder="Project Title"
        />

        <textarea
          placeholder="Description"
        />

        <input
          placeholder="Technology"
        />

        <input
          placeholder="GitHub URL"
        />

        <button>
          Save Project
        </button>

      </form>

    </div>
  );
}

export default AddProject;