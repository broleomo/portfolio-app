import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap'

export default class SpashPage extends Component {

  render(){
    return(
      <div>
      <Jumbotron>
       <h1 className="display-3">Welcome to my portfolio site!</h1>
       <p className="lead">This is a place to learn about Brooklynn Leone Moor.</p>
       <hr className="my-2" />
       <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
       <p className="lead">
         <Button color="primary">Learn More</Button>
       </p>
     </Jumbotron>
      </div>
    )
  }
}
