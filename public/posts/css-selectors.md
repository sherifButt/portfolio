---
id: 5
title: CSS Selectors 
href: /blog
category: [1,3,4,6]
excerpt: How to fitch data in Next.js for fast preformence and better SEO
imgs: [36,36]
date: ' 2022-03-25'
datetime: null
imageUrl: null
readingTime: 10 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---
## Why should I care about CSS Selectors?
Selectors will help you to select exactly which element to apply your CSS (colors, shapes - attributes).

There is a ton of them in this article I'll teach you how to get started with them.
## 1. Basic selectors

### 1.1 Universal Selector
`*` 

it is to select latterly every element in the body.
```css
* {
  color:red;
}
```
### 1.2 Type Selector {append}
`div` , `span` , `li` , `input` , `ul` , `table`... etc
This will select every element in the page that have the same specific type that mentioned..
```css
div {
  color:red;
}
```
```html
<div> Love Cats </div>
```

### 1.3 Class selector
`.name`

A class is an attribute for type selector  you ad to your tags can be a descriptive name such as `first` `reds` what ever discribs your need. A class has to start with a dot in the CSS file:
```css
.anima {
  color: green;
}
```
```html
<div class="red"> Love Cats </div>
```

### 1.4 ID selectors
`#section` , `#name`

Similar to class selector however starts with `#` sign, and it is stronger than classes in specificity - more on specificity late.

Note: You can have only one ID on a page, so you don't want to use as it is very specific. Class is way better as you can share it between elements.
```css
#cat {
  color: green;
}
```
```html
<div id="cat"> Love Cats </div>
```
### 1.5 Attribute selector
It selects all elements that have the given attribute.

__Syntax:__ [attr] [attr=value] [attr~=value] [attr^=value] [attr$=value] [attr*=value]

|Selector|Example|Description|
| ------- | ---- | -- |
|__[attr]__|[autoplay]|will match all elements that have the `autoplay` attribute set (to any value).|

### 2.0 Grouping selectors 
#### `and`
This is to be very specific about selecting a certain element, for example if you want to select a class `.red` which is only a `div`.
You will need to combine different selectors, by adding them together with no space between:
```css
div.red{
  color:green
}
```

#### `or`
To apply `or` selector you need to type the first selector followed by coma `,` this will mean if we have the first selector or the second selector apply this style:
```css
div, red {
  color:red
}
```
```html
<div class="red"> Love Cats </div>
```

### Descendant selectors `children`
### any child
Selecting an element inside another element, by adding `Space`
```css
div li .red {
  color:red;
}
```
```html
<div class="red">
<ul>
  <li class="red">Cat</li>
  <li>Mouse</li>
</ul>
  </div>
``` 
![descendant selectors,test](https://cdn.kastatic.org/ka-cs-challenge-images/htmldomtree.jpg)
### direct child
Selecting an element inside another element, by adding '>'
```css
div`>` li  {
  color:red;
}
```
```html
<div class="red">
<ul>
  <li>Cat</li>
  <li>Mouse</li>
</ul>
  </div>
``` 
### Siblings
#### Any sibling
use the `~` operator
Any same level element `sibling` comes after the selected selector
```css
li.red ~ li {
  color:blue;
}
```
```html
<ul>
      <li class="">Item 1</li>
      <li class="red">Item 2</li>
      <li class="">Item 3</li>
      <li class="">Item 4</li>
    </ul>
```
#### Only next sibling
use the `+` operator
```css
li.red + li {
  color:blue;
}
```
```html
<ul>
      <li class="">Item 1</li>
      <li class="red">Item 2</li>
      <li class="">Item 3</li>  
      <li class="">Item 4</li>
    </ul>
```
.
### CSS Pseudo Classes
it is a keyword added to a selector that specifies a special state. such as `:hover` that can change button color or a div.
```css
li:hover{
  color:red;
  background:green;
}
```
|Selector|Example|Description|
| ------- | ---- | -- |
|__:hover__|__p__:hover |when hove|ring over an element|
|__:focus__|__p__:focus |to focus on an element example form __input__ & __button__|
|__:required__|__input__:required |when the __input__ element is required|
|__:checked__|__input__:checked |connected to checkboxes|

### Pseudo Selectors
__(based on child location)__

|Selector|Example|Description|
| ------- | ---- | -- |
|__:first-child__|__p__:first-child |first child in elements node
```css
li:first-child {
color:blue;
}
```
|Selector|Example|Description|
| ------- | ---- | -- |
|__:last-child__|__p__:last-child |last child in elements node
```css
li:last-child {
color:red;
}
```
___n___ in the following examples is the child number
|Selector|Example|Description|
| ------- | ---- | -- |
|__:nth-child(n)__ |p:nth-child(2)|the second number|
|__:nth-child(nn)__ |p:nth-child(3n)|every second number|
|__:nth-child(nn -1)__| | every second element and offset -1 means start of first element.|
|__:nth-last-child(nn)__| | every second element element starts form the bottom|
|__:nth-last-child(2n -1)__| | every second element starts from the bottom offset by tow.|

```css
li:nth-child(3){
  background:red;
}
```
`:only-child` apply this only if it is the only child

`:not()` not a

### Psudo elements
This will help you to install content just before the element or after.

|Selector|Example|Description|
| - | - | - |
|__::before__|__p__::before|Insert _something_ before the content of each element __'\<p>'__|
|__:after__|__p__::after|Insert _something_ after the content of each element __'\<p>'__|
