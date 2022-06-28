import "./App.css";
import userService from "./Services/communicate";
import { useEffect, useState } from "react";
import User from "./components/user";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Info from "./components/Info";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll("https://jsonplaceholder.typicode.com/users")
      .then((res) => setAllUsers(res));
  }, []);

  return (
    <div
      className="container"
      style={{
        maxWidth: "900px",
        margin: "auto",
        height: "100vh",
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User allUsers={allUsers} />} />
          <Route path="/:id" element={<Info allUsers={allUsers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
