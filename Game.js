import React from 'react';
import Board from './Components/Board.js';
import './App.css';
import firestore from './firebase.js';
import 'firebase/database';

function getColors() {
  return (['black', 'white', 'red', 'blue', 'green']);
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(400).fill(null),
      colorSelected: 0,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    const color = this.state.colorSelected;
    squares[i] = getColors()[color];

    firestore.collection('pixels').doc('' + i).set({
      color: color,
    });

    this.setState({
      squares: squares,
    });
  }

  createColors = () => {
    const items = [];
    for (const [index, value] of getColors().entries()) {
      if (index === this.state.colorSelected) {
        items.push(
          <button
            key={index}
            className="color"
            style={{ backgroundColor: value, border: '5px solid green' }}>
          </button>
        );
      } else {
        items.push(<button
          key={index}
          className="color"
          style={{ backgroundColor: value }}
          onClick={() => this.setState({ colorSelected: index })}>
        </button>);
      }
    }

    return items;
  };

  componentDidMount() {
    const squares = this.state.squares.slice();
    firestore.collection('pixels')
    .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            squares[parseInt(doc.id)] = getColors()[doc.data().color];
          });

        this.setState({
          squares: squares,
        });
      }.bind(this));
  }

  render() {
    return (
      <div className="game">
          <div className="game-info">
            <div>Select a color:</div>
              <div className="colors">
                {this.createColors()}
              </div>
          </div>
          <div className="game-board">
            <Board
              squares = {this.state.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
        </div>
    );
  }
}

export default Game;
