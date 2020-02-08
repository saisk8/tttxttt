import React from 'react';
import classNames from 'classnames';
import { renderBoard } from '../utils';

function Cell({ className, onClick, value }) {
	return (
		<button className={className} onClick={onClick}>
			{value}
		</button>
	);
}

export default class TicTacToe extends React.Component {
	renderCell = cellIdx => {
		const cellClasses = classNames('cell', {
			x:
				this.props.winner === 'X' ||
				(!this.props.winner && this.props.cells[cellIdx] === 'X'),
			o:
				this.props.winner === 'O' ||
				(!this.props.winner && this.props.cells[cellIdx] === 'O'),
			d: this.props.winner === 'D',
			highlight:
				(this.props.mustPlaceIn === null && !this.props.cells[cellIdx]) ||
				(this.props.mustPlaceIn === this.props.id && !this.props.cells[cellIdx]),
		});
		return (
			<Cell
				key={cellIdx}
				className={cellClasses}
				value={this.props.cells[cellIdx]}
				onClick={() => this.props.onClick(this.props.id, cellIdx)}
			/>
		);
	}

	render() {
		return (
			<div className='mar'>
				{renderBoard(
					{ rows: 3, columns: 3 },
					{
						renderer: this.renderCell,
						boardClassName: 'game-board',
						rowClassName: 'board-row',
					},
				)}
			</div>
		);
	}
}
