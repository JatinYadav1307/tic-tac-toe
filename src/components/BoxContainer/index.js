import  React, { Component } from 'react';
import PropTypes from 'prop-types'

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isSet: false,
    }
  }

  handleClick() {
    if (!this.state.isSet) {
      this.props.fill()(this.props.name)
      this.setState({ isSet: true })
    }
  }

  render() {
    return (
      <div style={{ width: '100px', height: '100px', backgroundColor: 'red', margin: '10px' }} onClick={() => this.handleClick()} >
        {this.props.value(this.props.name)}
      </div>
    );
  }
}

BoxContainer.prototypes = {
  value: PropTypes.string,
  fill: PropTypes.func,
  name: PropTypes.string,
}

export default BoxContainer;