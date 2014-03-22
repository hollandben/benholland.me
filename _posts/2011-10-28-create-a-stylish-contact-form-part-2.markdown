---
layout: post
title:  Create A Stylish Contact Form - Part 2
date:   2011-10-28 04:21:19
---

Welcome to part 2 of this 3 part tutorial on creating a stylish contact form. In this section, we'll be adding some functionality using jQuery, a JavaScript library. When I say functionality, I mean adding some extra features which will improve usability and also validating our form, itself from accidently submissions and mistakes.

This is what we'll be making in this tutorial - [DEMO](http://benholland.me/demo/stylish-contact-form/demo-part2.html, DEMO).

When you've completed all three parts of the tutorial, this is what you will see - [DEMO](http://benholland.me/demo/stylish-contact-form/stylish-contact-form-with-jquery-and-ajax.html, DEMO)

## Part 2 - Adding Functionality with jQuery

### The Setup

As with before, we need to download a file. This is going to be the jQuery source code, which can be found here. When that's done, we can get going...

### Setting Up jQuery

As with our CSS files, we need import the jQuery file so we can use it. Put this link in the head section of your page, pointing to the correct location of the file:

```html
<script src="js/jquery.js"></script>
```

### Giving The User Some Feedback

You'll notice that in our form that when a text field is selected, the initial value is still there forcing the user to delete it themselves. Because we're such kind people, we're going to do this form them using some jQuery. Here's the code we'll be using. Place this between two:

```html
<script type="text/javascript">
$('input#name, input#email, textarea#comment').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        $('.error').hide();
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
            $(this).css({'background-color':'', 'color':''});
        } else {
            $(this).css({'background-color':'rgba(255,255,255,0.7)', 'color':'#666'});
        }
    });
});
</script>
html

Ok, so if you're not similar with jQuery, this is probably going to scare the bejesus out of you. But don't fear, I shall explain:

First of all, we place all our jQuery between two script tags:

```html
<script type="text/javascript">
// code goes here
</script>
```

Then were telling the browser to run all the code when the browser loads. That's this line:

```javascript
$(document).ready(function(){
```

This line targets the fields we want to change when they are focused on. In our case, the name, email and comment fields:

```javascript
$('input#name, input#email, textarea#comment').each(function() {
```

The next line assigns the default value, i.e `name` or `email`, to a variable for future use:

```javascript
var default_value = this.value;
```

Next, we are going to set a function where, when the user clicks (or focuses) on it, the text changes or stays the same depending on it's value. This is done by checking if the current value is equal to the default value earlier. So if the current value is still "email” then it's removed and replaced with an empty field:

```javascript
$(this).focus(function() {
    $('.error').hide();                   /* we'll get to this later */
    if(this.value == default_value) {
        this.value = '';
    }
});
```

So that clears the input field if it's still it's default value. Now we check to see if the user has enter something. If they leave the field empty, it's replaced with the default value, but if it's been changed then we leave it alone. We detect when a user leaves a field by using the blur function. But if the user has entered something different, then the field remains a lighter colour with darker text (the same as when focused on), indicating that details have been entered. If the field is then emptied, the background and font colour resets itself to it's original setting:

```javascript
$(this).blur(function() {
    if(this.value == '') {
        this.value = default_value;
        $(this).css({'background-color':'', 'color':''});
    } else {
        $(this).css({'background-color':'rgba(255,255,255,0.7)', 'color':'#666'});
    }
});
```

So that's that done. Not too hard in the end and it looks really slick. Now on to validation.

 

### Validating Our Form

There are lots of validation plugins out there that your might want to experiment with, but I'm going to be making our own. Validation is vital when user's are required to enter data, whether it be a contact form or a login page. We don't want the user to accidently forget to fill in an important field, such as their email, so we are going to validate the form before it gets sent and let the user know if they've missed anything.

Firstly, we need to add some extra HTML and CSS. Add these two div tags to our contact form just above the submit button:

```html
<div class="success">Thank you for your message!</div>
<div class="error"></div>
```

And add this to your CSS:

```css
.success, .error {
    width:210px;
    height:33px;
    line-height:33px;
    font-size:12px;
    float:left;
}
.success {
    color: green;
}
.error {
    color: red;
}
```

Ok so what we've done here is add two div tags that will show our success and error messages along with the styles for them. Now let's move on to the jQuery code...

The code for this section is:

```javascript
$('.success, .error').hide();
$('#contact_form').submit(function(){
    var errors = 0;
    $('.error').hide();
    $('input#name, input#email, textarea#comment').each(function() {
        var value = this.value.toLowerCase();
        var name = this.name.toLowerCase();
        if(name == "email") {
        email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(!email_regex.test(value)){
                $('.error').text("Enter a valid email address").fadeIn();
                errors++;
            }
        }
        switch(value){
            case 'name *':
                $('.error').text("Please enter you're "+name).fadeIn();
                errors++;
                break;
            case 'email *':
                $('.error').text("Please enter you're "+name).fadeIn();
                errors++;
                break;
            case 'comment *':
                $('.error').text("Come on, Jamaica... say something!").fadeIn();
                errors++;
                break;
        }
    });
    if(errors == 0){
        $('.success').fadeIn();
    }
    return false;
});
```

Again, that looks reasonably complex and contains letters and symbols that make no sense at all. But its all good, we'll dissect each bit of the code and explain what it's doing.

```javascript
$('.success, .error').hide();
$('#contact_form').submit(function(){
```

Here we're hiding the success and error div tags we just inserted into the text so that the user doesn't see them. Then we're using the submit function the listen for when the form is submitted.

```javascript
var errors = 0;
$('.error').hide();
$('#contact_form .input-field').each(function() {
    var value = this.value.toLowerCase();
    var name = this.name.toLowerCase();
```

We then initialise a new variable errors so we can keep count of the errors, then we hide all the error messages again. This is for when the user has entered invalid data and we need to clear the error messages. Then we start to loop through each element with the class input-field, assigning that value and name to their own variables, just like we did earlier.

```javascript
if(name == "email") {
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!email_regex.test(value)){
        $('.error').text("Enter a valid email address").fadeIn();
        errors++;
    }
}
```

Now for the cool stuff. This section of code is checking that the email provided is actually an email. We do this using regular expressions (read more), which checks the structure of the email address, checking for things such as the ‘@' symbol and the address ending in `.com` or `.co.uk`. If this regular expression check fails, we set the text of the error div and then fade it in.

```javascript
switch(value){
    case 'name *':
        $('.error').text("Please enter you're "+name).fadeIn();
        break;
    case 'email *':
        $('.error').text("Please enter you're "+name).fadeIn();
        break;
    case 'comment *':
        $('.error').text("Come on, Jamaica... say something!").fadeIn();
        break;
}
```

Here we are using a switch statement to check the value of the field. So if the user didn't enter a name, the value is still "Name *”  and our error div is updated with the error message and then faded in. This is the same for email and comment. You can customise these names depending on what you called your input fields earlier.

```javascript
if(errors == 0){
    $('.success').fadeIn();
}
return false;
```

The last few lines check if there are any errors using our errors variable. If there are no errors then we fade in our success message. The last line is here to prevent the form from being submitted, overriding it's default action. We don't want to submit the form just yet, that comes in part 3.

And that's all for part 2. Here is the full jQuery code that we learnt today:

```html
<script src="js/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function()M{
    $('input#name, input#email, textarea#comment').each(function() {
        var default_value = this.value;
            $(this).focus(function() {
                $('.error').hide();
                if(this.value == default_value) {
                    this.value = '';
                }
            });
            $(this).blur(function() {
            if(this.value == '') {
                this.value = default_value;
                $(this).css({'background-color':'', 'color':''});
            } else {
                $(this).css({'background-color':'rgba(255,255,255,0.7)', 'color':'#666'});
            }
        });
    });

    $('.success, .error').hide();
    $('#contact_form').submit(function(){
        var errors = 0;
        $('.error').hide();
        $('#contact_form .input-field').each(function() {
            var value = this.value.toLowerCase();
            var name = this.name.toLowerCase();
            if(name == "email") {
                email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(!email_regex.test(value)){
                    $('.error').text("Enter a valid email address").fadeIn();
                    errors++;
                }
            }
            switch(value){
                case 'name *':
                    $('.error').text("Please enter you're "+name).fadeIn();
                    errors++;
                    break;
                case 'email *':
                    $('.error').text("Please enter you're "+name).fadeIn();
                    errors++;
                    break;
                case 'comment *':
                    $('.error').text("Come on, Jamaica... say something!").fadeIn();
                    errors++;
                    break;
            }
        });
        if(errors == 0){
            $('.success').fadeIn();
        }
        return false;
    });
});
</script>
```

This is what it should you should have now - [see part 2 DEMO](http://benholland.me/demo/stylish-contact-form/demo-part2.html, see part 2 DEMO)

[Go ahead to part 3 of this tutorial](http://benholland.me/news/create-a-stylish-contact-form-part-3/, Go ahead to part 3 of this tutorial)
