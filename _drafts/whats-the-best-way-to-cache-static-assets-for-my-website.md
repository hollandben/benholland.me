---
layout:
title: What's the best way to cache static assets for my website
categories: [performance]
tags: [performance, caching]
published: True
---

I've been answering this question a lot lately, whether it be helping colleagues on a new project or through issues raised on [grunt-cache-bust](grunt-cache-bust) so I thought I'd write down a short list of what a good caching strategy should look like for the majority of websites out there. Bare in mind, everyone has different needs so this may not be what's best for your site.

It's also worth noting that if you're not using some kind of build tool (Grunt/Gulp, make, rake etc) then some aspects of this won't work.

### What's the aim
There are two main reasons why static assets should be cached:

**Increase page load times after the first visit**
Making requests over the network, especially on mobile, is very slow. Downloading files may require multiple roundtrips between the client and server which will ultimately block the page from being rendered, reducing the quality of the user experience

**Decrease load on the server**
If a webpage serves 20 static assets per page, then the browser will make a minimum of 21 requests for each page that is loaded. Now imagine there's 10,000 pages loaded to your site every hour - the server is having to deal with 210,000 requests every hour. By caching those 20 static assets, we reduce the number of total requests made to the server which means it uses less resources and can handle more traffic.

### Tell the browser to cache it
When responding to a static asset request, we're able to tell the browser how long that file should be kept in it's cache. There are two recommended ways to go about it:

- `Cache-Control` - A clear indication to the browser to keep this asset in it's cache for a designated length of time. Read more about how to configure this on the [Google Developers Cache-Control page](cache-control)
- `E-Tags` - This isn't a method I would recommend, but you can read more at [the Google Developers E-Tags page](e-tags)


### Cache assets for all eternity
We only want the browser to request the file again when changes have been made, although the browser won't know when the file is changed. We can do this by completely changing the name of the file so when the browser looks for that file in it's cache, it won't find it and will request it from the server.

I've had a few requests on the [grunt-cache-bust project](grunt-cache-bust) to keep a feature which allows the user to specify a string to be appended to the file name, i.e. the last commit number or build version. My advice would be to most definitely not do this. It means that upon every release the user is forced to re-download all assets. Your CSS or JS may change regularly, but if you're also caching images (which you most definitely should be) then the user will be forced to download them all again. A more desirable approach would be to only update the file names for the files that contains changes. We can do this by hashing the file contents and appending a substring of that hash to the file name. That way, the name of the file will only change when the contents of that file changes.

### Each iteration should be it's own file

[grunt-cache-bust]: https://github.com/hollandben/grunt-cache-bust
[cache-control]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control
[e-tags]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#validating-cached-responses-with-etags
