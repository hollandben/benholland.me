---
layout: post
title:  Generating A Random String in PHP - Useful For Securing Passwords
date:   2012-03-19 11:21:09
categories: tutorials
---

A lot of projects I've worked on recently have required unique ids or numbers being entered into a database. I've been working with this function for a while now and it's proved very useful, so thought I would share it with everyone...

### Generating a Random Number

    function genRandomString($len)  {
        $str = "";
        $char = "012346789";
        for ($i=0; $i<$len; $i++) {
            $str .= substr($char, mt_rand(0, $len-1), 1);
        }
        return $str;
    }

This function creates a for loop based on the length variable `$len` we pass it. In this loop, a new number is added to our `$str` variable by randomly selecting a number from our $char string. This string can contain whatever characters you want to use. After the loop has finished, our newly generated string is returned.

<!--- extract -->

### Generating a Random String

    function genRandomString($len) {
        $str = "";
        $char = "012346789abcedfghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ";
        for ($i=0; $i<$len; $i++) {
            $str .= substr($char, mt_rand(0, $len-1), 1);
        }
        return $str;
    }

This function is the same as before, except I've included a lot of extra characters. If you are using this to store unique ids, beware that there is the slight possibility that the same string will be generated.

This is exceptionally rare though. If we use the function above and pass it a length of 15 characters, then the chances of the same string coming out is 1 in 7.69x1026. So not much of a chance. The odds of it happening for the number in the first function, with a length of 8, is 1 in 10 million, so again, not much of chance.

This has come in useful for me quite a lot, so let me know if you find any awesome uses for it.