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
  
  render() {
    return (
      <React.Fragment>
      <Flex flexDirection={'column'}>
        {rows.map((row) => (
          <Flex p={2} key={row.key}>
          {row.values.map((boxName) => (
            <BoxContainer
              key={boxName}
              name={boxName}
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
})

const mapDispatchToProps = (dispatch) => ({
  setCross: (place) => dispatch.board.setCross(place),
  setCircle: (place) => dispatch.board.setCircle(place),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
