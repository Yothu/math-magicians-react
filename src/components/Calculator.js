import React from 'react';
import CalcRow from './CalcRow';

const CalcInfo = {
  first: ['AC', '+/-', '%', '÷'],
  second: ['7', '8', '9', 'x'],
  third: ['4', '5', '6', '-'],
  fourth: ['1', '2', '3', '+'],
  fifth: ['0', '.', '='],
  style: {
    orange: 'bg-orange',
    lightGray: 'bg-light-gray',
    darkGray: 'bg-dark-gray',
  },
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={`result col-12 p-3 text-end text-white border-mid-gray ${CalcInfo.style.darkGray}`}>0</div>
        </div>
        <CalcRow content={CalcInfo.first} style={CalcInfo.style} />
        <CalcRow content={CalcInfo.second} style={CalcInfo.style} />
        <CalcRow content={CalcInfo.third} style={CalcInfo.style} />
        <CalcRow content={CalcInfo.fourth} style={CalcInfo.style} />
        <div className="row">
          <button type="button" className={`col-6 p-3 text-center border-mid-gray ${CalcInfo.style.lightGray}`}>0</button>
          <button type="button" className={`col-3 p-3 text-center border-mid-gray ${CalcInfo.style.lightGray}`}>.</button>
          <button type="button" className={`col-3 p-3 text-center border-mid-gray ${CalcInfo.style.orange}`}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
