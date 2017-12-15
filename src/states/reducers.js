import { combineReducers } from 'redux'
import {
    ADD_DEV,
    REMOVE_DEV,
    LOAD_DEVS
} from './actions'



function devreducer(state = [], action) {
    switch (action.type) {
        case ADD_DEV:
            return [
                ...state,
                action.dev
            ]
        case REMOVE_DEV:
            return this.state.slice().filter(ele=>ele.id!==action.index)

        case LOAD_DEVS:
            return state
        default:
            return state

    }
}

const devApp = combineReducers({
    devreducer
})

export default devApp