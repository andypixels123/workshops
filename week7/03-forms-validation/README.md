# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


/////////////////////////////////////////////////////////////////////
//////////////////////////// WORKSHOP ///////////////////////////////
/////////////////////////////////////////////////////////////////////

React: Forms and Validation
Overview

Form HTML works just the same in React as it does in vanilla HTML, however there are differences in how we listen for events and update the DOM with those values.

In this class we’ll cover the traditional way of using “controlled form components” and storing the form field values in state. This is the most common way of doing things in current React projects.
Class Plan

    Demo: Creating a form in React and display values on the page before submitting
    Workshop: Create a form in React and display values on the page

Learning Objectives

    Forms
    Controlled Components
    Event Handlers
    State

Success Criteria

    I can build an HTML form with solid validation.
    I can track the form input changes with the onChange event.
    I can store the input values in state using the useState hook.
    I can submit the form values with the onSubmit event.
    I can refactor my code to have one state variable to track multiple input values.
    “Add your own personal success criterion.”

Resources

    React: Forms

Workshop
Creating a form

⛳️ Create a new React app with vite.

⛳️ Add a new component called Form and create an ordinary HTML form using the form element.

export function Form() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

⛳️ Add a submit handler to the form using the onSubmit prop. This should be a function that takes an event object as an argument and calls preventDefault on it.

export function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

Handling “controlled” form input fields

“Controlled” input fields are input fields which are connected directly to a state value in React. We listen for the onChange event on the field and update our state value every time it changes. Rendering this value on the page means the displayed value will change every time we edit the field itself.

⛳️ Create a state value for storing the current text value of the input field.

export function MyForm() {
  const [name, setName] = useState(""); // state value

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} />
      <button type="submit">Submit</button>
    </form>
  );
}

⛳️ Add an onChange handler to the form input field, and pass it a function to handle the change and save it to the state value.

export function MyForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  // handle form input field value being changed by user
  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange} // connect the handler to the onChange event
      />
      <button type="submit">Submit</button>
    </form>
  );
}

⛳️ Add a p tag to display the current value of the input field.

export function MyForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <p>Current value is: {name}</p>
      <button type="submit">Submit</button>
    </form>
  );
}


//////////////////////////////////////////////////// continue from here ////////////////////////////////////////////////////
Handling multiple form fields

If your form has more than one input field, you could repeat this process as many times as you need. This is a reasonable approach if you only have a few fields. However, if you have a lot of fields, this can get tedious, requiring a new function and state value for each of the fields.

Instead, we can create an onChange handler and state object that can handle multiple form field values allowing us to

⛳️ Create a new state object to store the form field values.

export function MyForm() {
  // form values with initial values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}