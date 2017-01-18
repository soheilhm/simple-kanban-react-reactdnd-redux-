import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
//importing constants for the draggable item types


import { DragSource } from 'react-dnd';

//Drag source specification for Knight
//Nothing to describe as there is only a single draggable object in the whole application
const knightSource = {
  beginDrag(props) {
    return {};
  }
};

// Collecting function topass required props to the item:
// 1)dragsource node 2)knowledge of itself being dragged
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  componentDidMount() {
    const img = new Image();
    img.src = "http://www.clker.com/cliparts/5/c/s/7/S/U/test1-th.png";
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        paddingLeft: 5
      }}>
        ♘
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
