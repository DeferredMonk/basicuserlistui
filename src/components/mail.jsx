import React, { useState } from "react";

const Mail = ({ setBasicIconStyle, user }) => {
  const EmailIt = `mailto:${user.email}`;

  const [style, setStyle] = useState({
    hover: false,
    backgroundStyle: {
      backgroundColor: "whitesmoke",
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mailStyle: { width: "32px", height: "32px" },
  });

  return (
    <div
      style={style.backgroundStyle}
      onMouseLeave={() => {
        setStyle({
          ...style,
          hover: false,
          backgroundStyle: {
            backgroundColor: "whitesmoke",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          mailStyle: { margin: "auto" },
        });
        setBasicIconStyle({
          backgroundColor: "whitesmoke",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        });
      }}
      onMouseEnter={() => {
        setStyle({
          ...style,
          hover: true,
          backgroundStyle: {
            backgroundColor: "whitesmoke",
            width: "90%",
            height: "42px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          },
          mailStyle: { marginLeft: "5%" },
        });
        setBasicIconStyle({ display: "none" });
      }}
    >
      <img src="/mail.png" alt={user.email} style={style.mailStyle} />
      {style.hover && (
        <a style={{ fontSize: "11px", margin: "auto" }} href={EmailIt}>
          {user.email}
        </a>
      )}
    </div>
  );
};

export default Mail;
