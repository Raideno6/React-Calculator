import CalculatorButton from "./CalculatorButton"
import React, { Component } from "react";

export default class Calculator extends Component {
    state = { message: "", equation: "" }
    callbackFunction = (childData) => {
       this.setState({message: childData[0], equation: childData[1]})
    }
    renderCalculatorButton(i) {
      return <div className="item"><CalculatorButton value={i} parentCallback = {this.callbackFunction}/></div> ;
    }


    render() {
        return (
            <div className="container">
                <label className="Equation">Equation: {this.state.equation}</label>
                <div className="grid">
                    <input type="text" id="calculatorField" inputMode="numeric"  value={this.state.message} className="calculatorDisplay" readOnly/>
                    {["DEL", "AC", 7, 8, 9, "÷", 4, 5, 6, "x", 1, 2, 3, "-" ,".", 0, "=", "+"].map((i) => this.renderCalculatorButton(i))}
                </div>
            </div>
        );
    } 
  }

