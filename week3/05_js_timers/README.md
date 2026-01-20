
Timers
Overview

Sometimes you might want to run code after a certain period of time or at regular intervals. JavaScript has a couple of simple ways to do this.

The first is setTimeout which runs a function after a specified number of milliseconds, and the second is setInterval which runs the same code repeatedly until stopped every x number of milliseconds.
Class Plan

    Demo: Show setTimeout and setInterval
    Workshop: Use setTimeout and setInterval to run code after a delay and repeatedly

Learning Objectives

    What is setTimeout?
    What is setInterval?
    How to use setTimeout to run code after a delay
    How to use setInterval to run code repeatedly
    How to stop a setInterval timer

Success Criteria

    I can give examples of when to use different types of timers.
    I can implement a countdown-style timer with setTimeout.
    I can implement a regular-interval timer with setInterval.

Prior Knowledge

    JavaScript functions, variables, conditionals and scope

Resources

    MDN: setTimeout
    MDN: setInterval

Workshop

Straight to the challenges!

You’ll have to combine a bunch of your previous JS knowledge as well as your new skills from this session to complete these ones.
🎯 Mini Challenge: Using setTimeout

🐿️ As a user, when I click a button, a message should display for 5 seconds to confirm the action occurred, before disappearing again.

    Create an event handler that makes visible a message that is hidden by default
    Use setTimeout to hide the message after 5 seconds

🎯 Mini Challenge: Using setInterval

🐿️ As a user, I want to click a button to start a timer, like a stopwatch. Pressing the button again to stop the timer.

    Create an event handler that starts a timer when a button is clicked
    Use setInterval to update the timer every second
    Use clearInterval to stop the timer when the button is clicked again

💭 Help

To stop the interval, you need a reference to the interval. Does the interval function have a return value we can use in combination with the clearInterval function.
