function binarySearch(array, target) {
  // time O(log(n)), space O(1)
	
	let left = 0;
	let right = array.length - 1;
	
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let potentialMatch = array[middle];
		
		if (target === potentialMatch) {
			return middle;
		} else if (target < potentialMatch) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	
	return -1;
}
