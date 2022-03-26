---
id: 4
title: CSS specificity 
href: /blog
category: [1, 2,3,4,6]
excerpt: How to fitch data in Next.js for fast preformence and better SEO
imgs: [9,9]
date: ' 2022-03-25'
datetime: null
imageUrl: null
readingTime: 10 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---
## Why should I care about CSS specificity
Well, first you need this to pass your £35,000 Webdev Interview.. if you care about getting a job in the first place...

Second, This is the way how browsers prioritize which styles should be  applied to any of the DOM HTML element specifically.

In other word, if you have this code:

      <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Document</title>
              <style>
              h1{
                color:red;
              }
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
          </body>
      </html>

The result will print 
```
 Hello World
 ``` 
 in red.

So, we can to simplify how the browser decides  which selector to apply, lets imagine that there is four figure number.
0,0,0,0