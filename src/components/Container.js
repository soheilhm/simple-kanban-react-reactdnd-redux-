import React, { Component } from 'react';
import update from 'react/lib/update';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './Card';
import { DropTarget } from 'react-dnd';

class Container extends Component {

	constructor(props) {
		super(props);
		this.state = { cards: props.cards };
	}

	componentWillUpdate(nextProps, nextState){
		console.log("Container: " + this.props.id + " Soon to be updated: \n" );
	}

	pushCard(card) {
		this.setState(update(this.state, {
			cards: {
				$push: [ card ]
			}
		}));
	}

	removeCard(index) {
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state;
		const dragCard = cards[dragIndex];

		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
	}

	render() {
		const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {
			width: this.props.customWidth,
			height: 600,
			border: '1px solid gray',
			borderRadius: 25,
			display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'space-around',
		};

		const backgroundColor = isActive ? 'lightgreen' : 'lightgray';

		return connectDropTarget(
			<div style={{...style, backgroundColor}}>
				{cards.map((card, i) => {
					return (
						<Card
							key={card.id}
							index={i}
							listId={this.props.id}
							card={card}
							removeCard={this.removeCard.bind(this)}
							moveCard={this.moveCard.bind(this)} />
					);
				})}
			</div>
		);
  }
}


const specs = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();
		//if the Container’s id is different from the Container’s id of the object being dropped then we push the element.
		// The return is an object with the Container’s id that is used later in "endDrag" function to clear the first Container after the card is moved
		if ( id !== sourceObj.listId ){
			component.pushCard(sourceObj.card);
		}
		return {
			listId: id
		};

	}
}


export default DropTarget("CARD", specs, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);
