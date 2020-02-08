import React from 'react';
import './assets/styles.css';

import TicTacToe from './components/TicTacToe';
import { getWinner, renderBoard } from './utils';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: new Array(9).fill(new Array(9).fill(null)),
			// Reduced ttt x ttt (a.k.a. tot); in the form of a ttt
			reducedBoard: new Array(9).fill(null),
			xIsCurrent: true,
			mustPlaceIn: null,
			totWinner: null,
			gameStatus: "X's Turn",
		};
	}

	handleClick = (tttIndex, cellIndex) => {	
		// Do nothing if...
		if (
			this.state.totWinner || // entire game is won
			this.state.reducedBoard[tttIndex] || // tttIndex board is won
			this.state.game[tttIndex][cellIndex] || // something is placed already in the cell
			(this.state.mustPlaceIn !== null && this.state.mustPlaceIn !== tttIndex) // invalid move
		) return;
		
		const newGameState = this.state.game.map(ttt => [...ttt]);
		const newReducedBoardState = [...this.state.reducedBoard];
		const newCurrentPlayer = this.state.xIsCurrent ? 'O' : 'X';

		newGameState[tttIndex][cellIndex] = this.state.xIsCurrent ? 'X' : 'O';
		newReducedBoardState[tttIndex] = getWinner(newGameState[tttIndex])
		const newTotWinner = getWinner(newReducedBoardState);

		let gameStatus = `${newCurrentPlayer}'s Turn`;
		switch (newTotWinner) {
			case 'X':
			case 'O':
				gameStatus = `${newTotWinner} wins`;
				break;
			case 'D':
				gameStatus = "It's a draw!";
				break;
			default:
				break;
		}

		this.setState({
			game: newGameState,
			totWinner: newTotWinner,
			reducedBoard: newReducedBoardState,
			xIsCurrent: !this.state.xIsCurrent,
			mustPlaceIn: newReducedBoardState[cellIndex] ? null : cellIndex,
			gameStatus,
		});
	}

	renderTTT = tttIndex => (
		<TicTacToe
			key={tttIndex}
			id={tttIndex}
			onClick={this.handleClick}
			cells={this.state.game[tttIndex]}
			mustPlaceIn={this.state.mustPlaceIn}
			xIsCurrent={this.state.xIsCurrent}
			winner={this.state.reducedBoard[tttIndex]}
		/>
	);

	render() {
		return (
			<>
				{renderBoard(
					{ rows: 3, columns: 3 },
					{
						renderer: this.renderTTT,
						boardClassName: 'main-game',
						rowClassName: 'game-row',
					},
				)}
				<div className='center'>{this.state.gameStatus}</div>
			</>
		);
	}
}


