import CalculatorButton from "./CalculatorButton"
import React, { Component } from "react";

export default class Calculator extends Component {
    renderCalculatorButton(i) {
      return <div className="item"><CalculatorButton value={i}/></div> ;
    }

    render() {
        return (
            <div className="grid">
                <input type="text" id="calculatorField" value={calculatorInput} inputMode="numeric" className="calculatorDisplay" readOnly/>
                {["DEL", "AC", 7, 8, 9, "÷", 4, 5, 6, "x", 1, 2, 3, "-" ,".", 0, "=", "+"].map((i) => this.renderCalculatorButton(i))}
            </div>
        );
    } 
  }

  var calculatorInput = "";
