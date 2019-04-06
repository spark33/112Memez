import React, { Component } from 'react';
// import '../scss/App.scss';

import TopNav from './TopNav.js';

class Home extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	image: '',
        };
        this.endpoint = "https://httpbin.org/anything";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit(event) {
		alert('An image was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div id="MemeForm">
				<TopNav />
				<main>
					<h1>GIMME DAT MEME</h1>
					<form 
						method="POST" 
						action={ this.endpoint }
					>
						<img src={ this.state.image } />
						<label>IMAGE URL</label>
						<input type='text' onChange={ this.handleChange } name='image' value={ this.state.image } placeholder="GIMME DAT"/>
						<input type='submit' />
					</form>
				</main>
			</div>
		);
	}
}

export default Home;