import React from 'react';

export const getWinner = cells => {
	const winPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (const winPattern of winPatterns) {
		const [a, b, c] = winPattern;
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return cells[a];
		}
	}
	const allCellsNotFilled = cells.some(cell => !cell);
	return allCellsNotFilled ? null : 'D';
};

export const renderBoard = (
	{ rows, columns },
	{ renderer, boardClassName, rowClassName }
) => {
	const fillTTTsInGameRow = (rowIdx, columns) => {
		const gameRow = [];
		for (let colIdx = 0; colIdx < columns; colIdx++) {
			const tttIndex = rowIdx * columns + colIdx;
			gameRow.push(renderer(tttIndex));
		}
		return gameRow;
	};

	const gameRows = [];
	for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
		gameRows.push(fillTTTsInGameRow(rowIdx, columns));
	}
	return gameRows.flat();
};
