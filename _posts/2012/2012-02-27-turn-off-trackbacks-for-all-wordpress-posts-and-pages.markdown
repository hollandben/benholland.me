---
layout: post
title:  Turn Off Trackbacks For All WordPress Posts and Pages
date:   2012-02-27 23:58:18
categories: tutorials
---

Recently I've been getting a tonne of spammy trackbacks on this blog, resulting in very annoying emails and constantly logging in to tell WordPress it's a spam comment. If you don't how to disable these, then simply go to Settings > Discussion and untick the option "Allow link notifications from other blogs (pingbacks and trackbacks)". This will set the ping status of all future posts to false, preventing any trackbacks for those posts. But if you're like me and didn't select this setting (or it wasn't turned on during migration) you'll need to set the ping status of all the posts to false. Here's how...

So you'll need access to you're database to carry this out. If you don't have many posts then it's probably easier to uncheck the ping status in the Quick Edit menu of each post. But if your like me and have a lot of posts, you can use this SQL statment to turn it off for all posts and pages.

```sql
UPDATE wp_posts SET ping_status='closed' WHERE post_status = 'publish' AND post_type = 'post';
UPDATE wp_posts SET ping_status='closed' WHERE post_status = 'publish' AND post_type = 'page';
```

Copy these lines into the query window of your application and it's all done. I found this very useful so hopefully someone else will!!
