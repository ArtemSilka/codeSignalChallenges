function caesarCipherEncryptor(string, key) {
// 	time O(n), space O(n);
	let encrypted = [];
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	
	for (let i = 0; i < string.length; i++) {
		encrypted.push(newLetter(string[i], key, alphabet))
	}
	
	return encrypted.join("");
}

function newLetter(letter, key, alphabet) {
	let newIndex = alphabet.indexOf(letter) + key;
	
	return alphabet[newIndex % 26];
}