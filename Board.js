import React from 'react';

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{ backgroundColor: props.value }}>
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < 20; i++) {
      let children = [];

      //Inner loop to create children
      for (let j = 0; j < 20; j++) {
        children.push(this.renderSquare(i * 20 + j));
      }

      //Create the parent and add the children
      table.push(<div className='board-row' key={i}>{children}</div>);
    }

    return table;
  };

  render() {
    return (
      <div>
        {this.createTable()}
      </div>
    );
  }
}

export default Board;
