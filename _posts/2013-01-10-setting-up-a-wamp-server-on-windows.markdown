---
layout: post
title:  Setting Up a WAMP Server on Windows
date:   2013-01-10 12:10:08
categories: tutorials
---

What you'll need:

* A Windows machine

### What is a WAMP server?

WAMP stands for Windows, Apache, MySQL and PHP and is a set of applications allowing a web server to run locally on a Windows machine. This makes build websites with server side content (PHP in our case) super easy.

This post, along with some others, is a guide to setting up a Linux server on your machine...

### Installing WAMP

Firstly, we need to grab a copy of WAMP. Head over to the [WampServer website](http://www.wampserver.com/en/, WampServer website), click the "start using WampServer" and download the correct version for you, depending on whether you're running a 32 or 64 bit version of Windows. (to see your version, right-click on 'My Computer' and find 'System Type'). I normally select 'WampServer (64 bits & PHP 5.4) 2.2E.

![]({{ site.url }}/assets/2013/01/wampserver-download.jpg)

Install the program, leaving all settings as default.

When the install is finished, launch [http://localhost](http://localhost, http://localhost) in your browser. You may be greeted by a pleasant message saying "Forbidden - You don't have permission to access / on this server". Let's fix this.

By default, the server we created will deny all incoming connections, so we need to change this. Click on the WAMP icon in the system tray, hover over `Apache` then click `httpd.conf`. Open this file and search for:

    <Directory "c:/wamp/www/">

Change this to `Allow from all`.

Now, when you go to [http://localhost](http://localhost, http://localhost), you should see the WAMP homepage!

![]({{ site.url }}/assets/2013/01/wampserver-localhost-homepage.jpg)

### Creating A Site

Open the WAMP directory again, and go to `www` folder. This is the where all your sites are going to be kept.

You should already see a `index.php` file in here. Open that within your text editor, add some text, save and close. Now head back to your browser and refresh the page to see the change.

Create a new folder called `test-site` and within this copy the `index.php` file, delete everything in it and add some markup:

    <h1>Welcome to Test-Site</h1>

Now go to `http://localhost/test-site` in your browser. As you can see, we have created a new website on our local server.

**Note:** If you are currently using Dropbox to sync projects across multiple machines, you can change the location of your Dropbox folder to the `www` folder. This will allow all your environments to sync automatically. (I have this setup on my work/home PC and laptop).

### Summary

Stopping here is fine. You can work using this directory format, but things can get tricky with larger sites when it comes to htaccess and image/file paths (they did for me). So to combat this we create 'virtual hosts'. They allow you to point a custom URL to a certain project folder, i.e. `http://local.test-site` redirects to our test-site folder.

To read more about this, checkout this post on "[How to Setup and Work with Virtual Hosts using WAMP Server](#, How to Setup and Work with Virtual Hosts using WAMP Server)"
