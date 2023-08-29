import React, { useState } from "react";

function HomeComponent() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("celsius");
  const [result, setResult] = useState("");

  /* This function is used to send the value of temperature to convertTemperature function for performing calculation.*/
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
    convertTemperature(e.target.value, unit);
  };
  /* This function is used to set the state of unit being selected by the user, which is sent to convertTemperature function.*/
  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    convertTemperature(temperature, selectedUnit);
  };
  /* This function is used to calculate the temperature conversion */

  const convertTemperature = (value, selectedUnit) => {
    if (selectedUnit === "celsius") {
      setResult(`${(value * 9) / 5 + 32} °F`);
    } else {
      setResult(`${((value - 32) * 5) / 9} °C`);
    }
  };
  /* This function is used to swap the temperature units */
  const handleSwap = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
    convertTemperature(
      temperature,
      unit === "celsius" ? "fahrenheit" : "celsius"
    );
  };
  /* This function is used to change the background color of the app container based upon the temperature value*/

  const getBackgroundColor = () => {
    const value = parseFloat(result);
    if (!isNaN(value)) {
      if (unit === "celsius") {
        if (value >= 30 && value <= 45) {
          return "linear-gradient(36deg, rgba(14,197,245,0.8743872549019608) 0%, rgba(255,255,255,1) 100%)";
        } else if (value >= 46 && value <= 60) {
          return "linear-gradient(90deg, rgba(58,122,180,1) 0%, rgba(62,198,204,0.9752275910364145) 89%)";
        } else if (value >= 61 && value <= 79) {
          return "#A8DF8E";
        } else if (value >= 80 && value <= 89.9) {
          return "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,156,0,0.8155637254901961) 0%)";
        } else if (value >= 90) {
          return "red";
        }
      } else {
        if (value <= 0) {
          return "linear-gradient(36deg, rgba(14,197,245,0.8743872549019608) 0%, rgba(255,255,255,1) 100%)";
        } else if (value >= 0 && value <= 15) {
          return "linear-gradient(36deg, rgba(14,197,245,0.8743872549019608) 0%, rgba(255,255,255,1) 100%);";
        } else if (value >= 16 && value <= 24) {
          return "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,156,0,0.8155637254901961) 0%)";
        } else if (value >= 25 && value <= 30) {
          return "#FF6E31";
        } else if (value >= 31) {
          return "red";
        }
      }
    }
    return "white";
  };
  return (
    <div className="container" style={{ background: getBackgroundColor() }}>
      <div className="white-box">
        <h2 className="heading">Temperature Conversion</h2>
        <h5 className="heading">
          {" "}
          Change the Temperature to view the magic !!!
        </h5>
        <label>Temperature:</label>
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          className="input-field"
        />
        <br />
        <div className="heading">
          <input
            type="radio"
            id="celsius"
            name="unit"
            value="celsius"
            checked={unit === "celsius"}
            onChange={() => handleUnitChange("celsius")}
          />
          <label htmlFor="celsius">Celsius</label>

          <input
            type="radio"
            id="fahrenheit"
            name="unit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={() => handleUnitChange("fahrenheit")}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <br />
          <br />
          <button className="input-field button" onClick={handleSwap}>
            Swap Units
          </button>

          <p>Result: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
