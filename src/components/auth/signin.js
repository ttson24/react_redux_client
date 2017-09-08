'use strict'
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{

  handleFormSubmit({ email, password}){
    var params = { email: email, password: password };
    this.props.signinUser(params);
  }
  showMessage(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: {email, password}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
          <input {...email}
                 type="email"
                 className="form-control"
                 placehoder="Enter email here"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <input {...password}
                 type="password"
                 className="form-control"
                 placehoder="Enter password here"/>
        </fieldset>
        {this.showMessage()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}
function mapStateToProps(state){
    return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
