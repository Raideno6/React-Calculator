import React, { Component } from "react";



export default class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
    render() {
      return (
        <button ref={this.buttonRef} className='calculatorButton' onClick={e => logNumber(this.props.value)}>
          {this.props.value}
        </button>
      )
    }
  }

  const logNumber = (buttonValue) => {
    console.log(buttonValue)
  }
  