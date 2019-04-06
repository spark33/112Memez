import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../scss/TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <nav>
        <Link to={`/`} className="logo">
        	get meme
        </Link>
        <Link to={`/submit`}>
          give meme
        </Link>

      </nav>
    );
  }
}

export default TopNav;
