import React from 'react';
// import reactDom from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 bg-dark-gray">0</div>
        </div>
        <div className="row">
          <div className="col-3 bg-light-gray">AC</div>
          <div className="col-3 bg-light-gray">+/-</div>
          <div className="col-3 bg-light-gray">%</div>
          <div className="col-3 bg-orange">÷</div>
        </div>
        <div className="row">
          <div className="col-3 bg-light-gray">7</div>
          <div className="col-3 bg-light-gray">8</div>
          <div className="col-3 bg-light-gray">9</div>
          <div className="col-3 bg-orange">x</div>
        </div>
        <div className="row">
          <div className="col-3 bg-light-gray">4</div>
          <div className="col-3 bg-light-gray">5</div>
          <div className="col-3 bg-light-gray">6</div>
          <div className="col-3 bg-orange">-</div>
        </div>
        <div className="row">
          <div className="col-3 bg-light-gray">1</div>
          <div className="col-3 bg-light-gray">2</div>
          <div className="col-3 bg-light-gray">3</div>
          <div className="col-3 bg-orange">+</div>
        </div>
        <div className="row">
          <div className="col-6 bg-light-gray">0</div>
          <div className="col-3 bg-light-gray">.</div>
          <div className="col-3 bg-orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
