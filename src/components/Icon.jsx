import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ basicIconStyle, src, alt, url, external }) => {
  return (
    <div style={basicIconStyle}>
      {external ? (
        <a href={`http://${url}`} target="_Blank">
          <img
            src={src}
            alt={alt}
            style={{ width: "32px", height: "32px", margin: "auto" }}
          />
        </a>
      ) : (
        <Link to={url}>
          <img
            src={src}
            alt={alt}
            style={{ width: "32px", height: "32px", margin: "auto" }}
          />
        </Link>
      )}
    </div>
  );
};

export default Icon;
