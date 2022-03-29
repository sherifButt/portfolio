---
id: 5
title: CSS Selectors 
href: /blog
category: [1,3,4,6]
excerpt: How to fitch data in Next.js for fast preformence and better SEO
imgs: [40,40]
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
Selectors will help you to precisely   select the exact element/s which should receive your desired styles (colors, size, animation.... etc). You will need them as well in ___javascript___ to select element/s to manipulate... 

Learn about CSS Selectors correctly and structurally and you will thank me later.

There is a ton of them in this article I'll teach you how to get started with them.
## 1.0 Basic CSS selectors

### 1.1 Universal CSS Selector
`*` 

it is to select latterly every element in the body.

    * {
     color:red;
    }

    <div class="red"> Love Cats </div> ←
    <span id="blue"> Love Dogs </span> ←
    <div>
      <span>
        <b> nested text </b>           ←
      </span>
    </div> 
    <input type="text">                ←
    <div>
      <ul>
        <li class="">Dog</li>          ←
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        ←
      </ul>
    </div>

### 1.2 Type Selector
`div` , `span` , `li` , `input` , `ul` , `table`... etc
This will select every element in the page that have the same specific type that mentioned..

    div {
    color:red;
    }

    <div class="red"> Love Cats </div> ←
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           ←
      </span>
    </div> 
    <input type="text">        
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>


### 1.3 Class selector
`.name`

A class is an attribute for type selector  you ad to your tags can be a descriptive name such as `first` `reds` what ever discribs your need. A class has to start with a dot in the CSS file:

    .red {
     color: red;
    }

    <div class="red"> Love Cats </div> ←
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>   
      </span>
    </div> 
    <input type="text">        
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>

### 1.4 ID selectors
`#section` , `#name`

Similar to class selector however starts with `#` sign, and it is stronger than classes in specificity - more on specificity late.

__Note__: _You can have only one ID on a page_, so you don't want to use as it is very specific. Class is way better as you can share it between elements.

    #dog {
     color: green;
    }

    <div class="red"> Love Cats </div> 
    <span id="dog"> Love Dogs </span>  ←
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>

### 1.5 Attribute selector
It selects all elements that have the given attribute.

__Syntax:__ [attr] [attr=value] [attr~=value] [attr^=value] [attr$=value] [attr*=value]

|Selector|Example|Description|
| ------- | ---- | -- |
|__[attr]__|[autoplay]|will match all elements that have the `autoplay` attribute set (to any value).|

    [autoplay], [type=text] {
      color:red;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text" autoplay="true">  ←
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>

## 2.0 Grouping selectors 
### `and`
This is to be very specific about selecting a certain element, for example if you want to select a class `.red` which is only a `div`.
You will need to combine different selectors, by adding them together with no space between:

    div.red{
     color:green
    }

    <div class="red"> Love Cats </div> ←
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>

### `or`
To apply `,` selector you need to type the first selector followed by coma `,` this will mean if we have the first selector or the second selector apply this style:

    div, red {
     color:red
    }

    <div class="red"> Love Cats </div> ←
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           ←
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          ←
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        ←
      </ul>
    </div>

## 3.0 Combinators
### 3.1 Descendant selectors
Selecting an element inside another element, by adding `(Space)`
 
    div li {
     color:red;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          ←
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        ←
      </ul>
    </div>

![descendant selectors,test](https://cdn.kastatic.org/ka-cs-challenge-images/htmldomtree.jpg)

#### 3.2 Child Combiner
Selecting an element inside another element, by adding '>'
 
    div > li  {
     color:red;
    }
 
 
    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>
 
### 3.2 Sibling Combinators
#### 3.2.1 General sibling Combinator
use the `~` operator
Any same level element `sibling` comes after the selected selector

    li.red ~ li {
     color:blue;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        ←
      </ul>
    </div>

#### 3.2.2 Adjacent sibling combinator 
use the `+` operator

    li.red + li {
     color:blue;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        
      </ul>
    </div>
.

## 4.0 Pseudo
### 4.1 Pseudo Classes
it is a keyword added to a selector that specifies a special state. such as `:hover` that can change button color or a div.

    li:hover{
     color:red;
     background:green;
    }

|Selector|Example|Description|
| ------- | ---- | -- |
|__:hover__|__p__:hover |when hove|ring over an element|
|__:focus__|__p__:focus |to focus on an element example form __input__ & __button__|
|__:required__|__input__:required |when the __input__ element is required|
|__:checked__|__input__:checked |connected to checkboxes|

### 4.2 Pseudo elements
__(based on child location)__

|Selector|Example|Description|
| ------- | ---- | -- |
|__:first-child__|__p__:first-child |first child in elements node

    li:first-child {
     color:blue;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          ←
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>

|Selector|Example|Description|
| ------- | ---- | -- |
|__:last-child__|__p__:last-child |last child in elements node
 
    li:last-child {
     color:red;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        ←
      </ul>
    </div>
 
___n___ in the following examples is the child number
|Selector|Example|Description|
| ------- | ---- | -- |
|__:nth-child(n)__ |p:nth-child(2)|the second number|
|__:nth-child(nn)__ |p:nth-child(3n)|every second number|
|__:nth-child(nn -1)__| | every second element and offset -1 means start of first element.|
|__:nth-last-child(nn)__| | every second element element starts form the bottom|
|__:nth-last-child(2n -1)__| | every second element starts from the bottom offset by tow.|


    li:nth-child(3){
      background:red;
    }

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       
        <li class="">Frog</li>         ←
        <li class="">Mouse</li>        
      </ul>
    </div>

    li:nth-child(2n) {...}

    <div class="red"> Love Cats </div> 
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red">Cat</li>       ←
        <li class="">Frog</li>         
        <li class="">Mouse</li>        ←
      </ul>
    </div>


`:only-child` apply this only if it is the only child

`:not()` not a

### Psudo elements
This will help you to install content just before the element or after.

|Selector|Example|Description|
| - | - | - |
|__::before__|__p__::before|Insert _something_ before the content of each element __'\<p>'__|
|__:after__|__p__::after|Insert _something_ after the content of each element __'\<p>'__|

     div.red::before{
       content:'I '
     }

     <div class="red"> I Love Cats </div> ←
    <span id="blue"> Love Dogs </span> 
    <div>
      <span>
        <b> nested text </b>           
      </span>
    </div> 
    <input type="text">                
    <div>
      <ul>
        <li class="">Dog</li>          
        <li class="red"> I Cat</li>       
        <li class="">Frog</li>         
        <li class="">Mouse</li>        
      </ul>
    </div>
