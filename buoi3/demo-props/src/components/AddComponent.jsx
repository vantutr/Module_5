//----------Dùng Class Component-------//
// import { Component } from "react";
// class AddComponent extends Component {
//   render() {
//     return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>;
//   }
// }

//----------Dùng Function Component-------//
function AddComponent(props) {
  return <h1>Total: {props.firstNumber + props.secondNumber}</h1>;
}

export default AddComponent;
