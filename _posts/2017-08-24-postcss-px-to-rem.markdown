---
layout: learning-post
body-page-class:
excerpt_separator: <!--more-->
title:  "Postcss, PX to REM"
date:   2017-08-24
categories: learning CSS
---

Just a short post today, when I’m designing in the browser I like to work in px as it’s easier<!--more--> for my brain to calculate spacing but I like the flexibility rem units bring to layouts, now you can have the best of both worlds.

## Postcss-pxtorem to the rescue!

Have a look at the repo at [https://github.com/cuth/postcss-pxtorem](https://github.com/cuth/postcss-pxtorem), pxtorem will let you develop your designs in px but they will get converted to rem units automatically in your final output.

Postcss-pxtorem is a plugin for [Postcss](https://github.com/postcss/postcss) its been beautifully described as “a Swiss army knife for CSS production”, heres some more  [info on it](https://webdesign.tutsplus.com/tutorials/postcss-deep-dive-what-you-need-to-know--cms-24535).
