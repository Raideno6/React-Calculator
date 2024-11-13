import CalculatorButton from "./CalculatorButton"
import React, { Component } from "react";

export default class Calculator extends Component {
    renderCalculatorButton(i) {
      return <div className="item"><CalculatorButton value={i}/></div> ;
    }

    render() {
        return (
            <div className="grid">
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "RES", "+", "-", "*", "/"].map((i) => this.renderCalculatorButton(i))}
            </div>
        );
    } 
  }

  