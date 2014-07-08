---
layout: post
title:  Keeping Things Simple and Generic in jQuery
date:   2011-10-25 00:40:00
categories: javascript
---

Keeping code simple and generic makes programming in all languages a lot easier. For this tutorial, I'll be using jQuery. We're going to be creating some hidden elements, that when click on, will slide down. Let's get started

### The HTML
Firstly, check out this [demo](http://benholland.me/demo/generic-jquery.html) to see what we're going to be creating.

Ok, so the code we'll be working with:

```html
<div id="questions">
    <h3 id="title1">Question 1</h3>
    <p id="content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>

    <h3 id="title2">Question 2</h3>
    <p id="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>

    <h3 id="title4">Question 3</h3>
    <p id="content3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>
</div>
```


### The Original jQuery Code
The initial jQuery we'll be using is:

```javascript
$(document).ready(function(){
    $('#content1, #content2, #content3').hide();

    $('#title1').click(function(){
        $('#content1').slideDown();
    });

    $('#title2').click(function(){
        $('#content2').slideDown();
    });

    $('#title3').click(function(){
        $('#content3').slideDown();
    });
});
```

Although this code works, its not very efficient, and if we wanted to add more questions later, we'd have have to update the jQuery code as well as our HTML structure. Instead, we'll make the jQuery code more generic so that it fits all current and future questions. We're able to do this because there is a clear structure throughout the HTML, with the H3 tag and following paragraph tag being present everytime.

### Making The Code Better
To make this code better, we'll have to start with the HTML. Throw out all the ID tags and replace them with the same class for each element. So our structure will now look like this:

```html
<div id="questions">
    <h3 class="title">Question 1</h3>
    <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>

    <h3 class="title">Question 2</h3>
    <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>

    <h3 class="title">Question 3</h3>
    <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mi a dolor tristique non dignissim dui euismod.</p>
</div>
```

This way, we can use this same pattern for additional questions. Now we'll edit our jQuery code.

We can start by hiding all of the paragraph elements that have the class _content_:

```javascript
$('p.content').hide();
```

Then we can scrap the rest of the code and write on function. This function will listen for when a H3 tag with the class of _title_ is clicked. Then we're going to target the next paragraph element with the class _content_ and slide it down, like this:

```javascript
$('h3.title').click(function(){
    $(this).next('p.content').slideDown();
});
```

We can make the code even better by changing the _slideDown_ to _slideToggle_, making the paragraph elements slide up and down:

```javascript
$('h3.title').click(function(){
    $(this).next('p.content').slideToggle();
});
```

### Conclusion
And that's it, our code is now more efficient, more generic and allows for additional questions to be added without any changes being made. In conclusion, look at what your trying to do, see if there is a pattern or consistent structure within your HTML and write some generic code based upon that structure. Here's the final code:

```javascript
$(document).ready(function(){
    $('p.content').hide();

    $('h3.title').click(function(){
        $(this).next('p.content').slideToggle();
    });
});
```

[Check out the final demo here](http://benholland.me/demo/generic-jquery.html)
