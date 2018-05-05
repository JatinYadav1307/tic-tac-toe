import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '@rematch/select'
import { Flex } from 'grid-styled'
import BoxContainer from './../BoxContainer'

const rows = [
  { key: 'TOP_ROW', values: ['topLeft', 'centerTop', 'topRight'] },
  { key: 'MIDDLE_ROW', values: ['centerLeft', 'center', 'centerRight'] },
  { key: 'BOTTOM_ROW', values: ['bottomLeft', 'centerBottom', 'bottomRight'] },
]

const combinations = [
  ['topLeft', 'centerTop', 'topRight'],
  ['centerLeft', 'center', 'centerRight'],
  ['bottomLeft', 'centerBottom', 'bottomRight'],
  ['topLeft', 'centerLeft', 'bottomLeft'],
  ['centerTop', 'center', 'centerBottom'],
  ['topRight', 'centerRight', 'bottomRight'],
  ['topLeft', 'center', 'bottomRight'],
  ['topRight', 'center', 'bottomLeft'],
]

class Home extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      optionNumber: 0,
    }

    this.functions = [ this.props.setCircle, this.props.setCross ]
  }

  getFillFunction() {
    const currentOption = this.state.optionNumber
    this.setState({ optionNumber: currentOption ^ 1 })
    return this.functions[currentOption]
  }

  checkWin() {
    const result = combinations.map((combination) => {
      const allCross =  combination.every((box) => this.props.getValueOf(box) === 'X')
      const allCircle =  combination.every((box) => this.props.getValueOf(box) === 'O')
      return allCross || allCircle
    })
    return result.find((value) => value === true)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.checkWin()) {
      console.log('YOU WIN!', prevProps.currentPlayer)
    }
  }

  render() {
    return (
      <React.Fragment>
      <p>{this.props.currentPlayer}'s Turn</p>
      <Flex flexDirection={'column'}>
        {rows.map((row) => (
          <Flex p={2} key={row.key}>
          {row.values.map((boxName) => (
            <BoxContainer
              key={boxName}
              name={boxName}
              changePlayer={() => this.props.changePlayer()}
              fill={() => this.getFillFunction()}
              value={(name) => this.props.getValueOf(name)}
            />
          ))}
          </Flex>
        ))}
      </Flex>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  getValueOf: (place) => select.board.getCurrentValueAt(state, place),
  currentPlayer: select.game.getCurrentPlayer(state),
})

const mapDispatchToProps = (dispatch) => ({
  setCross: (place) => dispatch.board.setCross(place),
  setCircle: (place) => dispatch.board.setCircle(place),
  changePlayer: () => dispatch.game.changePlayer(),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
