import React, { Component } from 'react';
import './css/App.css';

import TopNav from './TopNav.js';
// import MemeGrid from './MemeGrid.js';
import Meme from './Meme.js';

class Home extends Component {

	constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
        this.endpoint = "https://httpbin.org/anything";
    }

    componentDidMount() {
    fetch(this.endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            image: result.data.img_file
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

	render() {
		return (
		<div id="Home">
			<TopNav />
      <main>
        <Meme image={ this.state.image }/>
      </main>
		</div>);
	}
}

export default Home;