
Responsive Design
Overview

Websites are visited using devices of all shapes and sizes. From a full desktop PC to an Apple watch, phones, folding phones, tablets and more. It’s important our websites work as well as possible on as many devices as possible.

We achieve this by working with the browser and making use of its built in behaviour, as well as some CSS tools which are available to us.

At the end of this session we’ll also look at how media queries can be used to make specific changes dependent on a devices settings.
Guidelines for Responsive Design

    Build your website from a “Mobile first” perspective. It’s easier to build this way and then “add” rules on top as needed for larger screen sizes.
    Let the browser do the heavy lifting; thanks to its default behaviour, without any CSS your web page will be “mostly responsive”.
    Avoid fixed sizes/units most of the time for your layouts.
    Don’t declare things you don’t need.
    Media queries are for targeting very specific behaviour/things which need to switch.

Class Plan

    Demo: Demonstration of responsive design, CSS rules and media queries, as well as real world examples of usage in responsive websites (try Smashing Magazine for their use of grid and media)
    Discussion of wireframes: Mobile-first principle - “it is easier to add additional rules for a bigger screen, than to remove a lot of layout rules for a smaller one.”
        💭 if block elements appear on top of each other by default, what rules might be required to display them side by side?
    Workshop: Make your own responsive website with media queries, explore mobile-first design: Example Wireframe

Learning Objectives

    What is responsive design?
    What is a media query?
    How to use media queries to change the layout of the page on larger screens.

Success Criteria

    I can explain in my own words what responsive design is.
    I can explain some ways to ensure responsive design.
    I can explain in my own words what media queries are.
    I can implement CSS for my app to respond to multiple screen sizes using a template.
    I can implement a media query with one breakpoint for my app to respond to two screen sizes (desktop and mobile).

Resources
Responsive Design

    Responsive Images
    A practical guide to responsive web design - Kevin Powell
    The repeat() function
    Breakpoint-Free CSS Grid Layouts - Kevin Powell

Media Queries

    MDN: Media Queries
    CSS Tricks: Common Device Media Queries
    New CSS Syntax for Range Media Queries

Container Queries

    Container Queries Unleashed - Josh Comeau
    CSS Container Queries - CSS Tricks
    “Smart” design patterns with container queries - Kevin Powell
    CSS Container Queries - MDN Docs

Workshop

👀 Take a look at the simple layout wireframe supplied. We’re going to be recreating that in our workshop!
Setting up the layout

⛳️ In a new project, add a header to your page containing an h1 with some text, just like the wireframe.

<header>
  <h1>Responsive Developer</h1>
</header>

👀 Remember to have the ‘responsive view’ selected from the ‘Inspector tools’ in your browser!

⛳️ The wireframe also shows some text underneath the header. Let’s add it now and try to get it centered!

<h2 class="intro-text">Welcome to my website</h2>

🎯 Can you remember how we used max-width and margin-inline on an element to responsively centre it? Try adding those properties to the .intro-text class.
💭 Try it first, then see how to do it here!

It’s time to get those boxes of content from the Wireframe onto our page!

⛳️ Add a new div with the class container.

<div class="container"></div>

⛳️ Select the element in your CSS and apply some basic styles to it.

.container {
  background: #eee;
}

🎯 Within the .container, add three section elements one after the other with a matching class of box. Add some content or an image to each one.

Let’s make it so we can see our individual boxes.

⛳️ Add some border styling to your .box class

.box {
  border: 2px solid goldenrod;
  border-radius: 1rem;
}

⛳️ Depending on how much content you have given your boxs, they might benefit from a min-height and min-width applied just to be a bit more boxy.
💭 Extra `.box` CSS, if needed

🎯 If you have used images as your content, apply some properties to the images as apppropriate so that they fit in their container. Maybe you’ll want to use the following:

img {
  display: block;
  max-width: 100%;
}

👀 Notice that the boxs stack one on top of the other within the section - this is because the browser uses the ‘flow layout’ by default. This makes sections, divs and many other HTML elements display: block by default. This is ideal for our narrow screen layout but not our desktop!
Making the boxes responsive

At the moment, the boxes simply get wider as the screen gets wider.

👀 Take another look at the simple layout wireframe supplied. To achieve the wide screen layout, we’ll need to add some CSS rules to our container. Flexbox might be the tool for this.

⛳️ Add display: flex to your .container. What happens to the boxs? Did they shoot off of the page? Let’s fix it!

⛳️ Add flex-wrap: wrap to your .container and watch as your boxs dynamically take up the space available to them! You’ll have to give your boxes a width or max-width property otherwise they’ll take up the full width of the page and won’t be able to wrap!

This should now have made your page match pretty closely to the wireframe! You may need to play around with adding gap to the flex container, and some padding here or there, but the page behaves as expected!

🎉 Congratulations! You are now a very responsible developer!

Read on for some further challenges…
🎯 Mini Challenge: Extra responsibility

Add a wider variety of content to your page and have a practice with some of the properties we looked at!

    Try to create a ‘hero’ section with 100vh and 100vw.

    Create a responsive grid which utilises the grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); property (and change the value within the minmax() property to what you want).

    Play around with applying object-fit: cover on your images to see how it affects their display.

    Create a @media query which affects some content on your page.

💭 Help

    Google, as always, is your friend!

    It’s impossible to remember every single aspect of responsive design as it changes so often, but it would be good to practice each of these elements one-by-one so that you get more comfortable with them. (Going through the resources in this session would be a great start!)

🎯 Mini Challenge: Media Queries

Add a media query with the @media keyword, and by specifying the min-width: 800px property. These CSS rules will be applied whenever the screen is at least 800px wide, or over.

💭 You can also use min-height, max-width and max-height, although we try to avoid the latter and use a small-screen first approach.

⛳️ This media query will unlock the final piece of the Wireframe puzzle, by altering the justify-content property depending on if the screen is narrow or wide!
💭 Help

Have a go at writing a media query which works. However, seeing as we’ve only just introduced the topic, here is some code to compare yours to:
Open me to compare what you've written:

</br>

👀 Confirm that the justification of the text in the header changes when you resize the browser window above and below 800px.

💭 Checkout the link on ‘New CSS Syntax for Range Media Queries’ above - we can use comparison operators now. You will still most commonly see the ‘min-width’ syntax, as the range sytax does not work on all browsers. Can I use link
