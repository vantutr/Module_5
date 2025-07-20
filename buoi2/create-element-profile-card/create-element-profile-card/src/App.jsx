import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card--header" />
          <img
            className="avatar"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
          />
          <div className="card--body">
            <div>
              <p className="text-header">Ruma Khan</p>
              <p className="text-sub">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <button className="btn third">FOLLOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
