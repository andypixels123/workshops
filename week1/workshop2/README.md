
HTML: HTML Tags and Meaning on the Web
Overview

HTML is the language we use to define the meaning of information on a web page.

Like formatting a document in a word processor with headings, titles, paragraphs, bullet point lists, and so on, HTML documents can be structured in a similar way. These formatting options affect the visual style of the information and make it easier to understand.
Class Plan

    Demo: common HTML tags and how they’re used to convey meaning, eg. news headline, article, etc.
    Workshop: Write some HTML tags to define the meaning of a web page, such as a news article

Learning Objectives

    What is HTML?
    What are common HTML tags?
    How we use HTML tags to communicate meaning

Success Criteria

    I know what how to write HTML tags
    I know what a HTML attribute is, and how to write them
    I can make logical choices about which HTML tags to use for different purposes

Glossary

    Semantic Elements - define what the content is - ie, <input> is a semantic tag that you’ll put an input box in.
    Non-Semantic Elements - often used to provide strucutre - such as a <div> tag.

Resources

    MDN: HTML basics
    MDN: HTML elements reference

Workshop
What is HyperText Markup Language (HTML)?

    “The Web does not just connect machines, it connects people.” Tim Berners-Lee, inventor of the World Wide Web

A web page is a file containing some HTML markup. HTML markup is designed to explain the meaning of the information on a web page. Like formatting a document in a word processor with headings, titles, paragraphs, bullet point lists, and so on, HTML documents can be structured in a similar way.

HTML tags communicate meaning to the user and to computers about what a piece of information is, and how it relates to other information on the page. This is a link, This is the page title, This is my shopping list etc.

    For a visitor, this can be shown as a visual clue like a page title being larger or a link being blue (although it shouldn’t be used for styling - it’s more about the semantic meaning) and underlined; or it might be read out to the user by text to voice software explaining which parts of the text can be clicked.
    For the computer, the tags can be read directly to understand the developer’s intent, and display or manipulate the information accordingly. Our page might be presented on different kinds of displays, or read out by a voice assistant.

    📝 Note!

    HTML tags are the LEGO bricks of the web. You can combine them in many combinations. Using the right ones in the right place can be important, but the rules are lenient. You can build a lot of things with a few simple types of brick. You don’t need all the fancy kits to build something cool.

Learning HTML is an ongoing process, there are over a hundred tags! You don’t need to know them all to get started, and some of them you might never use. You can learn more as you go.
HTML Attributes

HTML attributes serve as vital components in impacting the appearance and functionality of a web page. Essentially, attributes provide additional information to an HTML element. They always appear within the opening tag and are structured as key-value pairs:

<img src="image.png" id="cat-image" />

In this example, we have an image which has a source attribute and an ID attribute. The src gives the image element the information it needs to display the chosen image. The id gives the image element an ID name, which can be used for styling or scripting purposes later.

<h1 id="main-title"></h1>

As you can see in this example, the attributes must only go in the first < and > of an element, including self-closing tags like img elements.

    📝 Note!

    Attributes come in various forms, ranging from ‘global’ attributes like id, class and style that can be applied to almost any element, to element-specific attributes like src for images, and href for links.

As you can see from this extensive list, there are many attributes you can use depending on what you’re working on.
🎯 Mini Challenge: News story markup

News websites have a lot in common. Headline, author, date, body text, images, etc. Here, you’ll take inspiration from an article and try to replicate it!

Pick your favourite layout order and markup a page with HTML Tags.

    Write the markup for the main section of a news article.
    Include a headline, author, date, body text, and an image.
    Use any other tags you want, such as a list for a sequence of events that occurred.

💭 Help

    Write the HTML elements which contain your pages content inbetween the <body> <\body> tags.
    Don’t worry about a pixel-perfect replica! The point here is to get used to HTML tags, putting them in order, and creating appropriate parent-child relationships.
    We’ll get to styling the article later.

