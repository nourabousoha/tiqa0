import { combineReducers } from 'redux'
import {
    ADD_DEV,
    REMOVE_DEV,
    REQUEST_DEVS,
    RECEIVE_DEVS,
    TOGGLE_ADD_DEV
} from './actions'

// Initial State
const initialState = {
    showAddDev: false,
  };
  
  const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_ADD_DEV:
        return {
          showAddDev: !state.showAddDev,
        };
  
      default:
        return state;
    }
  };
  
  /* Selectors */
  
  // Get showAddPost
  export const getShowAddDev = state => state.app.showAddDev;

function dev(state = {}, action) {
    switch (action.type) {
        case ADD_DEV:
            return action.dev
                 
              default:
            return state

    }
}
function devs(state = [], action) {
    switch (action.type) {
        case ADD_DEV:
            return [...state,dev({},action)]
        case REMOVE_DEV:
            return state.slice().filter(ele=>ele.id!==action.index)

        case RECEIVE_DEVS:
            return action.devs
        case REQUEST_DEVS:
            return state
        default:
            return state

    }
}

const devApp = combineReducers({
    devs,dev,app:AppReducer
})

export default devApp