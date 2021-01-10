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

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://rukminim1.flixcart.com/image/416/416/ju5u1zk0/regionalbooks/n/w/e/taranath-tantrik-samagrah-original-imaffcfvctwa2etv.jpeg?q=70"
    alt=""
  />
);

const Title = () => <h1>Taranath Tantrik</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Taradas Bandopadhyay, Bibhutibhushan Bandopadhyay
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
