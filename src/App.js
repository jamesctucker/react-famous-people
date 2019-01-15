import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Famous from './components/FamousPeople.js';
import Input from './components/Input.js';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
        <Famous />
        <Input />
			</div>
		);
	}
}


export default App;
