import { fromJS } from 'immutable'

export default {
  state: fromJS({
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
    centerTop: null,
    centerBottom: null,
    centerLeft: null,
    centerRight: null,
    center: null,
  }),

  reducers: {
    setCross: (state, place) => state.set(place, 'X'),
    setCircle: (state, place) => state.set(place, 'O'),
  },

  selectors: {
    getCurrentValueAt: (state, place) => state.get(place),
  },
}