export const addCard = (card) => {
  return {
    type: 'ADD_CARD',
    card
  }
}
export const removeCard = (index) => {
  return {
    type: 'REMOVE_CARD',
    index
  }
}
export const moveCard = (dragIndex,hoverIndex) => {
  return {
    type: 'TOGGLE_TODO',
    dragIndex,
    hoverIndex
  }
}
