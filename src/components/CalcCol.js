import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class CalcCol extends React.Component {
  render() {
    const { text, asd } = this.props;
    return (
      <div className="col-3 bg-light-gray">{text}</div>
    );
  }
}

export default CalcCol;
