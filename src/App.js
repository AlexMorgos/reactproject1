import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

export default App;
