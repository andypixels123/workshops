
function isPalindrome(strToTest) { // check for pallindrome

  let word = strToTest.replace(/\s+/g, '').toLowerCase(); // remove whitespace
  // console.log("original word is " + word);
  let L = word.length; // string length
  // console.log("original word length is " + L);
  const iterations = Math.floor(L / 2);
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

const isPal = "zsm   a    damsz";// test word
const result = isPalindrome(isPal);
// console.log(result);// true or false