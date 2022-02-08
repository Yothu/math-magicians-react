import React from 'react';
import PropTypes from 'prop-types';

class CalcCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, backGrnd } = this.props;
    return (
      <button type="button" className={`col-3 p-3 text-center border-mid-gray ${backGrnd}`}>{text}</button>
    );
  }
}

CalcCol.propTypes = {
  text: PropTypes.string.isRequired,
  backGrnd: PropTypes.string.isRequired,
};

export default CalcCol;
