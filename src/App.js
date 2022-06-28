import "./App.css";
import userService from "./Services/communicate";
import { useEffect, useState } from "react";
import User from "./components/user";
import Card from "./components/card";
import Avatar from "./components/avatar";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then((res) => setAllUsers(res));
  }, []);

  return (
    <div className="container" style={{ maxWidth: "900px", margin: "auto" }}>
      <User allUsers={allUsers} />
    </div>
  );
}

export default App;
