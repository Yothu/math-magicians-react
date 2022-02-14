import React from 'react';
import Header from './Header';
import calculate from './logic/calculate';

const Style = {
  button: 'p-3 text-center border-mid-gray',
  orange: 'bg-orange',
  lightGray: 'bg-light-gray',
  darkGray: 'bg-dark-gray',
};

function Calculator() {
  const [state, setState] = React.useState({ total: null });

  const {
    button, orange, lightGray, darkGray,
  } = Style;

  const obj = state;

  function press(state, button) {
    setState(calculate(state, button));
  }

  return (
    <>
      <Header />
      <section id="calculator-section" className="container-fluid px-sm-5 p-3 screen-height">
        <p>a</p>
      </section>
      <div id="calculator" className="container">
        <div className="row">
          <div className={`result col-12 p-3 text-white text-end border-mid-gray ${darkGray}`}>
            { state.next || state.operation || state.total || 0 }
          </div>
        </div>
        <div className="row">
          <button type="button" onClick={() => press(obj, 'AC')} className={`col-3 ${button} ${lightGray}`}>AC</button>
          <button type="button" onClick={() => press(obj, '+/-')} className={`col-3 ${button} ${lightGray}`}>+/-</button>
          <button type="button" onClick={() => press(obj, '%')} className={`col-3 ${button} ${lightGray}`}>%</button>
          <button type="button" onClick={() => press(obj, '÷')} className={`col-3 ${button} ${orange}`}>÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => press(obj, '7')} className={`col-3 ${button} ${lightGray}`}>7</button>
          <button type="button" onClick={() => press(obj, '8')} className={`col-3 ${button} ${lightGray}`}>8</button>
          <button type="button" onClick={() => press(obj, '9')} className={`col-3 ${button} ${lightGray}`}>9</button>
          <button type="button" onClick={() => press(obj, 'x')} className={`col-3 ${button} ${orange}`}>x</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => press(obj, '4')} className={`col-3 ${button} ${lightGray}`}>4</button>
          <button type="button" onClick={() => press(obj, '5')} className={`col-3 ${button} ${lightGray}`}>5</button>
          <button type="button" onClick={() => press(obj, '6')} className={`col-3 ${button} ${lightGray}`}>6</button>
          <button type="button" onClick={() => press(obj, '-')} className={`col-3 ${button} ${orange}`}>-</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => press(obj, '1')} className={`col-3 ${button} ${lightGray}`}>1</button>
          <button type="button" onClick={() => press(obj, '2')} className={`col-3 ${button} ${lightGray}`}>2</button>
          <button type="button" onClick={() => press(obj, '3')} className={`col-3 ${button} ${lightGray}`}>3</button>
          <button type="button" onClick={() => press(obj, '+')} className={`col-3 ${button} ${orange}`}>+</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => press(obj, '0')} className={`col-6 ${button} ${lightGray}`}>0</button>
          <button type="button" onClick={() => press(obj, '.')} className={`col-3 ${button} ${lightGray}`}>.</button>
          <button type="button" onClick={() => press(obj, '=')} className={`col-3 ${button} ${orange}`}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
