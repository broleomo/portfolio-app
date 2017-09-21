import React, {Component} from 'react';
import {Card, CardText} from 'reactstrap';

import Brooklynn from '../brooklynn.jpg';

export default class About extends Component {

  render(){
    return(
    <div className="page-container">
      <h1 className="headings"> About Me:</h1>
      <div className="profile-info">
      <img className="profile-photo" src={Brooklynn} width="25%" height="25%"/>
      <div className="profile-text">
      <Card className="card-about" block inverse style={{ backgroundColor: '#4D929E', borderColor: '#333'  }}>
        <CardText>
        <ul>
        <li>Name: Brooklynn Leone Moor</li>
        <li>Birthday: April 26, 1992</li>
        <li>Hobbies: Cats, Yoga, Web Development, Soccer, Friends, Family, Live Music
         </li>
        <li>Location: Indianapolis, IN</li>
        </ul>
        </CardText>
        </Card>
      </div>
      </div>
      </div>
    )
  }
}
