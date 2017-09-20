import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SpashPage extends Component {

  render(){
    return(
      <div className="page-container">
      <h1 className="headings"> This is the splash page</h1>
      <Link to="/about">Learn More</Link>
      </div>
    )
  }
}
