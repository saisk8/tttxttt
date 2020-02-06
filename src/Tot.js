import React from 'react';
import Game from './Game';

class Tot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: new Array(9).fill(null),
			xIsNext: true,
			nextMove: null,
			status: null,
		};
	}

	handleClick(i, squares) {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			board: squares,
			xIsNext: !this.state.xIsNext,
		});
		// Create new copies of data
		if (!this.state.nextMove || this.state.prevMove !== i) {
			this.setState({ status: 'Invalid move' });
			return;
		}

		const game = this.state.game.slice();

		// Update moves
		// Update state of the board
	}

	render() {
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div>
				<div className='game'>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
				</div>
				<div className='game'>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
				</div>
				<div className='game'>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
					<div className='mar'>
						<Game />
					</div>
				</div>
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
	for (const element of lines) {
		if (
			squares[element[0]] &&
			squares[element[0]] === squares[element[1]] &&
			squares[element[1]] === squares[element[2]]
		) {
			return squares[element[0]];
		}
	}

	return null;
}

export default Tot;
