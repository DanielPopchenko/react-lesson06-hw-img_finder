import React from "react";
import "../base.css";

export default function Button({ onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Button
    </button>
  );
}
