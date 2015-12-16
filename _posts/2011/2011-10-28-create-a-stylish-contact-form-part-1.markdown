---
layout: post
title:  Create A Stylish Contact Form - Part 1
date:   2011-10-28 03:21:38
categories: [tutorials]
---

Almost every website has a contact page, and if it doesn't then it really should. So why not make a contact form that really impresses visitors and leaves a lasting impression. Creating a great looking is simple and easy to do. In this 3 part tutorial, I'll be showing you how to build a form using the latest CCS3 styles to make it eye catching, some jQuery to make it more interactive and topping it off with some AJAX to make the functionality of the form slick to really impress you users.

When you've completed all three parts of the tutorial, this is what you will see - [DEMO](http://benholland.me/demo/stylish-contact-form/stylish-contact-form-with-jquery-and-ajax.html)

## Part 1 - Styling The Form

### The Setup

Before we get going, you'll need to download [Eric Meyer's CSS reset file](http://meyerweb.com/eric/tools/css/reset/reset.css). Place the file in your project folder and your ready to go...

**Creating The HTML Form**

We need to create our HTML form. We're going to have 3 fields; name, email and comment followed by a submit button. This is what the form structure looks like:

```html
<div id="container">
    <h1>Drop Us A Note</h1>
    <form id="contact_form">
        <input type="text" id="name" class="input-field" name="name" value="Name *" />
        <input type="text" id="email" class="input-field" name="email" value="Email *" />
        <textarea id="comment" class="input-field" name="comment">Comment *</textarea>
        <input type="submit" id="submit" name="submit" />
    </form>
</div>
```

I've given each field an id and name associating to that fields purpose, along with a class of input-field which we will reference to later. Also, I've set an initial value for each field so the user knows what information is required.

**Styling The Form**

Next, we need to style our form. First things first, we need to import our CSS files. The reset.css file is used to eradicate cross compatibility issues with browsers by reseting the formatting of all elements, i.e. setting margins and padding to 0. Then we include our `styles.css` file (your site should already have one of these). Just put this link in the head section of your page, pointing to the correct location of your files:

```html
<link rel="stylesheet" href="css/reset.css" type="text/css" />
<link rel="stylesheet" href="css/styles.css" type="text/css" />
```

So here's all the styles I used. We'll go through it below:

```css
body {
    background: url(../images/bg.png) repeat;
    font-family: "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
}
h1 {
    color: #666;
    font-size: 28px;
    letter-spacing: -2px;
    text-shadow: 0 0 1px rgba(102,102,102,0.3);
    margin-bottom: 15px;
}
#container {
    width: 420px;
    height: 275px;
    position: absolute;
    left: 50%;
    top: 10%;
    margin-left: -220px;
}
#contact_form {
    padding: 20px 20px 60px 20px;
    background: #E8EDE8;
    background: rgba(190,200,190,0.6);
    border-radius: 10px;
    border: 10px solid #ddd;
    border: 10px solid rgba(170,170,170,0.6);
    box-shadow: 0 0 12px #aaa;
}
input, textarea {
    width: 300px;
    border-radius: 4px;
    border: none;
    padding: 10px;
    margin-bottom: 14px;
    display: block;
    color: #999;
    background: #ffffff;
    background: rgba(255,255,255,0.5);
    font-family:  inherit;
    font-size: 13px;
}
textarea {
    width: 360px;
    min-height: 120px;
    resize: vertical;
}
input: focus, textarea: focus {
    color: #666;
    outline: none;
    background: #ffffff;
    background: rgba(255,255,255,0.7);
}
input#submit {
    width: 120px;
    float: right;
}
input#submit: hover {
    color: #666;
    background: #ffffff;
    background: rgba(255,255,255,0.7);
    cursor: pointer;
}
```

Let's break this down bit by bit

```css
body {
    background: url(../images/bg.png) repeat;
    font-family: "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
}
h1 {
    color: #666;
    font-size: 28px;
    letter-spacing: -2px;
    text-shadow: 0 0 1px rgba(102,102,102,0.3);
    margin-bottom: 15px;
}
```

These are the styles for the body and all H1 tags. Most of them you should know, but here we encounter our first CSS3 feature, `text-shadow`. I'm using it for anti-aliasing purposes (read more here).

```css
#container {
    width: 420px;
    height: 275px;
    position: absolute;
    left: 50%;               /* position container half way across screen */
    top: 10%;
    margin-left: -220px;     /* move container left by half it's width */
}
```

Setting the width and height of the container that houses our form. I am positioning it in the middle of the page (then shifting it back half it's width) and 10% from the top.

```css
#contact_form {
    padding: 20px 20px 60px 20px;
    background: #E8EDE8;
    background: rgba(190,200,190,0.6);
    border-radius: 10px;
    border: 10px solid #ddd;   /* fallback colour */
    border: 10px solid rgba(170,170,170,0.6);
    box-shadow: 0 0 12px #aaa;
}
```

Set the width and height of the form and apply 20px padding around it. This then creates a 10px border around the form. border-radius is a new CSS3 feature which curves the border at each corner giving a softer and more stylish feel to the form. The final line uses the box-shadow feature which is also new in CSS3. It generates a shadow around the form. So in our case, the shadow is positioned horizontally 0px, vertically 0px and has a blur radius of 12px.

You'll notice that for both the background and border I've used rgba to set the colour instead of using the more conventional hex code. This is a new feature in CSS3, allowing you to change the opacity of a colour easily. I have also provided a fallback colour for older browsers. The reason why I'm reducing the opacity of the background and border is so the texture of the background shows through.

```css
input, textarea {
    width: 300px;
    border-radius: 4px;
    border: none;
    padding: 10px;
    margin-bottom: 14px;
    display: block;
    color: #999;
    background: #ffffff;       /* fallback colour */
    background: rgba(255,255,255,0.5);
    font-family: "Lucida Sans Unicode", Verdana, sans-serif;
    font-size: 13px;
}
```

Here we set styles for the input and textarea fields. The default border is removed and some styles associated with the text are applied.

```css
textarea {
    width: 360px;
    min-height: 120px;
    resize: vertical;
}
```

This extends the width of the textarea, not the other input fields, and sets a minimum height for it. We also tell the browser to only resize the textarea vertically. This allows the user to extend the textarea so they have more space.

```css
input: focus, textarea: focus {
    color: #666;
    outline: none;
    background: #ffffff;      /* fallback colour */
    background: rgba(255,255,255,0.7);
}
input#submit {
    width: 120px;
    float: right;
}
input#submit: hover {
    color: #666;
    background: #ffffff;      /* fallback colour */
    background: rgba(255,255,255,0.7);
    cursor: pointer;
}
```

Here we are styling the input fields and submit button so they give some feedback to the user. This is important to remember, as it gives the user a clear indicated that they can click a button or edit/insert text in a field. The outline is removed (read more here) for all fields and the font colour is set.

The submit button is floated right and a width is set. Also, the background colour is set the become lighter, the cursor is changed to a pointer (the hand) and the font colour becomes darker to make it clear that the button is active and can be pressed.

So that's it for part 1. This is what it should you should have now - [see part 1 DEMO](http://benholland.me/demo/stylish-contact-form/demo-part1.html)

[Go ahead to part 2 of this tutorial](http://benholland.me/coding/create-a-stylish-contact-form-part-2/)
