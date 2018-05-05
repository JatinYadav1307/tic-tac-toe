import  React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import crossImage from './../../images/cross.svg'
import circleImage from './../../images/circle.svg'

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #CCB6A2;
  margin: 5px;
  position: relative;

  @media (max-width: 425px) {
    width: 70px;
    height: 70px;
  }
`

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ResponsiveImage = styled.img`
  height: 40px;
  @media (max-width: 425px) {
    height: 30px;
  }
`
const Cross = () => (<ResponsiveImage src={crossImage} alt={'Cross'} />)
const Circle = () => (<ResponsiveImage src={circleImage} alt={'Circle'} />)

class BoxContainer extends Component {
  handleClick() {
    if (!this.props.isSet()) {
      this.props.fill()(this.props.name)
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