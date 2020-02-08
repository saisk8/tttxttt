import React from 'react';
import TicTacToe from './TicTacToe';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: new Array(9).fill(new Array(9).fill(null)),
			xIsNext: true,
			mustPlaceIn: null,
			status: null,
		};
	}

	handleClick(i, j) {
		let totGame = this.state.game.map(x => calculateWinner(x));
		if (calculateWinner(totGame) || totGame[i] || this.state.game[i][j]) return;
		if (this.state.mustPlaceIn !== null && this.state.mustPlaceIn !== i) return;
		const game = this.state.game.map(x => x.slice());
		game[i][j] = this.state.xIsNext ? 'X' : 'O';
		totGame = game.map(x => calculateWinner(x));
		this.setState({
			game: game,
			xIsNext: !this.state.xIsNext,
			mustPlaceIn: totGame[j] ? null : j,
		});
		return;
	}

	renderGame(i) {
		return (
			<div className='mar'>
				<TicTacToe
					id={i}
					onClick={(i, j) => this.handleClick(i, j)}
					squares={this.state.game[i]}
					mustPlaceIn={this.state.mustPlaceIn}
					xIsNext={this.state.xIsNext}
					winner={this.state.game.map(x => calculateWinner(x))[i]}
				/>
			</div>
		);
	}

	render() {
		const rows = 3;
		const columns = 3;
		let status;
		const winner = calculateWinner(
			this.state.game.map(x => calculateWinner(x))
		);
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}
		return (
			<div>
				{[...new Array(rows)].map((x, rowIndex) => {
					return (
						<div className='game'>
							{[...new Array(columns)].map((y, colIndex) =>
								this.renderGame(rowIndex * columns + colIndex)
							)}
						</div>
					);
				})}
				<div>{status}</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default Game;
