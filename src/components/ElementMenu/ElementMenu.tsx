import React from "react";
import "./style.css";

// Define an interface for the component's props
interface ElementMenuProps {
  className?: string;
  BGFill?: string;
}

// Apply the interface to the component's props
export const ElementMenu: React.FC<ElementMenuProps> = ({
  className = "",
  BGFill = "https://c.animaapp.com/M6CQlybR/img/bg-fill-14.svg"
}) => {
  return (
    <div className={`element-menu ${className}`}>
      <img className="BG-fill" alt="Bg fill" src={BGFill} />
      <div className="text-wrapper">二级菜单选中</div>
    </div>
  );
};
