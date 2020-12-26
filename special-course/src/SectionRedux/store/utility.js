export const updateObject = (oldState, updateValue) => {
  return {
    ...oldState,
    ...updateValue,
  }
}