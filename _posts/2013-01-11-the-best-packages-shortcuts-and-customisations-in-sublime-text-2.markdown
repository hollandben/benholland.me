---
layout: post
title:  The Best Packages, Shortcuts and Customisations in Sublime Text 2
date:   2013-01-11 06:17:15
categories: resources
---

The best thing about Sublime Text 2 is the amount of customization it gives the user and the ease in which it does this. Here are a list of the best features I use on a day-to-day basis...

### Projects

During the day I can work on up to 5 or 6 various tasks, so having my different codebases setup into projects is extremely useful. All you need to do to create a new project is drag a folder into your sidebar, go to Project in the menu bar and click save as. You can add multiple folders to a project.

To easily switch between projects, hit `Ctrl+Alt+P` (Cmd+Shift+P on Mac) and start searching for the project you're after.

Once within a project, you can hit `Ctrl+P` (Cmd+P) and search for any filename within that project. Pretty cool stuff!


### Packages

There are loads of packages out there for Sublime. The number is always growing, and to keep most of them in one place, Package Control was created.

You first need to install [Package Control](http://wbond.net/sublime_packages/package_control). Once that's done, hit `Ctrl+Shift+P` (Cmd+Shift+P). This is the command palette and lists all available commands currently installed. Start typing "Install Package" and hit enter. From here you can search for packages within the Package Control repo. You can even manually install them using a link (usually a public GitHub link).

Here are the packages I used often:

* **SublimeCodeIntel** - Code intelligence plugin ported from Open Komodo Editor
* **SublimeLinter** - SublimeLinter comes with built in linters for loads of languages
* **Prefixr** - A Sublime Text 2 plugin to run CSS through the Prefixr API
* **Emmet** - (previously Zen Coding) lets you use shortcuts to generate HTML and CSS
* **Clipboard History** - Saves previously copied text for easy retrieval
* **Code Alignment** - Easily align code using colons, commas etc
* **JsFormat** - Formats given JavaScript code
* **CssLisible** - Tidy up CSS based on given rules
* **FileDiffs** - Compares two given files
* **LESS build** - Adds a build engine to compile LESS
* **Markdown Previewer** - Lets you see a temp file of your markdown code. Comes with GitHub flavoring option
* **Sidebar Enhancements** - Adds windows functionality to the sidebar (right-click menu)
* **Themes** - [Colour Schemes</a> : <a href="https://github.com/chriskempson/tomorrow-theme">Tomorrow Theme](https://github.com/daylerees/colour-schemes)

There a loads more out there, so let me know if you find some more useful ones


### Special Customizations

Sublime comes with lots of various options that you can configure to your needs. You'll find all the available settings in the default settings file (Preferences > Settings - Default). It's filled with comments explaining what each option does, so if some of the ones below don't make sense, do a quick search for them:

```
"font_face": "Consolas",
"font_size": 9,
"caret_style": "phase",
"highlight_line": true,
"line_padding_top": 1,
"line_padding_bottom": 1,
"bold_folder_labels": true,
"highlight_modified_tabs": true,
"tab_size": 4,
"translate_tabs_to_spaces": true,
"trim_trailing_white_space_on_save": true,
"dictionary": "Packages/Language - English/en_GB.dic"
```

These are some more handy settings to look into:

```
"spell_check": false,
"gutter": true,
"line_numbers": true,
"save_on_focus_lost": false,
"highlight_modified_tabs": false,
"folder_exclude_patterns": [".svn", ".git", ".hg", "CVS"],
"file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb"],
```


You can have specific settings set for each project as well. So I have a project which contains all my blog posts. Within this project, I have the option `spell_check` turned on. You can enable settings for projects by going to *Projects > Edit Project* and adding your settings

```javascript
{
    "folders":
    [
        {
            "path": "/C/folder/project_location"
        }
    ],
    "settings":
    {
        "spell_check": true,
        "dictionary": "Packages/Language - English/en_GB.dic"
    }
}
```


### Shortcuts

Knowing shortcuts in any program can increase productivity massively. Here are the ones I use most often (replace Ctrl for Cmd on a Mac). Again, all the key bindings live in *Settings > Key Bindings - Default*

```
Ctrl+P                 => Search for file in project
Ctrl+Shift+P       => Launch command palette

Ctrl+F                  => Find
Ctrl+H                 => Find and Replace
Ctrl+Shift+F        => Find in Project

Ctrl+D                 => Select current word
Ctrl+Shift+D       => Duplicate line or selected text

Ctrl+Shift+Up         => Move line up
Ctrl+Shift+Down    => Move line down

Alt+Shift+1        => Split into 1 of columns
Alt+Shift+2        => Split into 2 of columns
Alt+Shift+3        => Split into 3 of columns
Alt+Shift+4        => Split into 4 of columns

Alt+Shift+5        => Split into a grid of 4

Alt+Shift+8        => Split into a 2 rows
Alt+Shift+9        => Split into a 3 rows

Ctrl+B                  => Build
Ctrl+R                  => Shows all methods/functions/selectors in that file
Ctrl+K, Ctrl+B      => Hide/Show sidebar
Shift+F11             => Distraction Free Mode
```

One shortcut that gets it's own special mention is `Ctrl+T`. This bad boy allows you to create a new file relative to the file you are in now. A small bar will appear at the bottom of the window allowing you to type the folder and file names. Here are some examples:

```
// Lets say we are currently editing the file' /css/main.css' and we hit Ctrl+T
// If we create a new file from here with the following paths...

fonts.css                => creates the file 'fonts.css'
module/file.css     => creates the file 'file.css' in the 'modules' folder
../index.html         => creates the file index.html in the parent folder

// if a folder doesn't exist, Sublime will create it for us
// you can't create a new file which already exists
```


### Snippets

Snippets are incredible useful. They are the things that popup in the autocomplete box as you type. If you find yourself writing the same code over and over, put it into a snippet.

To create a snippet, go to *Tools > New Snippet*. A new window will open with some code and some options.

Firstly, the snippet content is the code we want to produce. The text mark with a `$` signifies a tab point. So when the user selects the snippet, the cursor moves to position one `${1:this}`. If tab is hit, then the cursor moves to position 2 `${2:snippet}`.

The text within the brackets is the default values and will be highlighted when you get to that position. Alternatively, if you don't want a default value, just use `$1` or `$2`.

```xml
<snippet>
    <content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <!-- <tabTrigger>hello</tabTrigger> -->
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <!-- <scope>source.python</scope> -->
</snippet>
```

You can set a tabTrigger, which is the word or phrase to trigger than snippet showing up in the autocomplete results. Pick something you will easily remember. The final option is scope which only shows that snippet up for a certain syntax

Here are a few examples I created...

```xml
// creates console.log('') and places the cursor inside of the parentheses

<snippet>
    <content><![CDATA[
console.log('$1');
]]></content>
    <tabTrigger>console</tabTrigger>
    <scope>source.js</scope>
    <description>console.log</description>
</snippet>


// quickly adds jQuery source to a file

<snippet>
    <content><![CDATA[
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
]]></content>
    <tabTrigger>jQuery</tabTrigger>
    <description>imports jQuery</description>
</snippet>
```
