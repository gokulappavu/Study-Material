import React from "react";
import ChildComp from "./ChildComp";
import { Link, useNavigate } from "react-router-dom";

const ParentComp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("submit");
    navigate(`/statecomp`);
  };

  const handleReset = () => {
    console.log("Reset");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <input />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <ChildComp props={{ btnName: "Submit", handleClick: handleSubmit }} />
        <ChildComp props={{ btnName: "Reset", handleClick: handleReset }} />
        {/* <ChildComp btnName={"Reset"} handleClick={handleReset} /> */}
        <Link to={`/functionState/${123}`}>Navigate</Link>
      </div>
    </div>
  );
};

export default ParentComp;
