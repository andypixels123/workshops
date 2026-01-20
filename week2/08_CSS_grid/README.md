
CSS Grid
Overview

CSS Grid is a layout system for CSS that gives us a lot of control over the layout and arrangements of pages, and makes it easier to make complex layouts on different screen sizes and shapes.

It is a useful skill to be able to analyse a design or wireframe, dividing it up into a logical structure according to the relationships between elements. This is a skill that can be applied to many different kinds of systems.
Class Plan

    Demo: Demonstration of grid in action
    Workshop: Build a CSS Grid layout: The “holy grail layout”

Learning Objectives

    What is CSS Grid?
    How to use CSS Grid to build complex layouts

Success Criteria

    I can explain in my own words what CSS grid is.
    I can give examples of when to use a grid to style an app.
    I can implement a basic grid layout into my app.

Resources

    CSS Tricks: A Complete Guide to Grid
    Josh Comeau: Interactive Guide to Grid
    CSS Tricks: The Holy Grail Layout
    CSS Grid Garden
    Grid Critters
    MDN: CSS Grid
    MDN: CSS Grid Reference

Workshop
Playing with CSS Grid

⛳️ In a new index.html file, add a div with a class of container. Inside the container, add 3 divs with a class of box. Open the file in your browser and check the output.

<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>

⛳️ Add the display: grid; property to the container. This instantiates your grid.

.container {
  display: grid;
}

.box {
  background-color: red;
}

⛳️ We can set the columns explicitly in our grid by using the grid-template-columns property. You can specify any number of “fractions” of the page to divide it into. Experiment and see what happens with different values.

.container {
  /* ... */
  grid-template-columns: 1fr 1fr 1fr;
}

⛳️ You can use grid-gap to create a gap between the columns and rows in a grid.

.container {
  grid-gap: 10px;
}

⛳️ Add two rows to your grid by adding three more boxes and using the grid-template-rows property:

<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
  <div class="box">Box 4</div>
  <div class="box">Box 5</div>
  <div class="box">Box 6</div>
</div>

.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.container {
  /* ... */
  grid-auto-rows: 100px;
  grid-auto-flow: column;
}

🎯 Build a grid of kittens using CSS grid. You can gather your own cat pics or use placekitten.com, it’s up to you. Consider setting up some of the grid to be less uniform!
🎯 Mini Challenge: The Holy Grail Layout

Implement the “holy grail” layout using CSS grid.

    Create the layout using semantic HTML elements.
    The <article> should have content inside of it, like a true web page.

💭 Help

    To make a header or footer span columns in a grid, grid-column-start and grid-column-end are useful! 1 is the first column, and -1 is the last column.

    Here is a wireframe to work from:

the 'holy grail layout' to create with css grid
💭 Rules

    Write all of your own code; do not copy it from elsewhere.
    You can look up how to achieve certain goals with grid either from our lesson, demo code or online (but again, write all of your code yourself!)

🏹 Stretch Goal

Implement a new grid of images somewhere within the holy grail grid you’ve just created!
