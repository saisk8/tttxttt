import React from 'react';
import Game from './Game';

class Tot extends React.Component {
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
		const totGame = this.state.game.map(x => calculateWinner(x));
		if (calculateWinner(totGame) || this.state.game[i][j]) return;
		if (this.state.mustPlaceIn !== null && this.state.mustPlaceIn !== i) return;
		const game = this.state.game.map(x => x.slice());
		game[i][j] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			game: game,
			xIsNext: !this.state.xIsNext,
			mustPlaceIn: totGame[j] ? null : j,
		});
		return;
	}

	render() {
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
				<div className='game'>
					<div className='mar'>
						<Game
							id={0}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[0]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={1}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[1]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={2}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[2]}
						/>
					</div>
				</div>
				<div className='game'>
					<div className='mar'>
						<Game
							id={3}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[3]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={4}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[4]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={5}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[5]}
						/>
					</div>
				</div>
				<div className='game'>
					<div className='mar'>
						<Game
							id={6}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[6]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={7}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[7]}
						/>
					</div>
					<div className='mar'>
						<Game
							id={8}
							onClick={(i, j) => this.handleClick(i, j)}
							squares={this.state.game[8]}
						/>
					</div>
				</div>
				<div className='game-info'>{status}</div>
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

export default Tot;
