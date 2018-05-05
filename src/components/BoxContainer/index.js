import React, { Component } from 'react'
import PropTypes from 'prop-types'
import crossImage from './../../images/cross.svg'
import circleImage from './../../images/circle.svg'

import { Box, Center, ResponsiveImage } from './UI'

const Cross = () => <ResponsiveImage src={crossImage} alt={'Cross'} />
const Circle = () => <ResponsiveImage src={circleImage} alt={'Circle'} />

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
					{this.props.value(this.props.name) ? (
						this.props.value(this.props.name) === 'X' ? (
							<Cross />
						) : (
							<Circle />
						)
					) : null}
				</Center>
			</Box>
		)
	}
}

BoxContainer.prototypes = {
	value: PropTypes.string,
	fill: PropTypes.func,
	name: PropTypes.string,
	checkWin: PropTypes.func,
}

export default BoxContainer
