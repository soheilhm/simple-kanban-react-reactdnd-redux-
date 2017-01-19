import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';

class App extends Component {

	render() {
		const style = {
			display: "flex",
			justifyContent: "space-around",
			paddingTop: "20px"
		}
		const listOne = [
			{ id: 1, text: "Header" },
			{ id: 2, text: "Footer" },
			{ id: 3, text: "Image" },
			{ id: 4, text: "Content" }
		];
		const listTwo = [];
		return (
			<div>
				<h1 style={{textAlign:'center',fontFamily:'serif', color: '#ffb84a'}}>Demo Project - Soheil</h1>
				<div style={{...style}}>
					<Container id={1} customWidth="25%" list={listOne} />
					<Container id={2} customWidth="50%" list={listTwo} />
				</div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
