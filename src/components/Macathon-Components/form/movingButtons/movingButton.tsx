import React from "react";
import "./movingButton.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}
const MovingButton: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="movingButton" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default MovingButton;
