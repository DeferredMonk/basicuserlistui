import React from "react";
import Card from "./card";

const user = ({ allUsers }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "40px",
        marginTop: "50px",
      }}
    >
      {allUsers.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default user;
