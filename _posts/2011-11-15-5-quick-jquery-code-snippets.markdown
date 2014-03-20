---
layout: post
title:  5 Quick jQuery Code Snippets
date:   2011-11-15 14:49:16
categories: javascript
---

Here are 5 quick code snippets to help you either improve or learn some jQuery...

### Check If Element Exists

Simple and quick method of checking if an element exists

    $(document).ready(function(){
        if($(element).length){
            // Do something
        } else {
            // Do something else
        }
    });

### Check If Element Is Visible

Another quick method of checking if an element is currently visiable

    $(document).ready(function(){
        if($(element).length){
            // Do something
        } else {
            // Do something else
        }
    });

### Get Mouse Position

Finds the mouse position and outputs it to the console

    // Get Mouse Position
    $(document).ready(function(){
        $(window).mousemove(function(e){
            var mouseX = e.pageX;
            var mouseY = e.pageY;

            console.log("("+mouseX+","+mouseY+")");
        });
    });

### Disable Right Click Menu

Disables the right-click menu, useful if you don't want people to easily save your precise images

    // Disable Right Click Menu
    $(document).ready(function(){
        $(document).bind("contextmenu", function(e){
            return false;
        });
    });

### Prevent Default Action

Stops the default action (e.g. stops href="#" jumping to the top of the page). Also, "return: false" can be used, but "preventDefault" is a better method

    // Prevent default action
    $(document).ready(function(){
        $(element).click(function(e){
            e.preventDefault();
        }):
    });

There you are!! 5 quick and easy snippets of code