function isPalindrome(string) {
	if (string.length === 1) return true;
	return string === string.split("").reverse().join("");
}