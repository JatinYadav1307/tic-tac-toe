import { fromJS } from 'immutable'

export default {
  state: fromJS({
    currentPlayer: 'Player 1',
    isGameOver: false,
    winner: null,
  }),

  reducers: {
    changePlayer: (state) => state.set('currentPlayer', state.get('currentPlayer') === 'Player 1' ? 'Player 2' : 'Player 1'),
    setGameOver: (state) => state.set('isGameOver', true),
    setWinner: (state, name) => state.set('winner', name),
    gameReset: (state) => state.set('winner', null).set('isGameOver', false).set('currentPlayer', 'Player 1'),
  },

  selectors: {
    getCurrentPlayer: (state) => state.get('currentPlayer'),
    isGameOver: (state) => state.get('isGameOver'),
    getWinner: (state) => state.get('winner'),
  },
}