import React from "react";
import ReactDom from "react-dom";
import { greeting } from "./testing/testing";

//CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";
// This function is returning JSX and using React
// Stateless Function Component
// It's using React.CreateElement Function
// JSX rules
// Return single element
// use camelCase for HTML attribute
// cloese every element
// formatting

//Setup variables

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
