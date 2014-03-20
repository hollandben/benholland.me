---
layout: post
title:  How To Create A Custom Widget in WordPress - Latest Posts
date:   2012-02-22 19:09:20
categories: tutorials
---

When I login to this or any other WordPress blog, I am always greeted with the same boring and useless widgets. Ok some aren't useless. Recent drafts and recent comments are useful and at a push the 'Right Now' widget, but that is rarely used. So I asked myself, what would I like on the homepage? Well I find myself from time to time having to go back into the admin area to amend a spelling mistake that I missed before publishing a post. So creating a "Latest Posts" widget that displays the most current posts would be a good place to start. Adding widgets in WordPress is really simple. Here's how...

### Adding Our Widget

Something I never realised when I started working with WordPress (just like Neo in The Matrix) is the functions.php file in your theme's folder extends into the admin side of the site. This makes it so easy to add or edit things without touching the core code. So locate your functions.php file (if you don't have one, create one in your theme folder). Add the following code to the file:

    // Create your hook
    function latestPostsWidget() {
        wp_add_dashboard_widget('latest-posts', 'Latest Posts', 'lastestDashboardPosts');
    }

    // hook your widget
    add_action('wp_dashboard_setup', 'latestPostsWidget' );

We are creating our hook and adding this hook to the action 'wp_dashboard_setup'. So when the dashboard loads, our function 'latestPostsWidget' runs. We then add our widget the dashboard. The first parameter is the widgets ID, the second is the name that will be displayed in the widgets handle and the last is the content. We are calling another function which will load in the latest posts. This function looks like this:

    // What your Widget Does
    function lastestDashboardPosts() {
        $content = '<table><thead><tr><th>Title</th><th>Author</th><th>Date</th></thead></tr>';
        $args = array('numberposts'=>4, 'orderby'=>'post_date');
        $posts = get_posts($args);
        foreach($posts as $post):setup_postdata($post);
            $content .= '<tr>
                <td>'.$post->post_title.'</td>
                <td>'.get_the_author($post->post_author).'</td>
                <td>'.date('d/m/Y', strtotime($post->post_date_gmt)).'</td>
            </tr>';
        endforeach;
        $content .= '</table>';
        echo $content;
    }

What we want this function to do is create a table of the last 5 posts and display it inside out widget. The function starts by creating a string called 'content'. This will house everything we are outputting. The first set of HTML are the headings for each column. I've chosen 'Title', 'Author' and 'Date'.

Now we need to query the database for our most recent 4 posts. Create some arguments in the 'args' array like I have done. If you want to display something different the 4 posts, then change the number to the desire number of posts. You can read more on how to get posts here.

We then request the data and loop through each set of results. Within this loop, we are adding some more code to our $content string. So we start by adding a new row, and then the post title, the author and finally the date it was published. The code at the end simply ends the foreach loop, adds the closing table tag to our string and echos $content so it can be displayed as our widget.

If you've done that all correctly then the widget should look something like this...
![]({{ site.url }}/assets/2012/02/latest-posts.jpg)

### Finishing Touches

So the widget displays our latest posts, but they aren't currently linked to each post. So we need add a bit to our code so that the post title is linked with the desired target. This is the amended code:

    foreach($posts as $post):setup_postdata($post);
        $content .= '<tr>
            <td><strong>[ID.'&action=edit" title="Edit "'.$post->post_title.'"">'.$post->post_title.']('.get_bloginfo(, ID.'&action=edit" title="Edit "'.$post->post_title.'"">'.$post->post_title.')</strong></td>
            <td>'.get_the_author($post->post_author).'</td>
            <td>'.date('d/m/Y', strtotime($post->post_date_gmt)).'</td>
         </tr>';
      endforeach;

Also, we need to style the widget. There are various ways to do this. You can either add the styles to the admin CSS file somewhere in the wp-admin folder. Or you can install the plugin WP Admin Theme. This is a plugin that adds an option to the settings menu and allows you to write some additional styles for the admin section without having to edit any of the core files. Whichever method you used, these are the styles I applied:

    #latest-posts table {
        border-collapse: collapse;
        width: 100%;
    }
    #latest-posts thead {
        text-align: left;
        border-collapse: collapse;
    }
    #latest-posts thead, #latest-posts thead .headers, #latest-posts thead .headers th {
        padding: 3px 22px 3px 3px;
        border-bottom: 1px solid #D0DFE9;
        border-collapse: collapse;
    }
    #latest-posts table td {
        padding: 10px 22px 10px 3px;
        border-bottom: 1px solid #dadada;
        border-collapse: collapse;
        color: #21759B;
    }
    #latest-posts table td:last-child {
        color: #666;
    }

And that's it done!! You should now have a fully functional widget. This process can be copied to create any kind of widget you need really. Feel free the comment with any other suggestions, I'd love to hear them!!
