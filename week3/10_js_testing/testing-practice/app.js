//app.js
// 1. Find the maximum value in an array
export function findMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

// 2. Calculate the factorial of a number
export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 3. Check if two arrays are equal
export function areArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

// 4. Convert a string to title case
export function toTitleCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function isPalindrome(strToTest) { // check for pallindrome

  let word = strToTest.replace(/\s+/g, '').toLowerCase(); // remove whitespace
  // console.log("original word is " + word);
  let L = word.length; // string length
  // console.log("original word length is " + L);
  const iterations = Math.floor(L/2);
  // console.log("iterations = " + iterations);
  let firstLetter;
  let lastLetter;

  for (let i = 0; i < iterations; i++) {
    firstLetter = word.slice(0, 1); // first letter
    lastLetter = word.slice(L - 1, L); // last letter
    // console.log("first letter is " + firstLetter);
    // console.log("last letter is " + lastLetter);

    if (firstLetter === lastLetter) {
      word = word.slice(1, -1); // remove first and last characters
      // console.log("shorter word is " + word);
      // console.log("word length is " + word.length);
      L = word.length;
      // console.log("new L is " + L);
      if (L < 2) { // 0 or 1 characters remaining
        return true;
      }

    } else {
      return false;
    }
  }
}