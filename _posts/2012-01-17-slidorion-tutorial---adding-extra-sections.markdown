---
layout: post
title:  Slidorion Tutorial - Adding Extra Sections
date:   2012-01-17 02:13:35
categories: tutorials
---

I've had quite a few questions recently asking how to increase the number of sections displayed in Slidorion. If you are having trouble with this, then here's a quick and easy tutorial showing how to do this. Let's get started...

Firstly you'll need to download [Slidorion](http://www.slidorion.com, Slidorion). Extract the zip file and open up the "demo.html" file inside of the demo folder. We use this as it's the most basic example.

### Adding The New Elements

What we're trying to do here is increase the number of accordion sections and slider panels from 3 to 4.

**Note:** if the nummber of accordion sections doesn't equal the number of slider sections, the plugin will fail!!

We need to add some new code to our file. Here's a few lines of code we need to add, you can re-write it yourself or just copy the element above it:

```html
<div id="slide4" class="slide">
	![](../img/thor.jpg)
</div>
```

We add that code after all our other slider panels.

```html
<div class="link-header">New Accordion Panel</div>
<div class="link-content">
	<p>
		<strong>Thor</strong> was a movie about a man with a hammer. He was pretty cool and beat a lot of people up, mostly dude's made of ice.
	</p>
	<p>He's pretty badass so don't mess with him</p>
</div>
```

Here we are adding another accordion section, adding some new text. If we preview the changes we've made, they won't be visible. This is because the height of each accordion section is fixed depending on the height of your Slidorion.

To ammed this, we need to open the Slidorion CSS file. This is in the CSS folder in the zip file and is called "slidorion.css". This next part takes some trial and error. (Alternative you can use [Google Developer Tools](http://benholland.me//tutorials/chrome-developer-tools-change-the-element-state/, Google Developer Tools) or Firebug to change the height on the page dynamically, so you get the correct height straight away).

In our CSS file, scroll to the bottom where you'll find the element `#accordion > .link-content`. Inside this CSS rule is a height attribute (this will be commented). Simple change the height of this so that all your accordion tabs can now be seen. For this demo, a height of 221px will fit perfectly.

And there you have it. That is how to change the number of tabs shown within [Slidorion](http://slidorion.com, Slidorion). Enjoy!!

Feel free to leave your thoughts below and let me know if you need any further help.
