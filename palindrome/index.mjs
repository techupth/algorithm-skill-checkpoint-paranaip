// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  let word = str.replace(/[^a-z0-9]/g, "");
  let letters = word.split("");
  let reversedLetters = letters.reverse();
  let reversedWord = reversedLetters.join("");
  return reversedWord === word;
};

let result1 = palindrome("abba"); //true;
console.log(result1);
let result2 = palindrome("abcdefg"); //false;
console.log(result2);
