import update from 'react/lib/update'

const INITIAL_STATE = {
  container1: [
    { id: 1, text: "Header" },
    { id: 2, text: "Footer" },
    { id: 3, text: "Image" },
    { id: 4, text: "Content" }
  ],
  container2: []
};

export default function appReducer(state = INITIAL_STATE , action) {
  const updatedContainerId = (action.containerId === 1) ? "container1" : "container2";
  switch (action.type) {
    case 'PUSH_CARD':
      const newCard = action.card;
      return { ...state, [updatedContainerId]: [...state[updatedContainerId].concat(newCard)]};
    case 'MOVE_CARD':
      const dragIndex =  action.dragIndex;
      const hoverIndex = action.hoverIndex;
      const {dragCard} = {...state[updatedContainerId][dragIndex]};
      return { ...state, [updatedContainerId]: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]}
      };
    case 'REMOVE_CARD':
      const removeIndex = action.index;
      return { ...state, [updatedContainerId]: {
        $splice: [
          [removeIndex, 1]
        ]}
      };
    default:
      return state;
  }
}
