---
layout: post
title:  Zen Coding - The Best Thing Since Sliced Bread
date:   2011-10-14 13:28:31
categories: resources
---

Ever sat there writing line after line of repetitive code, adding new list item after list item and applying a sequential ID to all of these? Wouldn't it be so much easier if there was a tool that could make this process a thousand time easier. A tool that would change the speed that you could produce quality HTML and CSS code? Well your prayers have been answered with Zen Coding, an amazing plugin for all major editors...Trying to describe how Zen Coding works is hard, so I'm going to show you. Say I wanted to create a large navigation with 8 list items with links inside them. Here's how I would write this:

```
ul>li*8>a
```

And this is the output:

```
<ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

Incredible right? Now lets say I want to add the same class to each of these item. Here's how I would write it:

```
ul>li.item*8>a
```

And this is the output:

```
<ul>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
</ul>
```

WOW, so easy!! But what if I wanted to add a sequential ID to each item. Well, here's how I would write it:

    ul>li#link$.item*8>a

And this is the output:

```
<ul>
    <li id="link1" class="item"><a href=""></a></li>
    <li id="link2" class="item"><a href=""></a></li>
    <li id="link3" class="item"><a href=""></a></li>
    <li id="link4" class="item"><a href=""></a></li>
    <li id="link5" class="item"><a href=""></a></li>
    <li id="link6" class="item"><a href=""></a></li>
    <li id="link7" class="item"><a href=""></a></li>
    <li id="link8" class="item"><a href=""></a></li>
</ul>
```

What's that sound? Oh that's right, it's your mind blowing!! OK let's get serious here. This is an amazing plugin, one that I have only been using for 2 days and now the thought of writing the above code without Zen Coding's assistance scares me. And I have only scratched the surface. You can use it for all HTML and CSS code ([see the cheat sheet here](http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf, see the cheat sheet here)).

So my advice to you? Go to the [Zen Coding project](http://code.google.com/p/zen-coding/, Zen Coding project), download it and install it for whatever software you use. It fully supports a range of editors such as:

* Sublime Text 2
* Aptana/Eclipse
* NetBeans
* Notepad++
* TextMate
* Coda
* Expresso
* Komodo Edit/IDE
* Dreamweaver
* BBEdit/Textwrangler
* Visual Studio

*EDIT*:

Using the wrap around feature, you can turn a plain list of items into HTML code. Here's how:

* Aptana/Eclipse
* NetBeans
* Notepad++
* TextMate
* Coda

Combined with:

```
ul#nav>li.item-$*>a
```

Gives us:

```
<ul id="nav">
    <li class="item-1"><a href="">Aptana/Eclipse</a></li>
    <li class="item-2"><a href="">NetBeans</a></li>
    <li class="item-3"><a href="">Notepad++</a></li>
    <li class="item-4"><a href="">TextMate</a></li>
    <li class="item-5"><a href="">Coda</a></li>
</ul>
```

Let me know if you've found any other cool features...
