import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      color: "black",
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 5000);
  }
  render() {
    return (
      <>
        <div style={{ textAlign: "center", padding: 30 }}>
          <button onClick={this.decrease}>Decrease</button>
          <span style={{ padding: 10 }}>{this.state.number}</span>
          <button onClick={this.increase}>Increase</button>
        </div>
        
        <div>
          <div
            style={{
              backgroundColor: this.state.color,
              paddingTop: 20,
              width: 400,
              height: 80,
              margin: "auto",
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
