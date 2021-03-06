function bubbleSort(array) {
	// Space O(1)
	// Time - best O(n) - if array already sorted
	// Time - avg/worse O(n^2)
  let sorted = false;
	let counter = 0;
	
	while (!sorted) {
		sorted = true;
		
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i + 1]) {
				swap(i, i + 1, array);

				sorted = false;
			}
		}
		counter++;
	}
	return array; 
}

function swap(i, j, array) {
	array[i] = array[i] ^ array[j];
	array[j] = array[j] ^ array[i];
	array[i] = array[i] ^ array[j];
}