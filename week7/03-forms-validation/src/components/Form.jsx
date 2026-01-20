import { useState } from "react";
// function Form() {
//   return (
//     <form>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function Form() {
//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// function Form() {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   function handleInputChange(e) {
//     setName(e.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={handleInputChange}
//       />
//       <p>Current value is: {name}</p>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


// If your form has more than one input field, you could repeat this process as many times as you need. This is a reasonable approach if you only have a few fields. However, if you have a lot of fields, this can get tedious, requiring a new function and state value for each of the fields. Instead, we can create an onChange handler and state object that can handle multiple form field values allowing us to create a new state object to store the form field values.

function Form() {
  // form values with initial values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(e) {
    setFormValues({
      ...formValues, // the spread operator will merge all existing values
      [e.target.name]: e.target.value, // then we add the new value using the form field "name" attribute and the value
      // this equates to a key: value pair which is why the semi-colon is used, we are adding the key value pair to the 'formValues' Object
    });
  }

  return (
    <>
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <p>Name value is: {formValues.name}</p>
        <p>Emaul value is: {formValues.email}</p>
        <p>Password value is: {formValues.password}</p>
        <button type="submit">Submit</button>
      </form>
      <section></section>
    </>
  );
}
export default Form;