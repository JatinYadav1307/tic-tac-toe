import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '@rematch/select'
import { Flex } from 'grid-styled'
import BoxContainer from './../BoxContainer'

import { TurnBanner, WinnerBanner, CustomButton } from './UI'

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

  resetGame() {
    this.props.boardReset()
    this.props.gameReset()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!this.props.isGameOver && this.checkWin()) {
      this.props.setGameOver()
      this.props.setWinner(prevProps.currentPlayer)
    }
  }

  render() {
    return (
      <React.Fragment>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <TurnBanner>It's <span>{this.props.currentPlayer}'s</span> turn</TurnBanner>
        {rows.map((row) => (
          <Flex key={row.key}>
          {row.values.map((boxName) => (
            <BoxContainer
              key={boxName}
              name={boxName}
              isSet={() => this.props.getStatusOf(boxName)}
              changePlayer={() => this.props.changePlayer()}
              fill={() => this.getFillFunction()}
              value={(name) => this.props.getValueOf(name)}
            />
          ))}
          </Flex>
        ))}
        {this.props.isGameOver && (
          <React.Fragment>
            <WinnerBanner><span>{this.props.winner}</span> wins!</WinnerBanner>
            <CustomButton onClick={() => this.resetGame()}>Reset</CustomButton>
          </React.Fragment>
        )}
      </Flex>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  getValueOf: (place) => select.board.getCurrentValueOf(state, place),
  getStatusOf: (place) => select.board.getCurrentStatusOf(state, place),
  currentPlayer: select.game.getCurrentPlayer(state),
  isGameOver: select.game.isGameOver(state),
  winner: select.game.getWinner(state),
})

const mapDispatchToProps = (dispatch) => ({
  setCross: (place) => dispatch.board.setCross(place),
  setCircle: (place) => dispatch.board.setCircle(place),
  changePlayer: () => dispatch.game.changePlayer(),
  setGameOver: () => dispatch.game.setGameOver(),
  setWinner: (name) => dispatch.game.setWinner(name),
  gameReset: () => dispatch.game.gameReset(),
  boardReset: () => dispatch.board.resetBoard(),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
