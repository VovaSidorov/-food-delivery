import React, { Component } from "react";

function Dish(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span style={{ padding: "10px" }}>{props.price}</span>
    </div>
  );
}

export default Dish;
