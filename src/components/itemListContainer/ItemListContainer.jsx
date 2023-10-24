import React from "react";

const SubHeadingTitle = ({title}) => {
  return (
    <div
      style={{
        backgroundColor: "#fffbcb",
        padding: "0px",
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default SubHeadingTitle;
