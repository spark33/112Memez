import React, { Component } from 'react';
import { Redirect } from 'react-router'
// import '../scss/App.scss';

import TopNav from './TopNav.js';
import Meme from './Meme.js';

class Home extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	image: '',
        	fireRedirect: false
        };
        this.endpoint = "https://meme112.herokuapp.com/give_meme_pls";
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitForm(e) {
		e.preventDefault()
		const data = new FormData(e.target);
		fetch(this.endpoint, {
			method: 'POST',
			headers: {
	            "Content-Type": "application/json",
	        },
			body: JSON.stringify({ image: this.state.image })
		}).then(res => this.setState({ fireRedirect: true }));
	}

	render() {

		const { from } = this.props.location.state || '/'
    	const { fireRedirect } = this.state

		return (
			<div id="MemeForm">
				<TopNav />
				<main>
					<h1>GIMME DAT MEME</h1>
					<form 
						method="POST" 
						action={ this.endpoint }
						onSubmit={this.submitForm}
					>
						<Meme image={ this.state.image } />
						<label>IMAGE URL</label>
						<input type='text' onChange={ this.handleChange } name='image' value={ this.state.image } placeholder="GIMME DAT"/>
						<input type='submit' />
					</form>
				</main>

				{ fireRedirect && (
		          <Redirect to={from || '/'}/>
		        ) }
			</div>
		);
	}
}

export default Home;