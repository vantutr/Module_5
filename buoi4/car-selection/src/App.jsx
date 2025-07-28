import React, { useState } from "react";
import "./App.css";

function App() {
  const carList = ["Mercedes S600", "BMW X5", "Audi A8", "Tesla Model S"];
  const colorList = ["Black", "White", "Red", "Blue"];

  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  const handleCarChange = (e) => {
    const newCar = e.target.value;
    // Cập nhật state selectedCar: giữ nguyên giá trị color đã chọn trước đó
    setSelectedCar((prevState) => ({
      ...prevState, // Giữ lại các thuộc tính cũ của state (ở đây là 'color')
      car: newCar,
    }));
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedCar((prevState) => ({
      ...prevState,
      color: newColor,
    }));
  };

  return (
    <div className="car-selection-container">
      <h1>Select your car</h1>

      <div className="selection-group">
        <label htmlFor="car-select">Select a car</label>
        <select
          id="car-select"
          value={selectedCar.car}
          onChange={handleCarChange}
        >
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>

      <div className="selection-group">
        <label htmlFor="color-select">Select a color</label>
        <select
          id="color-select"
          value={selectedCar.color}
          onChange={handleColorChange}
        >
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="result-display">
        <p>
          You selected a {selectedCar.color} - {selectedCar.car}
        </p>
      </div>
    </div>
  );
}

export default App;
