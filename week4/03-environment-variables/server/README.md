
Environment Variables
Overview

Working on projects often involves handling sensitive information like API keys or database credentials. Environment variables offer a straightforward solution to this challenge. Additionally, environment variables are useful for managing dynamic placeholder information, such as URLs in fetch requests, which may differ between production and deployment environments (e.g., localhost URL during development versus a deployed URL on Vercel). To summarise, environment variables offer adaptability, allowing the developer to easily manage project configurations.
Class Plan

    Demo: Demo environment variables being used in a project.
    Workshop: Develop and deploy a project that uses environment variables to protect API keys.

Learning Objectives

    What are environment variables?
    How do we use environment variables during production?
    How do we use environment variables during deployment?

Success Criteria

    I can give a definition of what an environment variable is.
    I can declare environment variables and store them in a .env file.
    I can configure the dotenv package properly.
    I can deploy a server that requires environment variables to work.

Required Knowledge

    APIs

Resources

    DotEnv
    Vercel: Environment Variables

Workshop
Setting up dotenv in your server

⛳️ Initialise a new Express server with cors:

npm init -y
npm install express cors

⛳️ Install the .env package using the following command:

npm install dotenv

⛳️ After this, you need to set up your server.js file, making sure everything is working as it should by setting a root route. You need to also import the .env package:

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});

Setting up your environment variables

⛳️ In your the folder that contains your server.js file, create a new file with the name .env. In the same folder, also create a .gitignore.

⛳️ In your browser, find an API to use. In this example, we will be using the Unsplash API, but any API that uses one or multiple API keys will work. The Unsplash API has two keys: an Access Key and a Secret Key.

    👀 Important

    .env files have a key value pair separated by a ‘=’ sign, such as:

    KEY = VALUE;

    Environment variable keys can be titled anything - separate multiple words by an underscore (you cannot have spaces in the key), however it is convention they are capital letters. Values typically don’t need quotes, however, they will need them if special characters or spaces are used.

⛳️ Add your API keys to your .env file. This key will typically be a long string of letters and numbers:

UNSPLASH_ACCESS_KEY=some_key
UNSPLASH_SECRET_KEY=thisISafakeKeyforMyAPI3413
DEV_URL="https://localhost:8080"

Using your environment variables

    👀 Important

    The dotenv.config() function loads variables from the .env file into the process.env object in your JavaScript. By calling dotenv.config() at the beginning of your application, you ensure that the variables defined in the .env file are loaded and available for use throughout your codebase.

⛳️ In your server.js files, add in a dotenv.config();:

// imports and app configurations...

dotenv.config();

// app.get, app.listen, etc...

⛳️ Set up a new app.get endpoint:

app.get("/images", async (req, res) => {
  // ...
});

⛳️ Now, we can use the process.env object mentioned earlier. Using template literals, replace the client ID part of the URL with process.env:

app.get("/images", async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});

    💭 Tip!

    If your server isn’t responding as expected try console.log(imageData); before setting your res.json(...)

⛳️ Consider using a .env.local. This overrides the default environment variables defined in the .env file, and is useful for devs who want to customise their local environment without affecting the shared configuration.

At this point you should get some data displaying in your localhost to utilise this data look at fetching data from the client
Deployment using environment variables

Once you’ve gotten your project set up to the point you’re ready to deploy it, you will run into some trouble. As you’ve put your .env in your .gitignore, your API keys aren’t available for your deployed version to access. To combat this, we can add environment variables directly to our deployment.

⛳️ Add in your environment variables into your deployment:

