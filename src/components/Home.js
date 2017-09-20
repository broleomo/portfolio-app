import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Home extends Component {
  render(){
    return(
      <div className="page-container">
      <h1 className="headings"> Welcome to my Portfolio Site! </h1>
      <p> This is a place where you can find out about me, Brooklynn Leone Moor. To find out more, view my Portfolio!</p>
      <Button color="danger"><Link to="/about">Learn More</Link> </Button>
      <br/>
      </div>

    )
  }
}
