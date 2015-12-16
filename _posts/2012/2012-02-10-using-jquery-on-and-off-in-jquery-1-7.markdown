---
layout: post
title:  Using jQuery .on() and .off() in jQuery 1.7
date:   2012-02-10 00:35:08
categories: [javascript]
---

jQuery 1.7 was released back in November 2011 and contained a series of changes. One of those was the introduction of .on() and .off(). The purpose - to unify all types of event handling in jQuery and make code more efficient. Here's the changes and how to use the new handlers...

### Changes to .bind()

Nothing much changes here. Simple replace .bind() with .on() and you're sorted.

```javascript
// old way
$('div a').bind('click', function(event) {
    console.log('clicked');
});

// new way
$('div a').on('click', function(event) {
    console.log('clicked');
});
```


### Changes to .live()

jQuery's .live() was used to attach handlers to elements there were dynamically generated. It has been depreciated in jQuery 1.7 and replaced with .on(). These are the changes.

```javascript
// old way
$('div a').live('click', function(event) {
    console.log('clicked');
});

// new way
$('div').on('click', 'a', function(event) {
    console.log('clicked');
});
```


### Changes to .delegate()

The changes to .delegate() are similar to .bind(), except the selector and event have swapped places.

```javascript
// old way
$('div').delegate('a', 'click', function(event) {
    console.log('clicked');
});

// new way
$('div').on('click', 'a', function(event) {
    console.log('clicked');
});
```

### Changes to .unbind()

Nothing much changes here either. Simple replace .unbind() with .off() and you're sorted.

```javascript
// old way
$('#container a').unbind('click');

// new way
$('div a').off('click');
```

Or to unbind a specific handler, use:

```javascript
$('div a').off('click', clickHandler);
```


### Changes to .die()

The same as .live() but using .die().

```javascript
// old way
$('div a').die('click');

// new way
$('div').off('click', 'a');
```

### Changes to .undelegate()

Just the same as .delegate(), the selector and event have swapped places.

```javascript
// old way
$('div a').undelegate('a', 'click');

// new way
$('div a').off('click', 'a');
```
