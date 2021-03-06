// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.

// [output] integer

function commonCharacterCount(s1, s2) {
    let count = 0;
    let firstStrChars = s1.split("");
    
    while (firstStrChars.length) {
        let currentChar = firstStrChars.pop();
        
        if (s2.includes(currentChar)) {
            count++;
            s2 = s2.replace(currentChar, "?");
        }
    }
    
    return count;
}