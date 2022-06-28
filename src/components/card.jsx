import React, { useState } from "react";
import Avatar from "./avatar";
import { Link } from "react-router-dom";
import Mail from "./mail";
import Icon from "./Icon";
import Name from "./Name";

const Card = ({ user }) => {
  const styleCard = {
    borderRadius: "5px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    minWidth: "200px",
    height: "300px",
    display: "grid",
    gridAutoRows: "auto",
  };
  const [basicIconStyle, setBasicIconStyle] = useState({
    backgroundColor: "whitesmoke",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <div className="card" style={styleCard}>
      <h4 style={{ margin: "15px 0 0 15px " }}>{user.company.name}</h4>
      <Avatar />
      <Name name={user.name} username={user.username} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Mail user={user} setBasicIconStyle={setBasicIconStyle} />
        <Icon
          basicIconStyle={basicIconStyle}
          src="./internet.png"
          alt="Link to homepage"
          url={user.website}
        />
        <Icon
          basicIconStyle={basicIconStyle}
          src="./info.png"
          alt="More info"
        />
      </div>
    </div>
  );
};

export default Card;
