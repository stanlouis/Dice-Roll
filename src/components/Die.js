import React, { Component } from 'react';
import './Die.css';
export default class Die extends Component {
  render() {
    const { face, rolling } = this.props;
    return <i className={`Die fas fa-dice-${face} ${rolling && 'shaking'}`} />;
  }
}
