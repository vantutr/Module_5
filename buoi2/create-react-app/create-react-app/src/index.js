//------------Thực hành 3 ------------//
// import React from "react";
// import ReactDOM from "react-dom/client";
// const name = "Your Name";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );

//------------Thực hành 4 ------------//
// import ReactDOM from "react-dom/client";
// const name = "Your name";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

//------------Thực hành 5 ------------//
// import ReactDOM from "react-dom/client";
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry",
// ];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map((item) => (
//         <li> {item} </li>
//       ))}
//     </ul>
//   </div>
// );

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};

setInterval(tick, 1000);
