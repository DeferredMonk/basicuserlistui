import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ basicIconStyle, src, alt, url, external }) => {
  return (
    <a
      href={external ? `http://${url}` : url}
      style={basicIconStyle}
      target={external ? "_Blank" : ""}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "32px", height: "32px", margin: "auto" }}
      />
    </a>
  );
};

export default Icon;
