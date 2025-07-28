import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contract";
import Home from "./Home";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contract" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
