import React, { Component } from 'react';
import './css/App.css';

import TopNav from './TopNav.js';
// import MemeGrid from './MemeGrid.js';
// import Meme from './Meme.js';

class Meme extends Component {

	render() {
		if(this.props.image === "") {
      return <h3>yo wtf there's no meme</h3>;
    } else {
      return <img className="meme" src={ this.props.image } />
    }
	}
}

export default Meme;