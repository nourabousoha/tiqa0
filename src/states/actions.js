/*
 * action types
 */

export const ADD_DEV = 'ADD_DEC'
export const REMOVE_DEV = 'REMOVE_DEV'
export const LOAD_DEVS = 'LOAD_DEVS'



/*
 * action creators
 */

export function addDev(dev) {
  return { type: ADD_DEV, dev }
}

export function removeDev(index) {
  return { type: REMOVE_DEV, index }
}

export function loadDevs() {
    return { type: LOAD_DEVS }
  }
  