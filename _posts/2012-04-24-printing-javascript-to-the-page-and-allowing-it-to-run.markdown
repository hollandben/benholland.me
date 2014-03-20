---
layout: post
title:  Printing JavaScript to the Page and Allowing It To Run
date:   2012-04-24 23:23:35
categories: javascript
---

I encountered a very peculiar problem today, where all my JavaScript was being printed to the page whilst still running in the browser. I was quite sure what caused this so I did some investigating (slowly undoing all my changes to see what caused it. really basic I know!!) and finally found the problem was with a CSS change I had made.

Whilst adding some global styles using the `*` operator, I had added the code `display: block` to it. Turns out that this tells all HTML tags, `script` included, to display as a block element. Quite an interesting discovery really, and is a great way of easily printing out code, whether it be development purposes or simple for blog like this very one.

<!--- extract -->

So to just target the script tags, then use this CSS code:

    script {
        display: block;
        white-space: pre;
     }

Adding the "white-space: pre;" will preserve the line breaks exactly as they are in the code.

[Click here for an example...](http://benholland.me/demo/script-block.html, Click here for an example...)
