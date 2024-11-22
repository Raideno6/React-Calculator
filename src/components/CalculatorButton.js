import React, { Component } from "react";



export default class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
    string = "";
    sendBackData = (value) => {
      this.string = calculate(value);
      console.log(this.string)
      this.props.parentCallback(this.string);
    }

    render() {
      return (
        <button ref={this.buttonRef} key={this.props.value} className='calculatorButton' onClick={e => this.sendBackData(this.props.value)}>
          {this.props.value}
        </button>
      )
    }
  };

  var operators = ["+","-","*","/"];
  var inputString = "";
  var previousInput = "";
  var prevInputFound = false;
  const calculate = (buttonValue) => {
    switch (buttonValue){
      case "x": 
        buttonValue = "*";
        break;
      case "÷": 
        buttonValue = "/";
        break;
    }

    if (buttonValue !== "DEL" && buttonValue !== "AC" && buttonValue !== "=") {
      inputString.toString();
      inputString += buttonValue.toString();
      console.log(inputString)
    }

    else if (buttonValue === "DEL"){
      try {
      inputString = inputString.substring(0, inputString.length - 1);
      console.log(inputString)
      }
      catch{
        inputString = "";
      }
    }

    else if (buttonValue === "AC"){
      inputString = "";
      console.log(inputString)
    }

    else if (buttonValue === "="){
      try {
      var operatorIndex = -1;
      var ans = eval(inputString)
      if (ans === inputString){

        operators.forEach(operator => {
          var temp = previousInput.lastIndexOf(operator);
          if (temp > operatorIndex){
            operatorIndex = temp;
            prevInputFound = true;
          }
        });
        previousInput = inputString + previousInput.substring(operatorIndex)
        var ans = eval(previousInput);
        
      }

      if (prevInputFound){
        prevInputFound = false;
        inputString = ans;
        return  [inputString, previousInput];
      }
      previousInput = inputString;
      inputString = ans;

      if (inputString.toString() === "undefined"){
        inputString = "";
      }
      }
      catch{
        console.log("Answer could not be found")
        inputString = "";
      }
    }

    return [inputString, previousInput];
  }

  