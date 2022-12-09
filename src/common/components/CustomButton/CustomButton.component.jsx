import React from "react";

import "./CustomButton.styles.css";

export const CustomButton = (props) => {
  const changeOverBackgroundColor = (e) => {
    e.target.style.backgroundColor = props.overBackgroundColor;
  };
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "var(--color-white-original)",
        color: props.color ? props.color : "var(--color-black-primary)",
        width: props.width ? props.width : "none",
        height: props.height ? props.height : "none",
        marginTop: props.marginTop ? props.marginTop : "none",
        fontSize: props.fontSize ? props.fontSize : "none",
      }}
      onClick={props.onClick}
      onMouseOver={props.overBackgroundColor ? changeOverBackgroundColor : null}
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = props.backgroundColor)
      }
    >
      {props.children}
    </button>
  );
};

