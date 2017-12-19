import { combineReducers } from 'redux'
import {
    ADD_DEV,
    REMOVE_DEV,
    REQUEST_DEVS,
    RECEIVE_DEVS
} from './actions'



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
    devs,dev
})

export default devApp