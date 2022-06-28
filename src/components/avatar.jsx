import React from "react";

const avatar = () => {
  const styleAvatar = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    display: "inline-block",
    overflow: "hidden",
    margin: "0px auto 0px",
    gridRow: "0",
  };
  const styleFace = {
    backgroundColor: "whitesmoke",
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    margin: "5px auto 0px",
  };
  const styleBody = {
    backgroundColor: "whitesmoke",
    width: "75%",
    height: "50%",
    borderRadius: "50%",
    margin: "auto",
  };
  return (
    <div className="container" style={styleAvatar}>
      <div style={styleFace}></div>
      <div style={styleBody}></div>
    </div>
  );
};

export default avatar;
