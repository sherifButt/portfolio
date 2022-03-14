---
id: 2
title: Installing Next.js & Understanding Folder Structure
href: /blog
category: [1, 2,3,5,7]
excerpt: How to build MD files auto reader, using
imgs: [2,3,4,5,6]
date: '2020-06-21'
datetime: null
imageUrl: null
readingTime: 8 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---

## Problem:
In this article we will start building our Next.js project move2room. So first lets install Next.js and I'll show you the folder structure of Next.js
## Installing Next.js:
We can install next very easy by pulling a pre created template from git, I'll show you how to do this in the following step, however now I'd prefer to start with the basic method where we will install a react app, then add libraries step by step, so we can understand the full folder structure and the ins and outs of Next.js setup. I can write any thing now right.

### Installing node.js
1. go to https://nodejs.org/en/ and download the latest version of Node.js, npm and npx will be installed as well.
1. Open an empty folder to store the project directory
   in mac use `terminal`
### Installing Next.js
### Basic installation :
2. Use use `npx` to create react app
  
   
   ```bash
    npx create-next-app . ⏎
    # or
    yarn create next-app . ⏎  
    ```
  if you noticed we used a dot after the command to tell npx to install Next.js in the same folder.

  After the app has been installed successfully, you can see all the files structure has been created.
  
  If we go to the `package.json` file

  ```json
  {
  "name": "move2room",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  }
}
  ```
  
  We can see `"next" , "react" ,"react-dom"` 

  On the other hand you can see scripts `"dev","build","start"` so if we want to run a development mode we should type:
  ```bash
  npm run dev ⏎
  ```
 - to start the development server on http://localhost:3000
 - Visit http://localhost:3000 to view your application
- Edit pages/index.js and see the updated result in your browser
  
To run a build mode (where we will have a build ready for deployment) we need to type:
  ```bash
  npm run build ⏎
  ```
  To run production mode type:
  ```bash
  npm run start ⏎
  ```
For manual set please refare to: https://nextjs.org/docs/getting-started

### Folder structure:
```
/root
  \_ /.next/
  \_ /components/
      \_ Button/
          \_ button.spec.jsx
          \_ button.styles.jsx
          \_ index.jsx
  \_ /constants/
      \_ theme.js
      \_ page.js
  \_ /contexts/
      \_ Locale/
         \_ index.js
      \_ Page/
         \_ index.js
  \_ /pages/
      \_ _app.jsx
      \_ _document.jsx
      \_ about.jsx
      \_ index.jsx
  \_ /providers/
      \_ Locale/
         \_ index.js
      \_ Page/
         \_ index.js
  \_ /public/
      \_ favicon.ico
      \_ header.png
  \_ /redux/
      \_ actions/
         \_ users/
            \_ index.js
         \_ products/
            \_ index.js
      \_ reducers/
         \_ users/
            \_ index.js
         \_ products/
            \_ index.js
      \_ store/
         \_ index.js
      \_ types/
         \_ index.js
  \_ /shared/
      \_ jsons/
          \_ users.json
      \_ libs/
          \_ locale.js
      \_ styles/
          \_ global.css
  \_ /widgets/
      \_ PageHeader/
          \_ index.jsx
  \
  \_ .eslintignore
  \_ .eslintrc
  \_ .env
  \_ babel.config.js
  \_ Dockerfile
  \_ jest.config.js
  \_ next.config.js
  \_ package.json
  \_ README.md
```