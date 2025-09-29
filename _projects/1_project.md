---
layout: page
title: Page-By-Page
description: Making Research More Accessible
img: assets/img/image (27).png
importance: 1
category: work
related_publications: true
---

At PageByPage, we believe research should be accessible to all people. Access to knowledge is a universal right and complex ideas shouldn’t be locked behind jargon or paywalls. Our goal is to build an online space where anyone can learn, discover, and engage with cutting-edge research.

PageByPage transforms academic papers into digestible summaries that provide intuitive and simple explanations for complex topics with little loss of detail. Our tools simplify technical terms and allow users to quickly retrieve and explore trending research topics, breaking down barriers of entry to the world of academia. For just a few minutes a day, you can have access to publications by the top researchers in the world, and understand it with minimal effort.

PageByPage was built using a React frontend with a Flask backend and PostgreSQL database. We use a custom agentic AI workflow to generate the paper summaries, and we do user recommendations using semantic vector embedding techniques. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image (27).png" title="Front Page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image (28).png" title="Explore Page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image (29).png" title="Reader Page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The front page, explore page (searchable papers), and the reader page with the AI breakdowns and definitions.
</div>
<!-- <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div> -->

<!--You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %} -->
