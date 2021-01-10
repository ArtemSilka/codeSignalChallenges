function globMatching(fileName, pattern) {
  // Write your code here.
	let dif = fileName.length - pattern.length;
	pattern = pattern.split("*").join("*".repeat(dif + 1));
	
	for (let i = 0; i < fileName.length; i++) {
		if (fileName[i] !== pattern[i] && pattern[i] !== "*") {
			return false;
		}
	}
	
	return true;
}