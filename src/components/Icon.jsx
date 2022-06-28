import React from "react";

const Icon = ({ basicIconStyle, src, alt, url }) => {
  return (
    <a href={`http://${url}`} style={basicIconStyle} target="_blank">
      <img
        src={src}
        alt={alt}
        style={{ width: "32px", height: "32px", margin: "auto" }}
      />
    </a>
  );
};

export default Icon;
