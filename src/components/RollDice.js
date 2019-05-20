import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  state = {
    die1: 'one',
    die2: 'one',
    rolling: false,
  };

  roll = () => {
    // pick 2 new rolls
    const { sides } = this.props;
    const die1 = sides[Math.floor(Math.random() * sides.length)];
    const die2 = sides[Math.floor(Math.random() * sides.length)];
    // set state with new rolls
    this.setState({
      die1,
      die2,
      rolling: true,
    });

    // set rolling to false after a second
    setTimeout(
      () =>
        this.setState({
          rolling: false,
        }),
      1000
    );
  };

  render() {
    const { rolling, die1, die2 } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button onClick={this.roll} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
