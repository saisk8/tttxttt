import React from 'react';
import Board from './Board';

class Game extends React.Component {
	render() {
		return (
			<div className='game-board'>
				<Board
					squares={this.props.squares}
					onClick={i => this.props.onClick(this.props.id, i)}
				/>
			</div>
		);
	}
}

export default Game;
