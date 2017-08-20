---
layout: learning-post
body-page-class:
excerpt_separator: <!--more-->
title:  "A personal access token"
date:   2017-08-18
categories: learning git
---
I use [iterm 2](https://www.iterm2.com) for my git activities, it just feels right, I also use two factor authentication which <!--more-->[you should be using too](https://github.com/blog/1614-two-factor-authentication).

Create a token so you don’t need to enter a password every time your performing git operations over https.

<pre><code class="language-git">
git clone https://github.com/username/repo.git
Username: your_username
Password: your_token</code></pre>

For info on how to create a personal access token, have a  [look here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
