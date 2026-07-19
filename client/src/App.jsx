import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects/new" element={<AddProject />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;