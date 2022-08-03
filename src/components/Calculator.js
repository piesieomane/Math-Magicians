/* eslint-disable */
import React from "react";
import "./Calculator.css";
import calculate from "../logic/calculate";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const value = e.target.value;
    const result = calculate(this.state, value);
    this.setState(result);
  };

  displayResult = (e) => {
    this.setState({
      total: e.target.value,
    });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calcCenter">
        <div class="mainCalculator">
          <div className="screen-row" onChange={this.displayResult}>
            {total}
            {operation}
            {next}
          </div>
          <div className="button-row one">
            <input type="button" value="AC" onClick={this.clickHandler} />
            <input type="button" value="+/-" onClick={this.clickHandler} />
            <input type="button" value="%" onClick={this.clickHandler} />
            <input
              type="button"
              value="÷"
              className="orange"
              onClick={this.clickHandler}
            />
          </div>
          <div className="button-row two">
            <input type="button" value="7" onClick={this.clickHandler} />
            <input type="button" value="8" onClick={this.clickHandler} />
            <input type="button" value="9" onClick={this.clickHandler} />
            <input
              type="button"
              value="*"
              className="orange"
              onClick={this.clickHandler}
            />
          </div>
          <div className="button-row three">
            <input type="button" value="4" onClick={this.clickHandler} />
            <input type="button" value="5" onClick={this.clickHandler} />
            <input type="button" value="6" onClick={this.clickHandler} />
            <input
              type="button"
              value="-"
              className="orange"
              onClick={this.clickHandler}
            />
          </div>
          <div className="button-row four">
            <input type="button" value="1" onClick={this.clickHandler} />
            <input type="button" value="2" onClick={this.clickHandler} />
            <input type="button" value="3" onClick={this.clickHandler} />
            <input
              type="button"
              value="+"
              className="orange"
              onClick={this.clickHandler}
            />
          </div>
          <div className="button-row five">
            <input
              type="button"
              value="0"
              className="zero"
              onClick={this.clickHandler}
            />
            <input type="button" value="." onClick={this.clickHandler} />
            <input
              type="button"
              value="="
              className="orange"
              onClick={this.clickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
