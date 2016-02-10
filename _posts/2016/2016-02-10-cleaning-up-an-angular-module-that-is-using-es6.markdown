---
layout: post
title: Cleaning up an Angular module that is using ES6
categories: [javascript]
tags: [javascript, angular, es6, es2015, esnext]
datetime: 2016-02-10 15:20:14
---

After working primarily with vanilla JavaScript over the past year, it's been a bit of shock to return to an AngularJS (v1.4.9) application and re-learn the pain of dependency injection, especially in an almost fully compatibilty ES6 world.

I've taken an example module that I can across and have "cleaned" it up to follow my preference along with comments as to why. Ideally, I would have posted the tests as well to show how they would be simplified in conjunction with this clean up.

#### Original module
<script src="https://gist.github.com/hollandben/2f1b9e6797befdbf39b5/532a160adf3214c69a0ea469374d662c7187b746.js"></script>

#### "Cleaned" module
<script src="https://gist.github.com/hollandben/2f1b9e6797befdbf39b5/5a2d350f4863103ab2afbe921eed6c1f6b48b854.js"></script>

#### "Cleaned" module without comments
<script src="https://gist.github.com/hollandben/2f1b9e6797befdbf39b5/ee271c647e888ca1a2c184acc16f98842ef88ee5.js"></script>

Feel free to let me know your thoughts/suggestions by commenting [on the gist](https://gist.github.com/hollandben/2f1b9e6797befdbf39b5)
