import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";
// This function is returning JSX and using React
// Stateless Function Component
// It's using React.CreateElement Function
// JSX rules
// Return single element
// use camelCase for HTML attribute
// cloese every element
// formatting

//Setup variables

const books = [
  {
    id: 1,
    title: "Taranath Tantrik",
    author: "Taradas Bandopadhyay, Bibhutibhushan Bandopadhyay, Suvam Chanda",
    img:
      "https://rukminim1.flixcart.com/image/416/416/ju5u1zk0/regionalbooks/n/w/e/taranath-tantrik-samagrah-original-imaffcfvctwa2etv.jpeg?q=70",
  },
  {
    id: 2,
    title:
      "Ikigai: The Japanese secret to a long and happy life Hardcover – 27",
    author: "Héctor García",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.SR160,240_BG243,243,243.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = ({ title, img, author }) => {
  // attribute, eventHandlar
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        refernce Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
