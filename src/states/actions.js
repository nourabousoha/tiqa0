/*
 * action types
 */

export const ADD_DEV = 'ADD_DEC'
export const REMOVE_DEV = 'REMOVE_DEV'
export const SHOW_ALL_DEVS = 'SHOW_ALL_DEVS'



/*
 * action creators
 */

export function addDEV(dev) {
  return { type: ADD_DEV, dev }
}

export function removeDev(index) {
  return { type: REMOVE_DEV, index }
}

