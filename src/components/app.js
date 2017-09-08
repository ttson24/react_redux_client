import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <hr/>
        <br/>
        {this.props.children}
      </div>
    );
  }
}
