import React, { Component } from "react";



export default class CalculatorButton extends Component {
    render() {
      return (
        <button className='calculatorButton'>
          {this.props.value}
        </button>
      )
    }
  }
  