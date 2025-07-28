import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [selected, setSelected] = useState("0");
  let [valueSelected, setValueSelected] = useState("");

  const choice = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    switch (selected) {
      case "0":
        setValueSelected("Java");
        break;
      case "1":
        setValueSelected("Angular");
        break;
      case "2":
        setValueSelected("Javascript");
        break;
      case "3":
        setValueSelected("Php");
        break;
      default:
    }
  }, [selected]);

  return (
    <>
      <div>
        Khóa học:
        <select
          onChange={(e) => {
            choice(e);
          }}
        >
          <option value="0">Java</option>
          <option value="1">Angular</option>
          <option value="2">Javascript</option>
          <option value="3">Php</option>
        </select>
        <h2>Your selected: {valueSelected}</h2>
      </div>
    </>
  );
}

export default App;
