/* eslint-disable */
import React, { useState } from "react";
import "./Calculator.css";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (e) => {
    const value = e.target.value;
    const result = calculate(state, value);
    setState(result);
  };

  const displayResult = (e) => {
    setState({
      total: e.target.value,
    });
  };

  const { total, next, operation } = state;
  return (
    <div className="calcCenter">
      <div class="mainCalculator">
        <div className="screen-row" onChange={displayResult}>
          {total}
          {operation}
          {next}
        </div>
        <div className="button-row one">
          <input type="button" value="AC" onClick={clickHandler} />
          <input type="button" value="+/-" onClick={clickHandler} />
          <input type="button" value="%" onClick={clickHandler} />
          <input
            type="button"
            value="÷"
            className="orange"
            onClick={clickHandler}
          />
        </div>
        <div className="button-row two">
          <input type="button" value="7" onClick={clickHandler} />
          <input type="button" value="8" onClick={clickHandler} />
          <input type="button" value="9" onClick={clickHandler} />
          <input
            type="button"
            value="*"
            className="orange"
            onClick={clickHandler}
          />
        </div>
        <div className="button-row three">
          <input type="button" value="4" onClick={clickHandler} />
          <input type="button" value="5" onClick={clickHandler} />
          <input type="button" value="6" onClick={clickHandler} />
          <input
            type="button"
            value="-"
            className="orange"
            onClick={clickHandler}
          />
        </div>
        <div className="button-row four">
          <input type="button" value="1" onClick={clickHandler} />
          <input type="button" value="2" onClick={clickHandler} />
          <input type="button" value="3" onClick={clickHandler} />
          <input
            type="button"
            value="+"
            className="orange"
            onClick={clickHandler}
          />
        </div>
        <div className="button-row five">
          <input
            type="button"
            value="0"
            className="zero"
            onClick={clickHandler}
          />
          <input type="button" value="." onClick={clickHandler} />
          <input
            type="button"
            value="="
            className="orange"
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
