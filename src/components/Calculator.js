import React from 'react';
import calculate from './logic/calculate';

const Style = {
  button: 'p-3 text-center border-mid-gray',
  orange: 'bg-orange',
  lightGray: 'bg-light-gray',
  darkGray: 'bg-dark-gray',
};
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
    };
  }

  render() {
    const obj = this.state;
    const { total } = this.state;

    const {
      button, orange, lightGray, darkGray,
    } = Style;

    return (
      <div className="container">
        <div className="row">
          <div className={`result col-12 ${button} ${darkGray}`}>{total}</div>
        </div>
        <div className="row">
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>AC</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>+/-</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>%</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${orange}`}>÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>7</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>8</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>9</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${orange}`}>x</button>
        </div>
        <div className="row">
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>4</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>5</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>6</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${orange}`}>-</button>
        </div>
        <div className="row">
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>1</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>2</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${lightGray}`}>3</button>
          <button type="button" onClick={calculate()} className={`col-3 ${button} ${orange}`}>+</button>
        </div>
        <div className="row">
          <button type="button" onClick={calculate(obj, '0')} className={`col-6 ${button} ${lightGray}`}>0</button>
          <button type="button" onClick={calculate(obj, '.')} className={`col-3 ${button} ${lightGray}`}>.</button>
          <button type="button" onClick={calculate(obj, '=')} className={`col-3 ${button} ${orange}`}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
