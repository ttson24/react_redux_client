'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component{
componentWillMount(){
  this.props.signoutUser();
}
  render(){
    return(
      <div>
        <h2>See you later</h2>
      </div>
    );
  }
}
export default connect(null, actions)(Signout);
