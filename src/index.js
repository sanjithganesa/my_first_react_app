import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <p>
      <h1 className="title" contentEditable="true" spellcheck="false">
        {" "}
        My favorite food{" "}
      </h1>
      <ul>
        <li> Bacon </li>
        <li> Jamon </li>
        <li> Noodles </li>
      </ul>
    </p>
  </div>,

  document.getElementById("root")
);
