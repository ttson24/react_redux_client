'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return (
      <div>
        <h2>This is feature page</h2>
        {this.props.message}
      </div>
    );
  }
}
function mapStateToProps(state){
  return { message: state.auth.message };
}
export default connect(mapStateToProps, actions)(Feature);
