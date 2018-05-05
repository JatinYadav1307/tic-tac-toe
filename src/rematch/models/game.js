import { fromJS } from 'immutable'

export default {
  state: fromJS({
    currentPlayer: 'Player 1',
  }),

  reducers: {
    changePlayer: (state) => state.set('currentPlayer', state.get('currentPlayer') === 'Player 1' ? 'Player 2' : 'Player 1'),
  },

  selectors: {
    getCurrentPlayer: (state) => state.get('currentPlayer'),
  },
}