import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
    let navTitle = {
    "fontSize": "180%"
    }
    return(
      <div className="container-fluid nav">
      <h1 className="static-heading">Brooklynns Portfolio Site</h1>
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="navbar-nav">
                <li style={navTitle}>

                  <Link to="/">Splash Page</Link>
                </li>
                <li style={navTitle}>
                  <Link to="/home">Home</Link>
                </li>
                <li style={navTitle}>
                  <Link to="/about">About</Link>
                </li>
                <li style={navTitle}>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
          </div>
        </div>

      </nav>
        {this.props.children}
    </div>
    )
  }

}
