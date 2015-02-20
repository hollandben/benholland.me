---
layout: post
title:  Create a Basic Music Visualiser in jQuery
date:   2011-10-14 11:03:38
categories: javascript
---

In this tutorial, I'm going to show you how to create a basic music visualiser in jQuery. Although the visualiser won't be working in sync with any music, it's a great animation to put on your site and you can learn some cool stuff about jQuery. Let's start...

[See demo](http://benholland.me/demo/visualiser/visualiser.html)

[See advance demo (view in Chrome + FireFox)](http://benholland.me/demo/visualiser/visualiser-style.html))

### The Setup
We start by importing jQuery into our page along with a CSS reset file (this isn't necessary but is recommended) and lay the framework for our visualiser. This is pretty simple, a `<div>` containing several elements that will be our bars.

```html
<html>
    <head>
        <title>Music Visualiser</title>
        <link rel="stylesheet" href="reset.css" />
        <script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
    </head>
    <body>
        <div class="visualiser">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </body>
</html>
```

### Adding Styles
Next we add some styles to our bars.

```css
.visualiser {
    line-height: 200px;
}
.bar {
    width: 30px;
    height: 200px;
    margin-right: -2px;
    background-color: #2989d8;
    vertical-align: bottom;
}
```

First, we set the `line-height` of the `visualiser` container. This is the same as giving it a height, but we use `line-height` so that this height will stay constant else the bars will shift up as they change height. Next, we set the `width` and `height` of the bars. Bare in mind that the height of the bars should not exceed the `line-height` previously set. We then set the `margin-right` to -2 pixels so that the bars are closer together, give it a background and set the `vertical alignment` to bottom. This is important because it will change the height of the bars from the bottom up, which is what we want.

### Adding jQuery
Now we're ready to start animating our bars. We're going to do this by generating a random height of each bar every time we loop through the function.

```javascript
function genHeight(bar) {
    var minHeight = 20;
    var maxHeight = 150;
    var barHeight = Math.ceil((Math.random() * maxHeight) + minHeight);
    var time = barHeight * 5;
    bar.animate({
        height: barHeight
    }, time, function() {
        genHeight($(this));
    });
}
$(document).ready(function() {
    $(".bar").each(function(i) {
        genHeight($(this));
    });
});
```

Let's break this code down:

```javascript
var minHeight = 20;     // Ranges from 0 to maxHeight
var maxHeight = 150;    // Ranges from minHeight to height of bars
```

First we set the minimum and maximum height of the bar. The `minHeight` must be greater than 0 and no larger than the `maxHeight`. The `maxHeight` must be greater than the `minHeight` but not exceed the height we set in our CSS earlier.


var barHeight = Math.ceil((Math.random()*maxHeight)+minHeight);
```

This line generates a random height based upon our `minHeight` and `maxHeight`. Lets work inside to out starting with `Math.random.` This generates a random number which is then multiplied by our `maxHeight.` In my case, it would be `Math.random()*150`. We then add the `minHeight` to this number and use the function `Math.ceil` to round this number up.

```javascript
var time = barHeight * 5;
```

We randomly generate the time of the animation using the height of the bar. To make the animation of each bar shorter, lower the number and vice versa.

```javascript
bar.animate({
    height: barHeight
}, time, function() {
    genHeight($(this));
});
```

Here we animate the bar by using the .animate() feature of jQuery ([read more here](http://api.jquery.com/animate/)). We set the new height of the bar using barHeight and tell it the time for the animation using the variable time. Then we call the same function again when the animation is complete, creating an infinite loop.

This code kick starts the animation when the page has loaded.

Here is the full code:

```html
<html>
    <head>
    <title>Music Visualiser</title>
    <link rel="stylesheet" href="reset.css" />
    <script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
    <script>
        function genHeight(bar) {
            var minHeight = 20;
            var maxHeight = 150;
            var barHeight = Math.ceil((Math.random()*maxHeight)+minHeight);
            var time = barHeight * 5;
            bar.animate({
                height: barHeight
            }, time, function() {
                genHeight($(this));
            });
        }
        $(document).ready(function(){
            $(".bar").each(function(i) {
                genHeight($(this));
            });
        });
    </script>
        <style>
        .visualiser {
            line-height: 200px;
        }
        .bar {
            width: 30px;
            height: 200px;
            margin-right: -2px;
            background-color: #2989d8;
            vertical-align: bottom;
        }
        </style>
    </head>
    <body>
        <div class="visualiser">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </body>
</html>
```

And that's it. You now have a working jQuery music visualiser which is fully customisable. You can add gradients to bars and even [apply a reflection](http://benholland.me/demo/visualiser/visualiser-style.html). Feel free to comment with any improves or issues...

[Check it out on JSFiddle](http://jsfiddle.net/GeJgH/)
