/*
 * action types
 */

export const ADD_DEV = 'ADD_DEV'
export const REMOVE_DEV = 'REMOVE_DEV'
export const LOAD_DEVS = 'LOAD_DEVS'
export const REQUEST_DEVS = 'REQUEST_DEVS'
export const RECEIVE_DEVS = 'RECEIVE_DEVS'
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

export function requestDevs() {
  return {
    type: REQUEST_DEVS

  }
} 
export function receiveDevs(devs) {
  return {
    type:RECEIVE_DEVS,devs

  }
} 