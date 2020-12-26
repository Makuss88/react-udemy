import * as actionTypes from './actionTypes'

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add5 = (value) => {
  return {
    type: actionTypes.ADD5,
    val: value,
  }
}

export const sub5 = (value) => {
  return {
    type: actionTypes.SUB5,
    val: value,
  }
}