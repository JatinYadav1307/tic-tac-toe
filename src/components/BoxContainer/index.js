import  React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import crossImage from './../../images/cross.svg'
import circleImage from './../../images/circle.svg'

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #CCB6A2;
  margin: 10px;
  position: relative;
`

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Cross = () => (<img src={crossImage} alt={'Cross'} height={'40px'} />)
const Circle = () => (<img src={circleImage} alt={'Circle'} height={'40px'} />)

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
      this.props.changePlayer()
    }
  }

  render() {
    return (
      <Box onClick={() => this.handleClick()}>
        <Center>
          {this.props.value(this.props.name) ? this.props.value(this.props.name) === 'X' ? <Cross /> : <Circle /> : null}
        </Center>
      </Box>
    );
  }
}

BoxContainer.prototypes = {
  value: PropTypes.string,
  fill: PropTypes.func,
  name: PropTypes.string,
  checkWin: PropTypes.func,
}

export default BoxContainer;