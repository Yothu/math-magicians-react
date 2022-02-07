import React from "react";
import CalcCol from "./CalcCol";

// eslint-disable-next-line react/prefer-stateless-function
class CalcRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <CalcCol text={this.props} class="bg-light-gray" />
        <CalcCol text="+/-" class="bg-light-gray" />
        <CalcCol text="%" class="bg-light-gray" />
        <CalcCol text="÷" class="bg-orange" />
      </div>
    );
  }
}


{ /* <div className="row">
<div className="col-3 bg-light-gray">AC</div>
<div className="col-3 bg-light-gray">+/-</div>
<div className="col-3 bg-light-gray">%</div>
<div className="col-3 bg-orange">÷</div>
</div> */ }
