---
layout: learning-post
body-page-class:
excerpt_separator: <!--more-->
title:  "Django unchained"
date:   2017-08-22
categories: learning django
---

Today to help the team I put my developer hat on (designers wear many hats you know) <!--more-->to have a look at [Django](https://www.djangoproject.com) which is an open source Python web framework.   

Django encourages quick development and has ‘out of the box’ features for you to use on your project, like a ‘login system’ for example ([more benefits here](https://www.djangoproject.com/start/overview/)).

My task is to get some Django templates set up so we can add our design in HTML and CSS.

 I was told about a decent resource [https://tutorial.djangogirls.org/en/django/](https://tutorial.djangogirls.org/en/django/) which had step by step instructions to get going with Django, first off Python needs to be installed which I downloaded from [https://www.python.org/downloads/release/python-351/](https://www.python.org/downloads/release/python-351/).

To check it installed OK, I opened up [iterm2](https://www.iterm2.com/) and entered

<pre><code class="language-css">$ python3 --version
</code></pre>

This told me I had Python 3.5.1 installed so was good to go, next up I then made a virtualenv which is an isolated Python environment (virtual environment), I did this with

<pre><code class="language-css">$ python3 -m venv myvenv
</code></pre>

and to get it started I used

<pre><code class="language-css">$ source myvenv/bin/activate
</code></pre>

with dependancies set up I could then install Django

<pre><code class="language-css">$ pip install django
</code></pre>

I’m now set up to create the design templates we need (I hope).

Had lots of time tonight to write this on the tram, a delay caused a 30 min journey turn into 1 hour 30 mins, wounded but I won't rant, its not my style.
