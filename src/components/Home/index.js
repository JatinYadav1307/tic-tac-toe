import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '@rematch/select'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.topLeft('topLeft')}
        </div>
        <button onClick={() => this.props.setCross('topLeft')}>Set Cross</button>
        <button onClick={() => this.props.setCircle('topLeft')}>Set Circle</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  topLeft: (place) => select.board.getCurrentValueAt(state, place),
})

const mapDispatchToProps = (dispatch) => ({
  setCross: (place) => dispatch.board.setCross(place),
  setCircle: (place) => dispatch.board.setCircle(place),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
