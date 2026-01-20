============================================================
WORKSHOP
============================================================
From Live Server to Vite
Overview

Until now, you’ve probably been using Live Server for VSCode to serve your website code.

There are more advanced tools we can use on the command line to handle our dev server, and for optimising our code to deploy online.
Class Plan

    Demo: Demonstration of Vite, and how it works: bundling, minification, and hot reloading
    Workshop: Use Vite to serve your pages, and perform a static page build ready for deployment

Learning Objectives

    What is Vite?
    How to use Vite to serve your pages
    How to use Vite to build your pages for deployment

Success Criteria

    I can explain in my own words how Vite works, especially its building process and hot reloading.
    I can set up an app using Vite.
    I can explain the difference between development and production environments.

Resources

    Vite
    Vite: Getting Started
    Vite: CLI
    Vite: Configuration

Workshop
Installing Vite

⛳️ In an existing website project, open your terminal and install Vite as a development dependency (make sure you’ve initialised an NPM project too!)
Create a vite project

    Navigate to your desired project directory.
    Run the following command:

npm create vite@latest

    Follow the prompts:
        Choose a project name.
        Select Vanilla.
        Select JavaScript.

    Change to the project directory:

cd your-project-name

    Install dependencies:

npm install

    Open the project in VSCode:

code .

    Start the development server:

npm run dev

That’s it! Your development server will be up and running.
Running Vite

⛳️ Run the dev server.

npm run dev

👀 You’ll see a message in the terminal telling you that the server is running, and the URL to open in your browser to view your site. While Vite is running, you can no longer send commands to that terminal. It will show you what’s going on with your Vite server.
Ending the dev script

You’ll need to end the dev script if you want to type more commands into the same terminal.

⛳️ Within that terminal, press your keyboard keys control and c together. That should exit the script, allowing you to run the next one!
Building your site

⛳️ Run the build command.

npm run build

👀 You’ll see a new directory called dist has been created, and inside it is a directory called assets. This is where Vite has put all of your code, ready to be deployed to a server.
What is the Build Process?

The build process is a crucial step in preparing your project for deployment. Here’s what happens during this process:

    Minification: Your JavaScript, CSS, and HTML files are minified to reduce their size. This helps to improve load times and overall performance.
    Bundling: All your project’s files are bundled together. This means that instead of having numerous separate files, your application is combined into a few files, reducing the number of HTTP requests needed.
    Optimization: Vite optimizes your assets, including images and other static resources, to ensure they are as efficient as possible.
    Code Splitting: Vite automatically splits your code into smaller chunks, which can be loaded on demand. This improves the performance of your application by only loading the necessary code when it is needed.

The result of this process is the dist directory, which contains all the optimized and ready-to-deploy files. You can then take this directory and upload it to your server or hosting service to make your site live.

💭 Note that your JS files linked in Script tags will only load if the attribute type="module" is applied.

<script src="./app.js" type="module"></script>

