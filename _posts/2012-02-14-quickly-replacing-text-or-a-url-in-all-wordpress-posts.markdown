---
layout: post
title:  Quickly Replacing Text or A URL In All WordPress Posts
date:   2012-02-14 01:36:24
categories: tutorials
---

I recently moved a WordPress blog from one domain to another without a hitch, well at least I thought. Turned out that a lot of the links within the posts still pointed towards to old domain. This was poor for both site performance and SEO purposes, not forgetting that the domain would soon be cleared leaving the user at a dead end when they clicked the links. So here is a method to replace a series of text or a URL in all your WordPress posts...

### Changing Text or URL in WordPress Content

The first step is to access your database, whether that be using phpMyAdmin, MySQL Workbench or Sequel Pro. Select the WordPress database you wish to edit and open up a new SQL query window. Then place the code below in and hit GO (obviously replacing the example with your text or URL).

```sql
UPDATE wp_posts SET post_content = REPLACE(post_content, 'http://example.com', 'http://new-example.com');
```

That should be complete now. Check the links on your website and see them pointing in the right direction.

**NOTE:** Be careful when replacing text as any occurrence of this text within any of your posts content will be replaced. Also, it's a good idea to make a backup of the database before performing this
