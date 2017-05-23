---
layout: post
body-page-class: jekyll blog
excerpt_separator: <!--more-->
title:  "Jekyll and, no not that Jekyll"
date:   2016-05-03
categories: Jekyll
---

One of the great things about the web is that it gives anyone a voice to talk about their thing and share it across the world, something I've not done much of recently.
<!--more-->

I continuously try to improve myself and blogs are a great way to pick up new stuff, so with this in mind a few weeks ago I decided to get a website up and running to enable me to do this and share some of my knowledge.

Designing your own website is notoriously difficult for designers but it shouldn't be, you can do anything you want so my approach was to quickly get something live and learn from users how to improve it.

## Sketching

I'd sketched down some ideas for the layout of the site and what info I wanted on there, I discussed this with some fellow designers, stuff like "what would you expect to see" - it's always useful to get feedback, especially at this stage.

I then moved onto to designing the home page in the browser.  I was using <a href="http://gulpjs.com/" target="_blank">Gulp</a> to speed up my workflow which included <a href="https://www.npmjs.com/package/gulp-sass" target="_blank">SASS</a> and <a href="https://www.browsersync.io/" target="_blank">Browser Sync</a>, this allowed me to quickly prototype a responsive design in literally a day.

## Getting feedback

Working with some talented designers at the Co-op has it's advantages, one of them being to utilize their critical eye, which I did with the prototype.  Feedback was good, the main issue being raised was my choice of shirt in the image on the home page!

With more confidence in the design I then went on to build the other pages.  What I've not mentioned is my time is precious, I work full time and have a young family so this was done in the space of a week, working in the evening after the girls had gone to bed!

## Sketching

I got the website in a state where I thought there was benefit for me to have it live.  It wasn't (isn't) the finished product but it's a chunk of something I can build from, so after some browser/device testing I pushed it live.

<a href="https://pages.github.com/" target="_blank">Github Pages</a> is where I chose to host my site, it's free which is great but I like being able to push files from the command line to the repository, it's quick and easy and seems a good fit for my future iterations.

OK, so now I've got something on the web; I only had one blog, so I had used the same layout I'd built for the other pages, but, I plan to do more blogs in the future so I need to change it - this is where <strong>Jekyll</strong> comes in handy...

## Jekyll

<img src="http://s3-eu-west-1.amazonaws.com/eskimo/jekyll.jpg" alt="Jekyll" />

<a href="https://jekyllrb.com/" target="_blank">Jekyll</a> is a static site generator and will build your pages from dynamic components like templates and partials but also it utilizes Liquid and markdown which bring lots of benefits when organizing/building your site.

The partials allowed me to create a generic header and footer which I could use with my default layout template, this then allows you to build other pages quickly using the Liquid includes.

Other benefits with the Liquid language are the tags and filters, these allowed me to pull in the first image from my blog into the blog list and other useful info.

As I delve deeper into Jekyll, I will share my experiences and write some more in depth articles.
