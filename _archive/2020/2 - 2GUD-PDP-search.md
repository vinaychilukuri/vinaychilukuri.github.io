---
title: Designing 2GUD - Product & Search Pages
permalink: "/case/2gud-search"
layout: page
client: Flipkart
case-tag: Interaction Design
year: 2019
img_dir: "/assets/img/cases/2gud-search"
thumb: case-thumbnail.png
impact: "."
---

<div class="overview">
<h1 class="post-title">{{ page.title | escape }}</h1>

Search pages in 2GUD presented an interesting challenge due to the kind of products that were being sold. There are products that are brand new and products that were refurbished. If we show both these products together, then what would the platform perception be? Will the user be confused?

<div class="row">

<div class="col">
#### Duration
Apr - Jun, 2019

#### My Role
Lead Designer involved in Interaction Design, Visual Design & Usability Testing.

</div>
</div>
</div>

### Background
Flipkart launched a new platform for selling certified refurbished products, called 2GUD, in August 2018. 2GUD initially focused on selling certified refurbished devices like smartphones, laptops, earphones and other electronic items. 

2GUD's positioning has been changed from refurbished-only platform to a completely **value-conscious platform** towards the end of 2018. In order to do this, 2GUD required design of certain key properties within its app. 

### Who are the users?
At this juncture, nearly 80% of traffic was coming from Flipkart app. Our users were people who visit Flipkart and are inquisitive about the refurbished and value products that 2GUD has to offer.

### My Role
I had moved from Flipkart Retail to 2GUD charter as the lead designer in Mar, 2019. For this new value-conscious categories, I was involved in the design of the product pages, categories page, search pages and a few other key properties of the 2GUD mobile app.

### Constraints
It is important to note that 2GUD app's codebase was borrowed from that of the Flipkart app in a faster move to go to market. The brief was to not modify the existing components significantly. As a result, a large part of the design of the app is similar to that of the Flipkart app.

# Designing the Product Page

<div class='img-section left'>
<div class='row'>
<div class='col'>
![img center]({{page.img_dir}}/AIDA.png)
<span class='img-caption'>  </span>
</div>
<div class='col'>
### The goal of a product page is to:
- Provide information about all aspects of the product, strengthen intent and persuade the user closer to conversion.
- Provide alternate options for a user who is just exploring.

The AIDA model is a framework used in advertising that enables people to construct a better sales pitch. In reality, if we observe how a person sells a product in a crowded market: He calls out attention, then describes a few features to generate interest and creates desire by saying that only few pieces are remaining. All these persuade us to take action -- buying the product. 

After all, the job of a product page in an eCommerce website is akin to a sales pitch for the product it represents. Having knowledge of this from my earlier experience, I proposed this method as a framework to layout the product page. 
</div>
</div>
</div>

I conducted a session with 3 product managers where we looked at all the elements on the page and ranked them on the parameters of Attention, Interest and Desire. I then created a wireframe to showcase the reasoning behind why the product page should have this structure.

<div class='img-section left'>
<div class='row'>
<div class='col'>
![img center]({{page.img_dir}}/pdp.png)
<span class='img-caption'> [Visual Design of the Product page](https://invis.io/FSWBE4YXQW7){:target="_blank"}, arrived after multiple iterations. Icon designs by the graphic designer of our team. </span>
</div>
<div class='col'>
### My hypothesis reg. using the A.I.D.A model: 

Not every unit of information is perceptually the same. Some pieces of information are more attentive/desirous than the other. Eg: '🔥 Only 2 left' induces some 'fear of missing out' and is a desire marker. Ability to rank these items and use them in the right places on the product page may help the user in making a choice sooner.

How do we know if this is working:

I'm closely working with our analytics p.o.c to get this instrumented and compare this against a standard ecommerce product page of Flipkart.

Qualitatively, we identified if users were able to identify 'policies' of the product, the offers of the product through a usability test and everyone of them were successfully able to do so.  They even mentioned that the policies were easier to read than that of the Flipkart product page.
</div>
</div>
</div>

# Search pages & the dilemma
<div class='img-section left'>
<div class='row'>
<div class='col'>
![img center]({{page.img_dir}}/search-options.png)
<span class='img-caption'> Two variations of the search experience used for usability testing.
</span>
</div>
<div class='col'>
### When a user searches, should we show both refurbished and value-conscious products?

2GUD initially had started with the positioning of selling refurbished products alone. Now, we were introducing value-conscious products and they would constitute to a large amount of the selection.

The contention was by showing refurbished products mixed with value-conscious products, we might dilute the "value perception" of the brand. But, for a user who has been accustomed to seeing refurbished products might not see them immediately.

To find an answer to this, I had created 2 variants of the search experience and proceeded to do a Usability test. Myself along with one product designer and 2 product managers, we approached people within the tech park premises, who were unaware of 2GUD.

Here is the protocol I have created to follow for conducting the test. We conducted this test with working professionals who were not aware of 2GUD.
</div>
</div>
</div>

### Testing the 2 search variants and Insights
5 out of 6 people did not click on the 'Visit Refurbished Zone' banner in the 2nd variant. As a result they could not complete the task. When specifically prompted about the banner, they mentioned that “This tells me that there are products starting from Rs. 399”, but did not click on the banner. This was surprising but made perfect sense due to the following insight:

>People did not process the word, “refurbished”. They simply skipped this word, as it was not in their vocabulary. As a result, people misread the grade of 'Very Good' as "This app is telling me that this earphone is a very good product"!

To answer our initial question: "Do people get confused by seeing products of different nature: refurbished & value-conscious?" The answer is a NO. Because, they didn't even know that there was a difference, in the first place!

##### This prompted us to redesign the refurbished grade callout.

I would have preferred to completely do away with the word, 'Refurbished' but it was not feasible given the impending launch and the many system dependancies.

<div class='full-width'>
![img center]({{page.img_dir}}/condition-callout.png)
<span class='img-caption'></span>
</div>

<div class='callout'>
## Design Language for 2GUD
</div>

<div class='img-section left'>
<div class='row'>
<div class='col'>
![img center]({{page.img_dir}}/design-lang.png)
<span class='img-caption'>  </span>
</div>
<div class='col'>
### Creating a design language for 2GUD
After I joined the team, I seized the opportunity to redefine the visual language of the brand by proposing a change to the typeface and making intentional use of the color palette.

The existing typeface, Roboto, which was an import from Flipkart's codebase did not go with the personality of the brand of 2GUD -- bright, casual and rounded. Visibly, we wanted the letterforms to be in similar tonality with that of 2GUD’s logo. An appropriate typeface, Nunito, was picked that matched our criterion.

In addition to this I have altered the header, defined spacing rules, created components in order to make the screens across the app more consistent.
</div>
</div>
</div>

### Next Steps
Post the launch of the app, we realised that one of our core hypotheses failed!

I've initiated & conducted user research along with the group Product Manager to understand what users want with respect to shopping value products online. 
This research study was significant in setting a new vision and contributing to a revamped product strategy.

### My learnings
Designing for e-commerce is a continuous learning experience. It is a tough act to balance user needs with that of tight business goals. One needs to be aware of the impact of our design choices on the users digital wellbeing and fight against all odds to be on the users side (Eg: Having infinite scrolling content on 2GUD). We may not win every time, but it is important that there is another point-of-view in the room. Building awareness through case studies, investing in continuous user research is the key for optimising our products for the long-term. 

It probably is what makes us go from good to 2GUD. 👌🏽