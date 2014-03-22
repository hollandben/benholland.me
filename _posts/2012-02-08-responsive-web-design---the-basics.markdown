---
layout: post
title:  Responsive Web Design - The Basics
date:   2012-02-08 00:36:44
categories: html & css
---

A term that has been thrown around as the biggest trend in 2012 is responsive web design, something that you should definitely take note of. A responsive design solves the problem of providing different cross-platform websites, mainly mobile sites. The recent increase in mobile devices and tablets capable of browsing the web with ease has been a main catalyst for the technique as it allows for changes to be made to a site depending on the screen dimensions. In theory, you're creating one website to rule them all! Ok that's a bad Lord of the Rings pun, but lets's get stuck in to what it's all about...

### What Is Responsive Web Design

RWD is a technique created by [Ethan Marcotte</a> back in 2010, that adjusts certain aspects of a website depending on the dimensions of the viewing screen. Loosely based on Fluid Grids, something that was never that popular, the technique moves away from having a fixed grid such as 960px and encourages you to utilise the full size of the screen. Two excellent examples of this are <a href="http://wwww.smashingmagazine.com/">Smashing Magazine</a> and <a href="http://www.css-tricks.com/">CSS-Tricks](http://www.alistapart.com/articles/responsive-web-design/, Ethan Marcotte</a> back in 2010, that adjusts certain aspects of a website depending on the dimensions of the viewing screen. Loosely based on Fluid Grids, something that was never that popular, the technique moves away from having a fixed grid such as 960px and encourages you to utilise the full size of the screen. Two excellent examples of this are <a href="http://wwww.smashingmagazine.com/">Smashing Magazine</a> and <a href="http://www.css-tricks.com/">CSS-Tricks). Try adjusting you're browser size and you'll see how the website responds.

CSS3 media queries are the key to responsive web design. They are expressions that check for conditions and apply different styles depending on these conditions. Confused?? Let's take a look at an example of a media query.

```css
@media screen and (max-width: 960px) {
    .class {
        color: #000;
    }
}
```

In this query, we're checking to make sure the media is a screen and if the width is 960px or less. If these conditions are true, then the color of the class will become black. I'll delve further into this later.

### How To Implement These Queries

Firstly, we need to do some house cleaning to make sure that the website is displayed correctly in our browser. Include the meta tag below:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tag tells our browser that it's width should be the same as the viewport.

Internet Explorer 8 and below don't support media queries so you should include this Javascript file to sort that.

```html
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
```

There are 2 basic stages to implementing a responsive design. We first need to create our HTML structure. This can be seen below:

```html
<div id="wrapper">
    <header>This Is The Header</header>
    <section></section>
    <aside></aside>
    <footer>This is the footer</footer>
</div>
```

The styles

```css
#wrapper {
    width: 960px;
    margin: 20px auto;
    background: #fff;
}
header {
    width: 100%;
    font-size: 200%;
    border: 1px solid #ddd;
    background: #eee;
    height: 80px;
}
section {
    width: 65%;
    border: 1px solid #ddd;
    background: #eee;
    float: left;
}
aside {
    width: 28%;
    border: 1px solid #ddd;
    background: #eee;
    float: right;
}
footer {
    width: 100%;
    height: 60px;
    font-size: 120%;
    background: #eee;
    border: 1px solid #ddd;
    clear: both;
}
```

I've create a simple HTML structure and styled each element. As you can see, with the exception of the wrapper, all the widths are in percentages and not pixels. This is the bases of a responsive design and always for a our elements to change depending on the parent's dimensions.

Next we need to add some media queries. What I want to do is make sure the wrapper stays inside of the screen when the width is smaller than the 960px initially set. Then, when the screen gets to 600px I want to remove the aside to make more space, also increasing the main body of text to 100%. Here's the code.

```css
@media screen and (max-width:960px) {
    #wrapper {
        width: 98%;
    }
}
@media screen and (max-width:600px) {
    aside {
        display: none;
    }
    section {
        width: 100%;
    }
}
```

And that's basically it. You can see a [working demonstration](http://benholland.me/demo/repsonsive-web-design-structure.html, working demonstration) - all you need to do is resize the browser window and you can see how the elements changed based on the width of the viewport.

So there's a quick introduction to responsive web design. Have a play around with media queries and see what you can come up with, they're pretty cool!!
