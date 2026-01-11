// app.test.js
// import functions
import { findMaxValue, factorial, areArraysEqual, toTitleCase, isPalindrome } from "./app.js";

// findMaxValue([3, 7, 2, 8, 5]); // 8
// findMaxValue([]); // null
// findMaxValue([-10, -5, -1]); // -1
// findMaxValue("not an array"); // null

// factorial(5); // 120
// factorial(0); // 1
// factorial(-3); // null
// factorial("5"); // null

// areArraysEqual([1, 2, 3], [1, 2, 3]); // true
// areArraysEqual([1, 2, 3], [3, 2, 1]); // false
// areArraysEqual([], []); // true
// areArraysEqual([1, 2], [1, 2, 3]); // false

// toTitleCase("hello world"); // "Hello World"
// toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
// toTitleCase("123 testing titles"); // "123 Testing Titles"
// toTitleCase(12345); // ""

import { test } from "vitest"; // standard imports required
import { expect } from "vitest"; // standard imports required

test("sum1", function () { // sum is just a reference / name for test
    const result = findMaxValue([3, 7, 2, 8, 5]); // call function // result = 8
    const expected = 8;
    expect(result).toBe(expected);
});

test("sum2", function () { // sum 2
    const result = factorial(5); // call function // result = 120
    const expected = 120;
    expect(result).toBe(expected);
});

test("sum3", function () { // sum 3
    const result = toTitleCase("hello world"); // call function // result "Hello World"
    const expected = "Hello World";
    expect(result).toBe(expected);
});

test("sum4", function () { // sum 4
    const result = areArraysEqual([1, 2, 3], [3, 2, 1]);
    const expected = false;
    expect(result).toBe(expected);
});

test("palindrome", function () { // test pallindrome function
    const result = isPalindrome("madam"); // call function // result 'true'
    const expected = true;
    expect(result).toBe(expected);
});