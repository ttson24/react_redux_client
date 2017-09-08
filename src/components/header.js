'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component{
  renderLink(){
    if(this.props.authenticated){
      return [
                <li className="nav-item" key={1}>
                  <Link className="nav-link" to="/signout">Sign Out</Link> </li>,
              ];
    }else{
      return[
          <li className="nav-item top-menu" key={1}>
            <Link to="signin">Sign In</Link> </li>,
          <li className="nav-item top-menu" key={2}>
            <Link to="signup">Sign Up</Link> </li>
          ];
    }
  }
  render(){
    return(
      <nav className="navbar-navbar-light">
        <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Client package</Link></li>
          {this.renderLink()}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header);
