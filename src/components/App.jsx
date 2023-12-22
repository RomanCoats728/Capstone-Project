import "../style/index.css";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Login/Register";
import Login from "./Login/Login";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div id="Main">
      <div id="navbar">
        <Link to="/">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
      <div id="Main-section">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
