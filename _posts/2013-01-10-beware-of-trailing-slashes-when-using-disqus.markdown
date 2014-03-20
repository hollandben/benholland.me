---
layout: post
title:  Beware of Trailing Slashes When Using Disqus
date:   2013-01-10 22:47:27
categories: news
---

I ran into a small bug with the commenting system [Disqus](http://www.disqus.com, Disqus) today. After migrating all my posts from WordPress to Disqus, I noticed that comments weren't appearing on some blog posts. With some further investigation, it turned out that my WordPress URLs all had a trailing slash at the end, whereas in the new build of my site, they don't. This meant that the URLs I was serving visitors and those that were in the system didn't match.

It's not a complicated bug to deal with, but something that can be easily missed. To solve the problem, I added this to my htaccess file. It redirects all URLs without a trailing slash to one does:

    # add trailing slash
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^.*[^/]$ /$0/ [L,R=301]
