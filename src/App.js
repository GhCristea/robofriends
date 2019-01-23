import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends Component {

	constructor(){
		super()

		this.state = {
		robots : [],
		searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
			const filterRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() )
		})
		
		return (
			<div className = 'tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange = {this.onSearchChange} />
			<CardList robots={filterRobots}/>
			</div>
			);	
	}
	
}

export default App;