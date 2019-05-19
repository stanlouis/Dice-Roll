import React, { Component } from 'react';
import Die from './components/Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);

    this.state = {
      die1: 'one',
      die2: 'one',
    };
  }
  roll = () => {
    // pick 2 new rolls
    const { sides } = this.props;
    const die1 = sides[Math.floor(Math.random() * this.props.sides.length)];
    const die2 = sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      die1,
      die2,
    });
  };

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} /> <br />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
