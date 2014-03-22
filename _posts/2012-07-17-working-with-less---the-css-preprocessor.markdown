---
layout: post
title:  Working With Less - The CSS Preprocessor
date:   2012-07-17 14:50:36
categories: html & css
---

I recently started working on a project which used the CSS preprocessor LESS. If you don't know what LESS or even a pre-processor is, then here's a quick description.

> "A preprocessor is a program that processes its input data to produce output that is used as input to another program"

> "LESS extends CSS with dynamic behaviour such as variables, mixins, operations and functions."

Over the last few months, I've heard bits and bobs about LESS (and other preprocessors, such as SCSS) all coming with mixed reviews. It was only last week that I started to work with LESS and honestly... it's really, really good! I originally thought it would be some over-hyped tool that people buzzed about on Twitter, making a big deal out of nothing. I will happily admit I was wrong, and here are some reasons why...

There are four reasons actually. The four main features I will be sharing with you are: Variables, Mixins, Nested Rules and Operators. If you're familiar with programming languages like JavaScript or PHP, then these concepts are going to make more sense to you. The purpose of LESS is to make CSS smarter, more efficient and easier to edit.

### Variables

A simple example for this is to set a variable for a colour that would be used throughout you're project, then call it whenever you need to use it:

```css
@main-colour: #fc4b32;    // This is our variable
h1 {
    @main-colour;    // We can call the variable in any CSS rule
    font-size: 42px;
}
h3 {
    @main-colour;    // See, here it is again
    font-size: 26px;
}
```

That's all there is to variables. They are essential to the way LESS works and allow for global changes to styles like colours and dimensions.

### Mixins

Mixins are an extension of variables which allow for a class to be included. This is especially useful when writing CSS3 vendor prefixes as it saves you having to write them over and over again.

```css
// Our mixin class
.box-shadow {
    -webkit-box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
    -moz-box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
    box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
}

// You can place the mixin directly into a CSS rule
#item {
    .box-shadow;
}
```

Mixins can also act like functions and take arguments to be used later in the class. These arguments can be given a default value.

```css
// Our mixin class
.box-shadow(@x: 2px; @y: 2px) {
    -webkit-box-shadow: @x @y 6px rgba(0,0,0,0.6);
    -moz-box-shadow: @x @y 6px rgba(0,0,0,0.6);
    box-shadow: @x @y 6px rgba(0,0,0,0.6);
}

// Giving the mixin some arguments
#item {
    .box-shadow(5px, 5px);
}
```

This allows for further customisation without having to write the vendor prefixed code more than once.

### Nested Rules

Nested rules are another great way to make writing CSS more efficient. It reduces the amount of CSS you have to write and, in my opinion, makes the code easier to read and maintain.

```css
// Our parent is our element with the id of 'item'
#item {
    color: #333;  // The colour for 'item'

    h1 {
        color: #111;  // the colour of h1 elements within the 'item' element
        font-weight: bold;
    }
    p {
        text-shadow: 1px 1px 2px #666;
    }
}
```

It's easy to see how this can be expanded to quickly style various different aspects of an element.

 

### Operators

Operators allow you to dynaimcally make calculations using properties and values. This is great for calculating widths for elements or changing property values.

```css
@colour: #111;
@border: 1px;

#item {
    color: @colour * 3;
    border-left: @border;
    border-right: @border * 2;
}
```

### Final Thoughts

These are only some simple examples of what can be done with LESS. It's no doubt that it is a very powerful tool in web development and has a bright future ahead of itself, as do the alternatives. There are some downsides though. As LESS is a preprocessor, it has to be processed prior to be served to the browser as pure CSS. How LESS is processed depends on your development environment. There are plenty of tools on the web that will help you to create the correct environment.

It's hard to not declare LESS as anything less than fantastic. The complexity runs much further than this short description can provide (you can check out these examples and more at Lesscss.org) and the ability to change global variables for an entire project makes re-skinning or re-theming a project a lot easier.

I do believe that the true power of LESS lies with larger, scalable projects. There isn't so much of a need for any type of preprocessor for smaller projects that will be built and not modified for some time. Saying that though, if you can build a development environment that allows for rapid development, then why not use it for all projects! I will be...
