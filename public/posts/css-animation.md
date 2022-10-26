---
id: 6
title: CSS Animation
href: /blog
category: [1,3,4,6]
excerpt: CSS allows animation of HTML elements without using JavaScript or Flash
keywords: css,selectors,html
imgs: [41,41]
date: '2020-03-28'
datetime: null
imageUrl: null
readingTime: 10 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---
To go through CSS animation lets start with this example:

___./style.css___

     .parent{
        background-color:hsla(200,100%,20%);
        height: 400px;
        width: 400px;
      }
      .child{
        background-color:red;
        height:50%;
        width: 50%;
      }
      .parent:hover .child{
        transform:translateX(100%)
      }

___./index.html___

      <div class="parent">
        <div class="child"></div>
      </div>

This CSS will result in two rectangles, when hovering on the red small one it changes its state to appear on the right side.

However it just jumps no smooth transition what so ever. To solve this we will use animation.
We have to approaches for animation in CSS. simple animation using `transition` property, and full on animation using `animation` property.

## 1.0 Transition:
CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.
![](/assets/imgs/posts/transitionsprinciple.png)

### 1.1 Defining Transition
You can control the individual components of the transition with the following sub-properties:

1.1.1 `transition-property`

1.1.2 `transition-duration`

1.1.3 `transition-timing`

1.1.4 `transition-delay`

The shorthand CSS syntax is written as follows:

    div {
    transition: <property> <duration> <timing-function> <delay>;
    }

__Example:__
All what we need is the `transition` property in CSS as followint:
___./styles.css___

      .parent{
        background-color:hsla(200,100%,20%);
        height: 400px;
        width: 400px;
      }
      .child{
        background-color:red;
        height:50%;
        width: 50%;
        transition: transform 1s 1s;
        or
          transition-property: transform;
          transition-duration: 1s;
          transition-delay: 1s;
      }
      .parent:hover .child{
        transform:translateX(100%)
      }
![](/assets/imgs/posts/ezgif.com-gif-maker.gif)

Lets apply transition to the same hover:

___./styles.css___

      .parent{
        background-color:hsla(200,100%,20%);
        height: 400px;
        width: 400px;
      }
      .child{
        background-color:red;
        height:50%;
        width: 50%;
        transition: transform 1s easy-in-out;
        or
          transition-property: transform;
          transition-duration: 1s;
          transition-timing: easy-in-out;
          transition-delay: 1s;
      }
      .parent:hover .child{
        transform:translateX(100%)
      }

![](/assets/imgs/posts/ezgif.com-gif-maker-1.gif)

## 2.0 animation
