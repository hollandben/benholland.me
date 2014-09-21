---
layout: post
title:  Create A Stylish Contact Form - Part 3
date:   2011-10-28 17:46:46
---

Welcome to the final part of this tutorial on creating a stylish contact form. In this section, we'll be adding some AJAX functionality, submitting the form and tidying it up so it's ready for the world to see. When we've completed this part of the tutorial, we'll have this finished form which looks like this - [DEMO](http://benholland.me/demo/stylish-contact-form/stylish-contact-form-with-jquery-and-ajax.html)

## Part 3 - Adding AJAX and Submitting The Form

### The Setup

The final setup we need to do is getting our PHP file which is going to send the data within the contact form to where ever it needs to go. Create a new file in your project folder and call it "sendForm.php". Then copy the code below into it, remember to replaced the "$to" variable to the target email address. Replace all cases of "example.com" with your own website:

```php
<?php
    if(isset($_POST['submit'])){
        foreach($_POST as $key=>$value){
        $$key = $value;
        }
        $to      = "john@example.com";
        $subject = 'example.com - Contact Form';
        $message = "Message from ".$name.".\r\n Comment:\r\n".$comment;
        $headers = 'From: noreply@example.com' . "\r\n" .
            'Reply-To:'.$email."\r\n" .
            'X-Mailer: PHP/' . phpversion();
        if(mail($to, $subject, $message, $headers)) {
            echo "success";
       }
    }
?>
```

This will probably seem very alien to you, but you won't have to concern yourself with it so don't worry.

### Writing Our AJAX Code

The next thing we need to do is write our AJAX code. If you don't know what AJAX is, then here is a small definition (read more):

>AJAX (Asynchronous JavaScript and XML) is an approach which allows components within a web page to update individually rather than requiring a full web page update. This enables quicker and much richer web applications.

This basically means we can send forms, log in to restricted areas and load data without leaving the page we're currently on . So here is the function that will send our AJAX requsest:

```javascript
function submitForm(){
    var inputs = [];
    $('#contact_form :input').each(function() {
        inputs.push(this.name+"="+escape(this.value));
    });
    query = inputs.join('&');
    jQuery.ajax({
        type: 'post',
        url: 'sendForm.php',
        data: query,
        error: function() {
            $('.error').text("Something went wrong. Try again").fadeIn();
        },
        success: function(r) {
            if(response == "success"){
                $('.success').fadeIn();
            }
        }
    });
}
```

Let's break it down like we've been doing before.

```javascript
var inputs = [];
$('#contact_form :input').each(function() {
    inputs.push(this.name+"="+escape(this.value));
});
query = inputs.join('&');
```

This handy section of code prepares out data so that it can be sent the PHP file. We start by creating an array called inputs. We then loop through all the input fields in our form (it's slightly different that before because this line gets all inputs, including the submit button) and then pushing both the name and value into the array inputs. So the first input field it finds is our name. So it would push the string "name=Joe Blogs" into our array. The last line then joins all the elements in the array to give us our query. An example of this query would be:

 "name=Joe Blogs&email=joe@blogs.com&comment=I really like your website"
 The web browser will fill in the blanks with the appropriate special characters.

```javascript
jQuery.ajax({
    type: 'post',
    url: 'sendForm.php',
    data: query,
```

Here we begin our AJAX request. We have to set the type of request, in our case this is post. Then we tell the request what file to post the data to. This is our sendForm.php file. And finally we tell it what data to post to that url. This is the query we just created.

```javascript
error: function() {
    $('.error').text("Something went wrong. Try again").fadeIn();
},
success: function(r) {
    if(response == "success"){
        $('.success').fadeIn();
    }
}
```

Now we deal with the outcome of this request. If sending the request fails, then the error function is run, and the error div fades in containing the text "Something went wrong. Try again". If the request is successful, then it runs the success function.

You'll notice with the success function, we're bringing a parameter into the function in the form of "response". The value of response is whatever we get back from our sendForm.php file. So if the email is send successfully, the php file sends back the text "success". We check that the repsonse is equal to success and, if it is, we fade in the success div containing the text "Thank you for contacting us".

The last thing we need to do is change our section of code so that this function runs. If you remember, in the previous part of this tutorial we checked to see if there was any errors.Well this is were we run our function. So replace this code:

```javascript
if(errors == 0){
    $('.success').fadeIn();
}
```

With this code:

```javascript
if(errors == 0){
    submitForm();
}
```

And that's all. Everything is finished now. You can check out the final form should look like (it will vary in later IE versions).

[See finished form and more demos](http://benholland.me/demo/stylish-contact-form/stylish-contact-form-with-jquery-and-ajax.html)

You can also [download the source files for tutorial](http://benholland.me/demo/stylish-contact-form/stylish-contact-form.zip)

**NOTE:** To actually send an email using this form, your files will have to be hosted on a web server!!
