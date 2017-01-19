import update from 'react/lib/update'

const INITIAL_STATE=[
  { id: 1, text: "Header" },
  { id: 2, text: "Footer" },
  { id: 3, text: "Image" },
  { id: 4, text: "Content" }
];
function updateContainer(state=[],action){
  switch (action.type) {
    case ADD_CARD:
      return [...state,action.card]
    case REMOVE_CARD:
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1),
      ];
    case MOVE_CARD:
    return update(state, {
      cards: {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, state[action.dragIndex]]
        ]
      }
    })
    default:
      return state
  }
}

export default updateContainer
