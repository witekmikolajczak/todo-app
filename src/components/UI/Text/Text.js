import React from "react";
import classes from "./Text.module.css";
const Text = (props) => {
  return (
    <h2 className={`${props.className} ${classes.text}`}>{props.title}</h2>
  );
};
export default Text;
