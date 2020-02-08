import React from 'react';
import './index.css';

function Square(props) {
	return (
		<button className='square' onClick={props.onClick}>
			{props.value}
		</button>
	);
}
class TicTacToe extends React.Component {
	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(this.props.id, i)}
			/>
		);
	}

	render() {
		const rows = 3;
		const columns = 3;
		return (
			<div className='game-board'>
				{[...new Array(rows)].map((x, rowIndex) => {
					return (
						<div className='board-row'>
							{[...new Array(columns)].map((y, colIndex) =>
								this.renderSquare(rowIndex * columns + colIndex)
							)}
						</div>
					);
				})}
			</div>
		);
	}
}

export default TicTacToe;
