import React, { Component } from 'react';
import update from 'react/lib/update';
import Container from './Container';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';
import { addCard, removeCard, moveCard  } from '../actions/actions'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class ContainerBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { cards1: props.list, cards2: [] };
	}
	render() {
		const style = {
			display: "flex",
			justifyContent: "space-around",
			paddingTop: "20px"
		}
		return (
			<div style={{...style}}>
				<Container id={1} cards={this.state.cards1} customWidth="25%" />
				<Container id={2} cards={this.state.cards2} customWidth="50%" />
			</div>
		);
  }
}

export default DragDropContext(HTML5Backend)(ContainerBoard);
