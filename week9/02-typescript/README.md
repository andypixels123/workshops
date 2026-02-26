
What is TypeScript and why would I use it?
Overview

TypeScript is a superset of JavaScript that adds “type annotations” to the language. It’s a language that compiles to JavaScript, so it can be used anywhere JavaScript can be used. You don’t have to use TypeScript to use Next.js, but it can make it easier to write code once you get the hang of the type system.

Large companies that write a lot of React.js and Next.js code most often use TypeScript, or other type systems like Facebook’s Flow, because it can help enforce correctness in large codebases with many contributing developers.

TypeScript is a great way to learn about type systems in programming languages which is an important concept in computer science. Many backend server languages are typed languages including Java, C#, Go, Rust and others. TypeScript provides some escape hatches that allow you to retain some of the benefits of dynamic JavaScript and gradually adopt more type safety over time.
Class Plan

    Demo: Live coding, using TypeScript in a Next.js app
    Workshop: Use TypeScript to a Next.js app

Learning Objectives

    What is TypeScript?
    What are type annotations?
    What are the benefits of TypeScript?
    What are the drawbacks of TypeScript?
    How do I use TypeScript in a Next.js app?

Success Criteria

    I can explain the differences between JavaScript and TypeScript.
    I can give examples of benefits that come with TypeScript.
    I can create a Next app with the TypeScript package.
    I can write type annotations inline.
    I can write types as separate elements using the keyword type.
    I can store my types in a separate types folder that I can import when needed.
    “Add your own personal success criterion.”

Required Knowledge

    HTML, CSS, JS
    React.js
    Next.js

Resources

    Understanding TypeScript’s benefits and pitfalls
    TypeScript: Handbook
    TypeScript: React
    TypeScript: Next.js

Workshop

⛳️ Start a new Next.js app with TypeScript

npx create-next-app@latest

⛳️ Say yes to TypeScript when asked by the CLI.

⛳️ Add a TypeScript component to your Next.js app

export function Hello() {
  return <div>Hello</div>;
}

👀 On a simple level, the code is still JustJavaScript™️.

🎯 Render the Hello component in your apps app/page.tsx

import { Hello } from "../components/Hello";

export default function Home() {
  return (
    <div>
      <Hello name="World" age={23} />
    </div>
  );
}

⛳️ Add props with a type annotation inline to your component function declaration.

Component without types:

export function Hello(props) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}

Component with inline prop types

export function Hello(props: { name: string }) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}

Component with separate prop type:

type HelloProps = {
  name: string;
  age: number;
};

export function Hello(props: HelloProps) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}

Component with deconstructed props:

type HelloProps = {
  name: string;
  age: number;
};

export function Hello({ name, age }: HelloProps) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}

