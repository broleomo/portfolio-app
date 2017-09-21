import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Card} from 'reactstrap';

import FacebookLogo from '../facebook.png';
import InstagramLogo from '../Instagram.png';
import GithubLogo from '../github.png';
import EmailLogo from '../email.png'


export default class Contact extends Component {
  render(){
    return(
      <div className="connect-info">
      <h1> Connect with me!</h1>
      <h3> Reach out to me with any questions you have! I have a lot of knowledge and am a low-key genius.</h3>
      <div className="social-icons">
        <img src={EmailLogo} width="60px"/>
          <a href="https://gmail.com">Email me</a>
        <img src={FacebookLogo} width="60px"/>
          <a href="https://facebook.com">Facebook</a>
        <img src={InstagramLogo} width="60px"/>
          <a href="https://instagram.com/broleomo">Instagram</a>
        <img src={GithubLogo} width="75px"/>
          <a href="https://github.com/broleomo">GitHub</a>
        </div>
      </div>
    )
  }
}
