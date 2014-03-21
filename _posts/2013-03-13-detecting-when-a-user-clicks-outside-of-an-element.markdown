---
layout: post
title:  Detecting When A User Clicks Outside of An Element
date:   2013-03-13 15:30:00
categories: javascript
---

I was recently working on a complex problem involving a popup element. I wanted the popup to disappear when the user interacted with any other element on the page, except for the popup itself.

Like most, I Googled the problem and very few elegant solutions came up. There was one however. Take a look below:

```javascript
$(document).mouseup(function(e) {
    var container = $("SELECTOR");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});
```

The snippet of code checks if the click element is either the popup itself or one of it's children. You can read more about the `has` method in the [jQuery API documentation](http://api.jquery.com/has, jQuery API documentation).

### EDIT

It was pointed out by [Ben Howdle</a> and <a href="http://danharper.me/" target="_blank">Dan Harper](http://benhowdle.im, Ben Howdle</a> and <a href="http://danharper.me/" target="_blank">Dan Harper) that there is an even simpler way to solve this problem. Check it out:

    var popup = $('#popup');

    $(document).on('click', function(){
        popup.hide();
    });
    
    popup.click(function(e) {
        e.stopPropagation();
    });

You can [see this in action</a> and readup about <a href="http://api.jquery.com/has" target="_blank">e.stopPropagation](http://jsfiddle.net/hollandben/RqPfV/1/, see this in action</a> and readup about <a href="http://api.jquery.com/has" target="_blank">e.stopPropagation) in the jQuery documentation.
