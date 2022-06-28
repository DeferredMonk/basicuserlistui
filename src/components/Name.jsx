import React from "react";

const Name = ({ name, username }) => {
  return (
    <div>
      <h5 style={{ textAlign: "center", margin: "0" }}>{name}</h5>
      <h6 style={{ margin: "5px 0 0 0", textAlign: "center", opacity: "0.3" }}>
        {username}
      </h6>
    </div>
  );
};

export default Name;
