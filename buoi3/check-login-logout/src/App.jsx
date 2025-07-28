import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) return <Home onLogOut={this.handleLogout} />;
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogin}>Log in</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
