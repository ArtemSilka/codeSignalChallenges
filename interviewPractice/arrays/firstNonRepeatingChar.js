// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string that contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

function firstNotRepeatingCharacter(s) {
    let indices = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!indices[s[i]]) {
            indices[s[i]] = [i];
        } else {
            indices[s[i]].push(i);
        }
    }
    
    let nonRepeating = Object.entries(indices).filter(pair => pair[1].length === 1)
    
    if (nonRepeating.length > 0) {
        return nonRepeating[0][0];
    } else {
        return '_';
    }
}