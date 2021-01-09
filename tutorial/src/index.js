import React from "react";
import ReactDom from "react-dom";

// This function is returning JSX and using React
// Stateless Function Component
// It's using React.CreateElement Function
// JSX rules
// Return single element
// use camelCase for HTML attribute
// cloese every element
// formatting

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
