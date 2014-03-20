---
layout: post
title:  How to Setup and Work with Virtual Hosts using WAMP Server
date:   2013-01-10 22:36:19
categories: tutorials
---

What you'll need:

* A Windows machine
* A working copy of WAMP server ([go here if not](/tutorial/setting-up-a-wamp-server-on-windows, go here if not))

### What is a virtual host?

The Wikipedia definition is:

    Virtual hosting is a method for hosting multiple domain names (with separate handling of each name) on a single server (or pool of servers)

In my workflow, I use the prefix 'local' to keep my local sites separate from real ones. So for a site called 'test-site', I would create the virtual host 'http://local.test-site'. This allows the site to act like it would if I pushed it to a live server.

### Creating a Virtual Host

We'll need to modify a few configuration files to do this. So open the WAMP directory and navigate to:

    C:\wamp\bin\apache\apache2.2.22\conf\

Open up `httpd.conf`, scroll to the bottom and uncomment the following line by removing the hash:

    Include conf/extra/httpd-vhosts.conf

Now navigate to the `extra` folder and open up `httpd-vhosts.conf`

This file show be pre-populated with some dummy examples for you to use. Feel free to keep them, but I removed them. Add the following to create a new virtual host:

    <VirtualHost *:80>
        DocumentRoot "c:/wamp/www/test-site"
        ServerName local.test-site
        <Directory "c:/wamp/www/test-site">
          Allow from all
        </Directory>
    </VirtualHost>

Here, we are defining a new virtual host with the server name we want to use, the root of our site and the settings for this directory.

Now open up our machine host files, which can be found at `C:\Windows\system32\drivers\etc\hosts`.

This file keeps your host file entries. Here we tell the machine where to go if we request a certain URL. So here's an example of routing Google to our local host:

    127.0.0.1       www.google.com

Every request made to the url 'www.google.com' from this machine will redirect it to the IP 127.0.0.1 (our localhost)

To route to our test site, we create a new host entry:

    127.0.0.1       local.test-site

This will redirect any requests to `http://local.test-site` to our localhost, which will then make the `test-site` folder our default location.

You will find that there is already an entry for 'localhost'. Just add our new entry below this one.

### Summary

Easy peesy. So whenever you add a new site, create a new virtual host by changing the server name and root location, then add the server name to your host entries.

Our final step is to restart the WAMP server. You can do this by clicking on the WAMP icon in the system tray and hitting 'Restart all services'

**Note:** All this switching between host files can get annoying, so if you use Sublime Text, here's a neat tip - LINK
