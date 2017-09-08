'use strict'

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{
  handleFormSubmit(formProps){
    var params = {email: formProps.email, password: formProps.password};
    this.props.signupUser(params);
  }
  showMessage(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">{this.props.errorMessage}</div>
      )
    }
  }
  render(){
    const {handleSubmit, fields: {email, password, passwordConfirm }} = this.props;
    return(
      <div>
        <h2>Sign up page</h2>
        {this.showMessage()}
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label htmlFor="">Email: </label>
              <input type="text"
                     placeholder="Email enter here"
                     className="form-control"
                     {...email}/>
            {email.touched &&
              email.error &&
            <div className="error">{email.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="">Password: </label>
              <input type="password"
                     placeholder="Password enter here"
                     className="form-control"
                     {...password}/>
                     {password.touched &&
                       password.error &&
                       <div className="error">{password.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="">Password confirm: </label>
              <input type="password"
                     placeholder="Password confirm enter here"
                     className="form-control"
                     {...passwordConfirm}/>
              {passwordConfirm.touched &&
              passwordConfirm.error &&
            <div className="error">{passwordConfirm.error}</div>}
            </fieldset>
            <button action="submit"
                    type="submit"
                    className="btn btn-primary btn-margin-right"
                    >Sign up</button>
            <button type="reset" className="btn btn-default">Cancel</button>
        </form>
      </div>
    );
  }
}
function validate(formProps){
  const errors = {};

  if(!formProps.email){
    errors.email = 'Please enter an email';
  }
  if(!formProps.password){
    errors.password = 'Please enter a password';
  }
if(!formProps.passwordConfirm){
  errors.passwordConfirm = 'Please enter password confirm';
}
  if(formProps.password !== formProps.passwordConfirm){
    errors.password = 'Password must match';
  }
  return errors;
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error}
}
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
}, mapStateToProps, actions)(Signup);
