
Forms, User Input, Validation Feedback
Overview

One of the crucial functions of the web is accepting user input. Without the ability to accept user input the web would have remained made up of only static documents where it began.

The addition of forms and user input fields allowed the web to flourish leading to the interactive user-generated social media and web apps we know today. But beyond just Facebook or X there’s a lot of more mundane examples of forms and user input that we use every day, from logging into a website to entering card information to pay for something.
Class Plan

    Demo: Demonstration of forms and how they work
    Workshop: Make some forms, add some client validation and submit the forms

Learning Objectives

    What is a form?
    How to create a form
    How to add inputs to a form
    How to add validation to a form
    How to submit a form, and what happens to the data
    Common types of form field

Success Criteria

    I can explain what a form is and why we use forms in our apps.
    I can structure a form in HTML using semantic, accessible tags, properly nesting the form elements.
    I can manipulate the form data in JS using FormData and events.
    I can style forms for an improved user experience (UX).

Resources

    MDN: Forms
    MDN: Form basics
    MDN: Form validation
    MDN: Form data validation

Workshop
Creating forms

⛳️ In a new index.html file, add a form element. Open the file in your browser and check the console to see the output. We nest other tags within the form element because forms offer powerful built-in functionalities that enable them to collect input values efficiently.

<form></form>

Adding inputs to a form

⛳️ Add a label and input for email and password.

Labels are added for input elements to improve accessibility - they provide a description to screen readers. They also ‘expand’ the area that users can click on to select the input. For example, clicking on the label for a checkbox will select the checkbox.

The id attribute on the input element defines a unique identifier which a label can bind to. For example, an <input>s id="email" will bind to a <label>s for="email".

The type attribute on the input element defines what type of input it is (duh!). For example, type email will automatically validate that the input is a properly formatted email adress.

The name attribute is the name of the input (not so duh) - when a form is submitted, it will use the value of the name attribue to create key-value pairs. More on this later. For now, just add it.

<form>
  <label for="email">Email</label>
  <input type="email" name="userEmail" id="email" />

  <label for="password">Password</label>
  <input type="password" name="userPassword" id="password" />
</form>

Adding validation to a form

⛳️ Add the required attribute to the email and password inputs. required means the user cannot submit the form without typing something into it.

<form>
  <label for="email">Email</label>
  <input type="email" name="userEmail" id="email" required />

  <label for="password">Password</label>
  <input type="password" name="userPassword" id="password" required />
</form>

Submitting a form

⛳️ Add a submit button to the form. The type=”submit” is important here - it means when we click that button we will ‘submit’ the form!

<form>
  <label for="email">Email</label>
  <input type="email" name="userEmail" id="email" required />

  <label for="password">Password</label>
  <input type="password" name="userPassword" id="password" required />

  <button type="submit">Submit</button>
</form>

💭 You can alternatively use an input as your submit button, like so:

</br>

⛳️ Add an event listener to the form that logs the form data to the console.

When the form submits, we prevent the default form action (you’ll see that if you skip this step, the page reloads) and then create a new FormData object from the form node - FormData is a special kind of object that is key value pairs of the inputs name attribute and the value.

Rather unhelpfully though, it’s not possible to console.log a FormData object and see it’s values. This is by design, and we’ll learn more about why later.

FormData

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData); // just logs an empty 'formData object. how useless!'
});

You and I just want the convenience of FormData (it ‘automatically’ collects the values of all input fields) but in a normal JS object package. Thankfully, theres’s a funny looking method we can use.

const jsObjectPlease = Object.fromEntries(formData);
console.log(jsObjectPlease); // logs just like a normal js object. See that the property names are the same as the 'name' attribute we gave each feild

All together it looks like this:

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const jsObjectPlease = Object.fromEntries(formData);

  console.log(jsObjectPlease); // Check in your console to see what this variable looks like
});

Now we have a normal JS object of key value pairs! If you want to know more about the above syntax, feel free to ask the instructor/have a google, but for now it’s worth just noting it down as a useful line and not worrying about it further.
Other types of form field

There are loads of other types of form fields for input. See the examples for more.
🎯 Mini Challenge: Forming up some hobbies

    Create a new form that collects some information from the user about their hobbies.
    You shoud get a name, city, and a hobby.
    Log the users form submission to the console!

💭 Rules

    Each form <input> should have a <label>.
    Ensure that <input>s and <label>s are connected appropriately.

💭 Help

Check back in this workshop to see the very useful Javascript code which gets the form entries from the form.
🏹 Stretch Goal

For bonus points, after the user has submitted the form display their entries on the page.
