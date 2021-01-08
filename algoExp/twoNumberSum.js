function twoNumberSum(array, targetSum) {
	// time O(n) , space O(n) 
	let nums = {};
	
	for (let num of array) {
		let potentialMatch = targetSum - num;
		if (potentialMatch in nums) {
			return [potentialMatch, num]
		} else {
			nums[num] = true;
		}
	}
	
	return [];
}