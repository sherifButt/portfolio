---
id: 1
title: Google Fonts to NextJS app with Tailwind CSS
href: /blog
category: [1, 2]
excerpt: How to build MD files auto reader, using
imgs: [35,35]
date: '2020-12-21'
datetime: null
imageUrl: null
readingTime: 6 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---
Using custom Font Family in a Next JS application involves 3 easy steps! setting up` _document.js` , declaring the custom font family in tailwind.`config.js` and using it in our `Components/Pages`.
For this example, we will be using “Google Fonts” as the font provider!
Let's pick `Inter` Sans font from fonts.google.com and copy the href URL.
In this case, it’ll be:

```html
  href="https://fonts.googleapis.com/
  css2?family=Poppins:wght@100;200;300;
  400;500;600;700;800;900display=swap"
  rel="stylesheet"
```

Go to pages folder  `next-project/pages/` , and create a new custom document `file _document.js` and set it up with the following code


```html

          import Document, {
              Html,
              Head,
              Main,
              NextScript,
            } from 'next/document'
            class MyDocument extends Document {
              static async getInitialProps(ctx)
              {
                const initialProps = await 
                Document.getInitialProps(ctx)
            
                return initialProps
              }
              render() {
                return (
                      `<Html>`
                        <Head>
                        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
                        </Head>
                        <body>
                          <Main />
                          <NextScript />
                        </body>
                      </Html>
                )
              }
            }

            export default MyDocument
        
```