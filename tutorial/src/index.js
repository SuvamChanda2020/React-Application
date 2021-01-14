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
    title: "Taranath Tantrik",
    author: "Taradas Bandopadhyay, Bibhutibhushan Bandopadhyay, Suvam Chanda",
    img:
      "https://rukminim1.flixcart.com/image/416/416/ju5u1zk0/regionalbooks/n/w/e/taranath-tantrik-samagrah-original-imaffcfvctwa2etv.jpeg?q=70",
  },
  {
    title:
      "Ikigai: The Japanese secret to a long and happy life Hardcover – 27",
    author: "Héctor García",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.SR160,240_BG243,243,243.jpg",
  },
];
const names = ["Suvam", "Rahul", "Avik"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}
const Book = ({ img, title, author }) => {
  // props Destructuring
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
