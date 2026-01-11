
// Dev Tools: Debugger, Other Tools etc.
// Overview

// Writing code can sometimes be unavoidably complex. Debugging skills are essential to understanding what’s going on, particularly when there are edge cases or unexpected results in only certain circumstances.

// Logging with the Console API is very effective, but has limitations. The debugger is an alternative tool for exploring your code during execution.
// Class Plan

//     Demo: Demonstration of the debugger, and how to use it
//     Workshop: Use the debugger to explore code and fix bugs

// Learning Objectives

//     What is the debugger?
//     How to use the debugger to explore code
//     How to use breakpoints to pause execution
//     How to use the debugger to step through code line by line
//     How to use the debugger to inspect variables and values
//     How to set conditional breakpoints to find bugs in loops

// Success Criteria

//     I can explain why we use debugger in code.
//     I can evaluate the data in the Sources tab once debugger is implemented.
//     I can set breakpoints in the Sources tab to find bugs in code, especially loops.

// Resources

//     MDN: Debugging JavaScript
//     MDN: Debugging
//     MDN: Console API

// WORKSHOP--------------------------------------
// Using the debugger

// ⛳️ Open up one of your projects, perhaps the most complex one, and insert the debugger; statement somewhere in your code where it might be interesting to pause execution.

// const myVariable = "yada yada yada";
// debugger;

// 👀 Open the dev tools in your browser and navigate to the “Sources” tab. You should see your code on the left hand side. Notice the line number where the debugger statement is.

// 💭 You can also use the debugger; statement in the console to pause execution at any point.
// Stepping through code

// ⛳️ Execute the code containing the debugger statement.

// 👀 Notice that the code execution pauses at the debugger; statement, and you’re able to inspect the current values of all of your variables at this point in the code. This can be extremely useful for understanding if data is in the wrong format, type, or missing entirely.

// ⛳️ Use the “Step over next function call” button to execute the next line of code. Notice that the debugger moves to the next line of code, and you can inspect the values of your variables again.

// 🎯 The debugger in chrome enables setting “conditional breakpoints”. That means you can set a breakpoint in the Sources tab that will only pause execution if a certain condition is met. Create a breakpoint that pauses execution on the 50th iteration through a loop.

for (let i = 0; i < 50; i++) {
    console.log(i);
    if (i === 25) {
        debugger;
    }
}