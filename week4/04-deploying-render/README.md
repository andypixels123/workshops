
Deploying a Client and Sever on Render.com
Overview

Static websites with HTML/CSS and client side JavaScript interactivity happily run on Github pages. They don’t need a dedicated process to run, like our Node.js API server does.

When we want to deploy both a client and server - a full-stack application - we need a way to run our persistent Node.js server on the internet. Github Pages won’t let us do that.

There are a number of competing services that let us deploy our front end and backend conveniently, and currently Render.com is one of the easiest to use, while offering a very generous free tier that we can use to learn.

Competing alternatives offering similar services to Render.com include Fly.io, Railway.app.

It’s worth being aware that popular services like Vercel and Netlify are great for front end deployments but won’t run a long-running Node.js server. We’ll look at how these “serverless” platforms work in future classes.
Class Plan

    Demo: Deploying a client and server on Render.com
    Workshop: Deploying a client and server on Render.com

Learning Objectives

    What is Render.com?
    How do we deploy a client on Render.com?
    How do we deploy a server on Render.com?
    How do we connect a client and server on Render.com?

Success Criteria

    I can deploy a client in Render using the Static Page tool.
    I can deploy a server in Render using the Web Service tool.
    I can configure and customise both deployments, including adding environment variables.

Resources

    Render.com
    Deploying a Node.js app

Workshop
Create a render.com account

⛳️ Go to Render.com and sign up for a new account. It might be easiest to log in with your Github account.
Deploy the server as a Node.js app

⛳️ Create a new “Web service”, and connect your Github repo containing ‘client’ and ‘server’ directories.

⛳️ Set the “Root directory” to be server, where you server code lives.

⛳️ Set the “Build Command” to be npm install so it will install our NPM dependencies.

⛳️ Set the “Start Command” to be node server.js so it will run the node server, the same as on our local machine.

⛳️ Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.

⛳️ Once it finishes, note the URL you’re given. It will be something like https://<your-app-name>.onrender.com/.

⛳️ Visit that URL in your browser, and you should be able to visit the routes defined in your server code.
Deploy the client as a static site

⛳️ Create a new “Static site”, and connect your Github repo containing ‘client’ and ‘server’ directories.

⛳️ Set the “Root directory” to be client, where you client code lives.

⛳️ Set the “Build Command” to be npm install; npm run build so it will install our NPM dependencies and build our app (assuming we have configured the build script in our package.json).

⛳️ Set the “Publish Directory” to be dist.

⛳️ Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.

⛳️ Once it finishes, note the URL you’re given. It will be something like https://<your-app-name>.onrender.com/.

⛳️ Visit that URL in your browser, and you should be able to see your website.
Confirm the client and server are connected

⛳️ Visit the URL of your client app, and open the developer tools. You should see the client is making requests to the server, and getting responses.

💭 If not, make sure you update your client code to point to the URL from the Render app - make a variable that holds the base url and then use it in the code.

For example:

const baseUrl = "https://sams-books-server.onrender.com";
// replace with localhost:4252 if on developer

Another example:

await fetch(`${baseUrl}/books`);

This makes it easy to swap the environment.

There are more advanced ways of dealing with this automatically, but for simplicities sake this will do for now.
