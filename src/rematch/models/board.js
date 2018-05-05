import { fromJS, Map } from 'immutable'

export default {
  state: fromJS({
    topLeft: {value: null, isSet: false},
    topRight: {value: null, isSet: false},
    bottomLeft: {value: null, isSet: false},
    bottomRight: {value: null, isSet: false},
    centerTop: {value: null, isSet: false},
    centerBottom: {value: null, isSet: false},
    centerLeft: {value: null, isSet: false},
    centerRight: {value: null, isSet: false},
    center: {value: null, isSet: false},
  }),

  reducers: {
    setCross: (state, place) => state.setIn([place, 'value'], 'X').setIn([place, 'isSet'], true),
    setCircle: (state, place) => state.setIn([place, 'value'], 'O').setIn([place, 'isSet'], true),
    resetBoard: (state) =>  {
      return state.mapEntries(([K, V]) => [K, Map({value: null, isSet: false})])
    }
  },

  selectors: {
    getCurrentValueOf: (state, place) => state.getIn([place, 'value']),
    getCurrentStatusOf: (state, place) => state.getIn([place, 'isSet']),
  },
}