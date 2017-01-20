export const pushCard = (card,containerId) => {
  return {
    type: 'PUSH_CARD',
    card,
    containerId
  }
}
export const moveCard = (dragIndex, hoverIndex, containerId) => {
  return {
    type: 'MOVE_CARD',
    dragIndex,
    hoverIndex,
    containerId
  }
}
export const removeCard = (index, containerId) => {
  return {
    type: 'REMOVE_CARD',
    index
  }
}
