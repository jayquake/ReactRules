import React from "react";

const CustomButton = ({ to, onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default CustomButton;
