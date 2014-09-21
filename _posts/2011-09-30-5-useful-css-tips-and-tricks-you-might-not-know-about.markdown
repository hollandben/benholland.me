---
layout: post
title:  5 Useful CSS Tips and Tricks You Might Not Know About
date:   2011-09-30 15:54:42
---

CSS has been around the web since the start of 1997 and hasn't stopped growing since, and with the introduced of CSS3 last year, the styling language is making coding websites a lot more efficient. Here are some of my tips and tricks that you might not know about...

### 1. Remove outline for WebKit browsers

Have you been coding a form and noticed that both Safari and Chrome add a blue or yellow border around your input elements? To remove this outline simple add the following code to your stylesheet:

```html
input[type="text"]:focus {
    outline: none;
}
```

Beware, these outlines are used for accessibility purposes so it is advised that instead of removing the outline, style it differently to suit your needs.

### 2. Center a fixed sized element

I recently used this trick to make sure that a pop up module I created at in the absolute middle of the screen. To do this, the element must have a specific height and width. Then set the position to absolute and set it left 50% and 50% from the top. This positions the element in the middle of the page, but using the top left corner of the element as your center. But we want the center to be the middle of our element. So to fix this, apply a negative margin to the left and at the top of half your width and height. Here's what the code should look like:

```
p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 400px;
    margin-top: -200px;   /* 1/2 of your element height*/
    margin-left: -250px;  /* 1/2 of your element width */
}
```

Also note that the parent container of this element should have a position set to relative.

### 3. Vertical align text

Vertically aligning text can be tricky, especially cross browser. So here's a cheeky solution. Align to text horizontally using _text-align:center_ as you normally would. Now set the _line-height_ of the text to equal the same as the parent container. In this case, the _line-height_ is equal to 100px:

```
p {
    width: 100px;
    height: 100px;
}

p {
    text-align: center;
    line-height: 100px;
}
```

This trick works well for vertically aligning words or sentences that fit on one line. When the text flows over multiple lines then it gets more tricky. Also remember to set _margin_ and _padding_ to 0.

### 4. Text transform

On a number of occasions this simple command has slipped my mind and let me to unnecessarily rewrite a lot of content. By using _text-transform_ you can avoid this:

```
p {
    text-transform:uppercase; // CAPITALIZES ALL TEXT
}

div p {
    text-transform: lowercase;  // sets all text to lower case
}

div p {
    text-transform: capitalize;// Capitalizes The First Letter Of Each Word
}
```

### 5. Use Google Fonts API to embed fonts easily

Google has a growing number of fonts online that you can quite easily embed into your website by adding a simple _link _in the head section of your webpage. Go to [Google Web Fonts](www.google.com/webfonts), choose your font and add the link provided into the head section. The link should look something like this:

```
<link href="http://fonts.googleapis.com/css?family=Spinnaker" rel="stylesheet" type="text/css">
```

Then use the name of that font in your stylesheet, targeting it via the _font-family_ command.

```
font-family: 'Spinnaker', Arial, serif;   /* Remember to have some fonts to fall back on */
```

And that's it for now. 5 quick tips and tricks that have made my styling life easier.
