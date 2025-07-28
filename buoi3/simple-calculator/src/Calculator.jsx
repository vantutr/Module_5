import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Định nghĩa state ban đầu
      num1: "",
      num2: "",
      result: 0,
    };
  }

  // Phương thức xử lý sự kiện thay đổi cho input số thứ nhất
  handleNum1Change = (e) => {
    this.setState({ num1: e.target.value });
  };

  // Phương thức xử lý sự kiện thay đổi cho input số thứ hai
  handleNum2Change = (e) => {
    this.setState({ num2: e.target.value });
  };

  // Phương thức xử lý các phép toán
  calculate = (operator) => {
    // Lấy giá trị từ state
    const number1 = parseInt(this.state.num1);
    const number2 = parseInt(this.state.num2);

    // Kiểm tra xem người dùng đã nhập số hợp lệ chưa
    if (isNaN(number1) || isNaN(number2)) {
      this.setState({ result: "Vui lòng nhập số hợp lệ!" });
      return;
    }

    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = number1 + number2;
        break;
      case "-":
        calculatedResult = number1 - number2;
        break;
      case "x":
        calculatedResult = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          calculatedResult = "Không thể chia cho 0!";
        } else {
          calculatedResult = number1 / number2;
        }
        break;
      default:
        calculatedResult = "Phép toán không hợp lệ";
    }
    this.setState({ result: calculatedResult }); // Cập nhật state kết quả
  };

  // Phương thức render để hiển thị UI
  render() {
    // Lấy giá trị từ state để sử dụng trong JSX
    const { num1, num2, result } = this.state;

    return (
      <div className="calculator-container">
        <h2>Máy Tính Đơn Giản</h2>
        <div className="input-group">
          <label htmlFor="num1">Số thứ nhất:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={this.handleNum1Change}
          />
        </div>
        <div className="input-group">
          <label htmlFor="num2">Số thứ hai:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={this.handleNum2Change}
          />
        </div>
        <div className="buttons">
          <button onClick={() => this.calculate("+")}>+</button>
          <button onClick={() => this.calculate("-")}>-</button>
          <button onClick={() => this.calculate("x")}>x</button>
          <button onClick={() => this.calculate("/")}>/</button>
        </div>
        <div className="result">
          <p>Kết quả: {result}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
