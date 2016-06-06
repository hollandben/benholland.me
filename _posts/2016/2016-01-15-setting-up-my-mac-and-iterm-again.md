---
layout: post
title: Setting up my Mac and iTerm... again!
categories: [productivity]
tags: [setup, productivity]
published: True
date: 2016-01-15 17:08:31
---

Over the last three years I've setup three new Macbooks for myself and found myself repeating the same steps pretty much every time. This month I setup my fourth, but did things slightly differently. Here's a few quick shortcuts I take to get setup quicker:

### Automate it stupid

A short while back I came across [Oliver J. Ash's mac setup repo][ollies-twitter], a set of scripts to help automate the initial faff of customising the new machine to your preferences - fantastic! I forked this and made some changes to [tailor my Mac settings and applications][my-setup-repo].

If you take a look at the `install-deps.sh` script, you'll see it installs [Sublime Text][sublime], my editor of choice. A massive annoyance of a new machine was re-installing all the packages I use, swapping key bindings and copying over snippets.

Oliver's script has a handy bit of code that clones a GitHub repository containing all the user settings for a Sublime instance. This means that with my new machine, it'll grab all my packages and settings from [my GitHub repo][sublime-settings-repo) and replace the install user folder with my own. It works surprisingly well and means that I could have my own Sublime setup up and running on any machine.

The only thing is, you've got to remember to occasionally push any changes back up to GitHub.

### Customising iTerm

In amongst the series of applications that are installed is [iTerm][iterm], a fantastic terminal replacement. Along with that, I install `zsh` and `oh-my-zsh`, all of which you should checkout if you don't currently use them. Unfortunately there's a few quirks with iTerm that slowdown my obsessive need to only use the keyboard.

**Home/End shortcuts**
If you don't have a full width keyboard, chances are you will use `⌘+←` and `⌘+ →` to go to the start and end of the line. Those keys aren't mapped automatically in iTerm, but you can add them:

1. Open iTerm's preferences (`⌘+,`), click on `Profiles` and then `Keys`.
2. Click the `+` button below the list of mappings and hit the keyboard shortcut you wish to use (either `⌘+←` or `⌘+ →`)
3. In the action dropdown, select `Send Hex Code`
4. Set the value as `0x01` for moving to the beginning of the line and `0x05` for the end of the line.

![image]({{ site.url }}/assets/2016/01/15/adding-new-key-maps-in-iterm.png)

**Deleting a word**
Another huge annoyance is not being able to delete a single word using the popular keyboard shortcut `⌥+⌫`. To enable this, follow steps 1-3 above and use the code `0x17`.

**Deleting the whole line**
Again, if you wish to delete an entire line using `⌘+⌫` then follow steps 1-3 above and use the code `0x15`.

**Maintain current directory when splitting a pane**
This is a real pane (whey!). Simple fix. Got preferences and click the `profiles` tab again but make sure that you are on the `General` tab. Look down to wear it says `Working Directory` and click `Edit` next to `Advanced configuration`. The bottom option should be what to do when you split a pane. Select `Reuse previous session's directory`. Done!

![image]({{ site.url }}/assets/2016/01/15/iterm-advanced-working-directory-settings.png)
![image]({{ site.url }}/assets/2016/01/15/maintaining-cwd-when-splitting-tabs-in-iterm.png)

[ollies-twitter]: https://twitter.com/OliverJAsh
[my-setup-repo]: https://github.com/hollandben/mac-setup
[sublime]: http://www.sublimetext.com/3

[sublime-settings-repo]: https://github.com/hollandben/sublime-settings
[iterm]: https://www.iterm2.com/
