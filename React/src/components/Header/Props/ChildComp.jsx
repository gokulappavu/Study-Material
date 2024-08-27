import React from "react";

const ChildComp = ({ props }) => {
  const { btnName, handleClick } = props;

  return <button onClick={handleClick}>{btnName}</button>;
};

export default ChildComp;
