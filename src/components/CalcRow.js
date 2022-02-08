import React from 'react';
import PropTypes from 'prop-types';
import CalcCol from './CalcCol';

class CalcRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, style: { lightGray, orange } } = this.props;
    return (
      <div className="row">
        <CalcCol text={content[0]} backGrnd={lightGray} />
        <CalcCol text={content[1]} backGrnd={lightGray} />
        <CalcCol text={content[2]} backGrnd={lightGray} />
        <CalcCol text={content[3]} backGrnd={orange} />
      </div>
    );
  }
}

CalcRow.propTypes = {
  content: PropTypes.instanceOf(Array).isRequired,
  style: PropTypes.instanceOf(Object).isRequired,
};

export default CalcRow;
