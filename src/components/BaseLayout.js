import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/App.css"
// import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav,NavItem,NavLink,} from 'reactstrap';

export default class BaseLayout extends Component {
  render(){
    let titleStyle = {
    "fontFamily": "Arizonia",
    "fontSize": "18rem",
    }
    let subtitleStyle = {
    "fontFamily": "Raleway",
    "fontSize": "10rem"
    }
    let headerStyle = {
    "textAlign": "center",
    "height": "600px",
    "color": "#fff",
    }
    return(
      <div className="container-fluid nav">
      <h1 className="static-heading">Brooklynns Portfolio Site</h1>
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
                <nav className="navbar-nav">
                  <NavLink activeClassName="selected" className="nav-link" exact to="/">Splash Page</NavLink>
                  <NavLink activeClassName="selected" className="nav-link" to="/home">Home</NavLink>
                  <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
                  <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
                  <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact Me</NavLink>
                  <NavLink activeClassName="selected" className="nav-link" to="/references">References</NavLink>
              </nav>
          </div>
        </div>

      </nav>
        {this.props.children}
    </div>
    )
  }

}
