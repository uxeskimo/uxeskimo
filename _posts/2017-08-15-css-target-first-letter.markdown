---
layout: learning-post
body-page-class:
excerpt_separator: <!--more-->
title:  "CSS target first letter"
date:   2017-08-15
categories: learning css
---

Here's something I didn't know you could specificly target via CSS, the first letter in a element.

<!--more-->
<pre><code class="language-css">p::first-letter {
  font-size: 40px;
  color: blue;
}</code></pre>

Which would give you

<span style="font-size:40px;color:#21d67f;">T</span>his is an example line of text.

<code>::first-letter</code> is a pseudo element which works only if the parent element is a block container.

[Browser support](https://caniuse.com/#feat=css-first-letter)
