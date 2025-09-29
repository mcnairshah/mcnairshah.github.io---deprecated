---
layout: page
title: Page-By-Page
description: Making Research More Accessible
img: assets/img/image (27).png
importance: 1
category: work
related_publications: true
---

At [Page-By-Page](https://page-by-page.vercel.app/), we believe research should be accessible to all people. Access to knowledge is a universal right and complex ideas shouldn’t be locked behind jargon or paywalls. Our goal is to build an online space where anyone can learn, discover, and engage with cutting-edge research.

Page-By-Page transforms academic papers into digestible summaries that provide intuitive and simple explanations for complex topics with little loss of detail. Our tools simplify technical terms and allow users to quickly retrieve and explore trending research topics, breaking down barriers of entry to the world of academia. For just a few minutes a day, you can have access to publications by the top researchers in the world, and understand it with minimal effort.

Page-By-Page was built using a React frontend with a Flask backend and PostgreSQL database. We use a custom agentic AI workflow to generate the paper summaries, and we do user recommendations using semantic vector embedding techniques. 

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
