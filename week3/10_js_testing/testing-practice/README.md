
Pure Function Unit Testing with Vitest
Overview

Testing is a key part of professional software development. Like accessibility practices, proper automated testing is often one of the first casualties of a hurried development team. This can sometimes help avoid delays up front, but can often lead to bigger problems later as code is modified and changed over time, without the ability to confirm a known feature set is still working as expected.

Manual testing practices are important, but as an application grows it can become very time consuming to manually check every piece of functionality still works after changing the code. By establishing a proven baseline of functionality that we can confirm by running automatic tests, we can be more confident our code changes in one place haven’t unexpectedly broken something else.

There are a few types of testing:

    “Unit testing” is the practice of testing small pieces of code in isolation, like a single function. You check if the function correctly identifies if a word is a palindrome or not.
    “Integration testing” is the practice of testing how different pieces of code work together, like checking an email address is valid before to saving it to your database. You check to make sure invalid emails are not saved to the database.
    “End to end testing” is the practice of testing the whole application like a user would use it. You check a user can fill in their email, and that it takes them to their logged in dashboard.

In this class we’ll look at “unit testing” of “pure functions”. If a function takes some arguments and returns something different, without affecting anything outside of itself, it’s a pure function. This is one of the reasons global variables are often best avoided - testing the function in isolation becomes difficult if the function depends on global values that are defined elsewhere in the code.
Class Plan

    Demo: Demonstration of unit testing with Vitest, and examples of writing tests for confirming functions are correct (run the tests with npm test or npx vitest)
    Workshop: Make the failing test suite pass

Learning Objectives

    What is unit testing?
    What is a pure function?
    How to make a failing test pass
    How to write unit tests
    How to run a unit test suite

Success Criteria

    I can give a definition of unit testing and how it fits into the tech industry.
    I can set up unit tests to test pure functions.
    I can run unit tests.
    I can evaluate the result of the test to then debug my functions.

Resources

    Testing Functions
    10 Guidelines for Naming Your Tests

Workshop
Setting up the project

We’re going to start by creating a new NPM project and installing vitest.

⛳️ Run the following commands:

mkdir testing-practice
cd testing-practice
npm init -y
npm i vitest

💭 You’ll need to add "type": "module" under the title in your package.json so we can use import and export syntax.

⛳️ Create 2 files, app.js and app.test.js and copy the following into the the repsective files:

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

// app.test.js
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

⛳️ In app.test.js write tests for each of the functions. Below are some example executions for you to reference, with expected outputs:

findMaxValue([3, 7, 2, 8, 5]); // 8
findMaxValue([]); // null
findMaxValue([-10, -5, -1]); // -1
findMaxValue("not an array"); // null

factorial(5); // 120
factorial(0); // 1
factorial(-3); // null
factorial("5"); // null

areArraysEqual([1, 2, 3], [1, 2, 3]); // true
areArraysEqual([1, 2, 3], [3, 2, 1]); // false
areArraysEqual([], []); // true
areArraysEqual([1, 2], [1, 2, 3]); // false

toTitleCase("hello world"); // "Hello World"
toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
toTitleCase("123 testing titles"); // "123 Testing Titles"
toTitleCase(12345); // ""

⛳️ Run the tests usings npx vitest. This will keep refreshing every time you update a .js file, so keep writing your tests and they will keep appearing in the terminal.

🏹 Now a challenge. Create a new file called palindrome.test.js and copy the code below. You are going to write the isPalindrome function so that it passes these tests:

import { test, expect, describe } from "vitest";

function isPalindrome(string) {
  // return true or false, depending on whether the supplied string parameter is a palindrome
}

describe("adding numbers together", function () {
  test("1 plus 2", function () {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = isPalindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = isPalindrome("nurses run");
    expect(result).toBe(true);
  });
});

describe("Words that are NOT palindromic", function () {
  test("Tim is great", function () {
    const result = isPalindrome("Tim is great");
    expect(result).toBe(false);
  });
  test("Weeeeeee", function () {
    const result = isPalindrome("Weeeeeee");
    expect(result).toBe(false);
  });
});

