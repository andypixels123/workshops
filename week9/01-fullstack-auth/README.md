# Authentication with Clerk

1. Install clerk

```bash
npm install @clerk/nextjs
```

2. Connect our Clerk application with our Next app

- Use env vars

3. Config middleware (proxy) file

- Add a `proxy.js` file to your `src` folder
- Copy the content from the docs

4. Provide our app with Clerk

- Nest our app within `<ClerkProvider>` in the `layout.js` file, so all pages have access to it

From step 5, it is all customisation.

5. Sign-up and sign-in routes

- Set up catch-all segments in our routes
- Import SignIn and SignUp components in their respective routes
- Add env vars to prioritise our custom login and to redirect user after authentication

6. User Interface Clerk components

- Check `Header.jsx`
