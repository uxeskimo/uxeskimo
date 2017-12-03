---
layout: learning-post
body-page-class:
excerpt_separator: <!--more-->
title:  "Jekyll pagination"
date:   2017-12-02
categories: learning jekyll
---

Had a hectic few months, I've just bought a new house and had nearly 2 months in a hotel, I'm back and plan to<!--more--> be more consistent with this now.

So the learnings section on my website had Jekyll showing posts which have the category ‘Learnings' assigned to them.  Now I'm up to 10 posts, I want to be a bit more organised, for one it would effect performance of the site at some point if I just had all the posts on one page.  There are also usability considerations so I've settled for 9 posts per page, three rows of three.

The 'Learnings' page will always show the latest 9 posts then at the bottom of the page a button will link to the next 9 or however many remaining older posts there are to view.

<img src="https://s3-eu-west-1.amazonaws.com/eskimo/button-screen.png" alt="Pagination example">

To do this I used <a href="https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md#site-configuration">Jekyll-paginate-v2</a>.

It was really simple to set up, have a look at the readme on the above link for instructions to get it implemented on your site.
