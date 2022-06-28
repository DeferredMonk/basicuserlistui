import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import communicate from "../Services/communicate";

const Info = ({ allUsers }) => {
  let { id } = useParams();

  const [chosen, setChosen] = useState();

  useEffect(() => {
    communicate
      .getById(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setChosen(res));
  }, []);

  if (!chosen) return "loading";

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        marginLeft: "-200px",
        marginTop: "-200px",
        top: "50%",
        position: "fixed",
        left: "50%",
        borderRadius: "5px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>User information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full name:</td>
            <td>{chosen.name}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{chosen.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{chosen.email}</td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>{chosen.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{chosen.website}</td>
          </tr>
          <tr>
            <td>Employee:</td>
            <td>{chosen.company.name}</td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>{chosen.address.street}</td>
          </tr>
          <tr>
            <td>Suite:</td>
            <td>{chosen.address.suite}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{chosen.address.city}</td>
          </tr>
          <tr>
            <td>Zipcode:</td>
            <td>{chosen.address.zipcode}</td>
          </tr>
        </tbody>
      </table>
      <Link
        to="/"
        style={{
          borderRadius: "5px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          padding: "7px",
          width: "15%",
          textAlign: "center",
          textDecoration: "none",
          color: "black",
          alignSelf: "center",
          marginTop: "20px",
        }}
      >
        Home
      </Link>
    </div>
  );
};

export default Info;
