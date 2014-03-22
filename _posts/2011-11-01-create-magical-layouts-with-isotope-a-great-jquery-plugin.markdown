---
layout: post
title:  Create Magical Layouts With Isotope, A Great jQuery Plugin
date:   2011-11-01 20:35:41
categories: javascript
---

Isotope is an exquisite jQuery plugin for magical layouts that can readjustment themselves depending on the browsers dimensions. Along with filtering and sorting functionality, this is a truly powerful plugin. I came across the plugin whilst developing a project that required blocks of various heights to fit perfectly in the page. Accompanied by the Infinite Scroll plugin, Isotope made the project a great success. Check out what I'm talking about here...

[See a DEMO](http://isotope.metafizzy.co/demos/layout-modes.html, See a DEMO) 

### So How Can I Use Isotope In My Projects?

It's really simple. As with all jQuery plugins, it starts with downloading and importing. After that's done it's a simple task of setting some options. The standard layout for Isotope is **masonry**, which will fit all elements into a beautiful layout that fits perfectly. There are other layout options such as **straightDown** and **masonryHorizontal**. The joy of **Isotope** is that it will re-shuffle itself to fit the current browser dimensions, even after it's been resized.

![]({{ site.url }}/assets/2011/11/masonry.jpg)

### It's All Very Nice, But What Can I Change?

**Isotope** comes with a wide range of options for you to select, ranging from changing the type of animation engine it uses (CSS or animate) to adjusting whether the items are sorted in ascending order or descending. There is a great deal of customisation avalaible, alolt to do with the transitions and effects during the sorting or filtering process.

[See a list of all the options](http://isotope.metafizzy.co/docs/options.html, See a list of all the options)

### OK, So How Do I Implement This?

Well, the most basic implementation is to tell the plugin what container to apply itself too and what items to sort. It looks something like this:

```javascript
$('#container').isotope({
    itemSelector: '.element'
});
```

That's it really. So easy to implement and, if it tickles your fancy, very customisable. So why not give it a try...
