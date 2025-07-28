import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  return (
    <>
      <div>
        <p>Giá trị của {count}</p>
        <button onClick={handleClick}>Nhấn vào đây</button>
      </div>
    </>
  );
}

export default App;
