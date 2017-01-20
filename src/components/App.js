import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import Container from './Container';

import { pushCard } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    allCards: {...state}
  };
}
@connect(mapStateToProps, null)
@DragDropContext(HTML5Backend)
export default class App extends Component {
	componentWillUpdate() {
    console.log("going to update!!!!");
  }
	render() {
		let container1Cards = this.props.allCards.container1;
		let container2Cards = this.props.allCards.container2;
		const style = {
			display: "flex",
			justifyContent: "space-around",
			paddingTop: "20px"
		}
		return (
			<div>
				<h1 style={{textAlign:'center',fontFamily:'serif', color: '#ffb84a'}}>Demo Project - Soheil</h1>
				<div style={{...style}}>
					<Container id={1} customWidth="25%" cards={container1Cards} />
					<Container id={2} customWidth="50%" cards={container2Cards} />
				</div>
			</div>
		);
	}
}
