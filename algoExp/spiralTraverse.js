function spiralTraverse(array) {
	let output = [],
			startRow = 0,
			endRow = array.length - 1,
			startCol = 0,
			endCol = array[0].length - 1;
	
	while (startRow <= endRow && startCol <= endCol) {
		// top
		for (let col = startCol; col <= endCol; col++) {
			output.push(array[startRow][col]);
		}
		//right
		for (let row = startRow + 1; row <= endRow; row++) {
			output.push(array[row][endCol]);
		}
		//bottom
		for (let col = endCol - 1; col >= startCol; col--) {
			if (startRow === endRow) break;
			output.push(array[endRow][col])
		}
		//left
		for (let row = endRow - 1; row > startRow; row--) {
			if (startCol === endCol) break;
			output.push(array[row][startCol])
		}
		
		startRow++;
		startCol++;
		endRow--;
		endCol--;
	}
	
	return output;
}