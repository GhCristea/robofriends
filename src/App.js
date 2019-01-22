import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots';


class App extends Component {

	constructor(){
		super();
		this.state = {
		robots : robots,
		searchBox: SearchBox
		}
	}

	render(){
		return (
			<div className = 'tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={this.state.robots}/>
			</div>
			);	
	}
	
}

export default App;