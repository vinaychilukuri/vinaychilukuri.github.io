---
layout: page
title: Connecting millions of spiritual seekers with a master
case-tag: Information Architecture, Interaction Design
year: 2017
img_dir: /assets/img/cases/isha-app
imgurl: /assets/img/sadhguru-app.jpg
permalink: /case/sadhguru-app
---

Isha Foundation, founded by [Sadhguru](http://isha.sadhguru.org){:target="_blank"}, is a non-profit that concerns human wellbeing and spiritual development through Yoga. 
It's offerings were scattered across 42 websites! As a result, the experience was totally fragmented with a fundamental problem -- the key information was not at all discoverable.

Team ISHA wanted to build a mobile experience to bring the key offerings of ISHA under one umbrella. A larger website consolidation project was part of the plan, at a later stage.

<div class="row">
<div class="col">
![img]({{page.img_dir}}/isha-app-live.png)
</div>

<div class="col">
#### Duration
Dec 2016 - Feb 2017

#### Role
{{page.case-tag}}

#### Impact
Program registrations increased by <b>37%</b>; Donations through the app averaging <b>Rs. 2 lac</b> per month.

#### App links
<a href="http://play.google.com/store/apps/details?id=com.ishafoundation.app&hl=en" target="_blank" class="app-link">Android</a>
<a href="http://itunes.apple.com/in/app/sadhguru/id537568757" target="_blank" class="app-link">iOS</a>

</div>
</div>

---

## Background

Sadhguru is a contemporary mystic, yogi and a visionary. He is the founder of ISHA Foundation, a non-profit organization, that concerns with human wellbeing and the spiritual growth of an individual through Yoga.  Sadhguru is a spiritual master who has a vast online presence in the form of his talks on YouTube, article posts on Facebook and an online blog. He has more than 2 million followers on Facebook, as of today.

![img full]({{page.img_dir}}/sadhguru.jpg)

Touched by the insight of Sadhguru and deep experience that I had felt through ISHA foundation's yoga programs, I signed up as a volunteer.

## My Role
I was contributing as a volunteer on the side by working nights, for about 5 hours per week.

There were three things that needed to be done:
1. Understand the user needs and business goals.
2. Structure the content on a strong foundation of Information Architecture (IA).
3. Give a task-oriented context to the information, so that the content could be easily consumed in a mobile context.

![img center sd](/assets/img/cases/isha-app/pcc.svg)

## 1) User & Business Needs

Given that there was new wisdom from Sadhguru almost every day either in the form of an article or a video — communicating this to the user was one of the primary concerns.

After a few stakeholder interviews, I have uncovered the following needs:

- Users should be able to easily find Sadhguru's content (which are in the form of text, video, audio, and quotes)
- Users should be able to find ISHA foundation's Yoga programs happening in their area.
- The organization needs to promote it's various outreach activities and be able to attract volunteers, donations for each of these.

### Analytics

Upon studying the navigation patterns of the users from analytics data, most of it was going to Sadhguru's pages which had a lot of articles, videos. People were also very interested to know where Sadhguru is going to be at any given point of time; their curiosity about his schedule was high. This was one of the most viewed pages on the desktop version of the website.

## 2) Content - Constructing the Information Architecture

Given that there were so many navigation items on the web, I did not want the user to feel the same on the mobile app. In the need to accommodate all of the content on the website, I  prioritized the content according to user needs and business needs and then re-evaluated the IA of the website. 

![img]({{page.img_dir}}/isha-web-nav.png)

Re-looking at the navigation of the web with the lens of user & business needs yielded the following grouping: 

![img](/assets/img/cases/isha-app/web-mobile-IA.png)

![img sd]({{page.img_dir}}/IA-mob-exp.png)

Given that I was volunteering on the side, I had little time to do any formal validation of the IA with actual users. The stakeholders had unanimously agreed to the IA that was proposed based on the user needs, business goals, expert opinions and the frequency of content updates.

<!-- Having this structure yielded a very solid foundation for even future versions of the app, for adding further types of content and providing various other offerings of the organization.
 -->
### Translating the IA into a navigation system on mobile

From the very beginning, there were a few principles that I wanted to adhere to:

- Clearly tell the user what aspects of the information are available — No hamburgers or hiding of information.
- Make the structure of information look like as if Sadhguru is speaking to the user. As if, they are receiving content from the Master.

![img center]({{page.img_dir}}/mobile-nav-bottom-bar.png)

- Let the user to discover various facets of 'updates' from ISHA rather than he/she "figuring" something out. This is critical for user engagement in the context of a mobile app. 

### Death to the Hamburger

The stakeholders had proposed the idea to have all the navigation items on the web page as part of a hamburger menu on the mobile and thus have more information for the user. 

The hamburger menu had become a convenience to have lots of navigable labels under one menu without cluttering the visuals.  It had become so pervasive that people had started treating it as a standard.

![hamburger sd]({{page.img_dir}}/hambgr.png)

The hamburger menu does not favor the usability principle, *Recognition over Recall*. 

The bottom-bar navigation pattern is much better because, it shows what the primary navigable sections of the app are, up front. There is no need for the user to recall these sections from memory. 

Perhaps, realizing the bad UX of the hamburger pattern, Google had updated their design guidelines on the android platform, to have the bottom navigation bar as the standard, though this has been the constant on iOS.

<p style="clear: both">
The image below shows the how the bottom-bar navigation has been adopted to our IA. Notice that the user could see all the level-2 items, make a selection among them, without losing the focus on level-1. In my opinion, this style of navigation provides a superior anchor for the user to browse through the various sections of the app.</p>

![bottom-top-nav sd center]({{page.img_dir}}/bottom-top-nav.svg)

Educating the stakeholders about the then recently released Material Design spec and showing some early examples of how Google+ and BookMyShow apps have adopted the bottom bar navigation, I convinced the team to go ahead with this kind of a navigation pattern for Android. (Since iOS had been using the same pattern, it was easier for me to convince the stakeholders)

After 6 months, there is no looking back on this with so many apps following the best practices from the Material Design spec.

### Choosing the labels

Though, we have debated the idea of having all verbs for the navigation labels, it made sense to use labels which the users would relate a lot. 
<!-- Hence, we have used the label 'Sadhguru' instead of 'Seek' as one of the navigation items. Since this is going to be an app for the vast followers of Sadhguru, having his name as one of the navigation items is going to connect with the users instantly. -->

I have also learnt from the book by [Donna Spencer](http://uxmastery.com/practical-ia){:target="_blank"} that one does not need to be a stickler for using only nouns or verbs in the name of consistency. The best labels are the ones that are unambiguous to the users.

![img center](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2Fd28e1f2e879e495f996e6c8d64027069%2FIsha-app-IA.png?w=1.0&s=76405bef14da17a7cfa8396aae868309)

### Prototype

A picture is worth a thousand words. A prototype is even better. Feel free to navigate through one of the initial prototypes for the app below. It gives a clear view of how the IA has been laid out using bottom and top navigation systems.

<iframe src="https://marvelapp.com/1i0e59f?emb=1" class="prototype" width="360" height="640" allowTransparency="true" frameborder="0"></iframe>

## 3) Presenting the content in a Mobile context

In the mobile context, users should be able to quickly find what they want, as there is an inherent task-orientedness to it.

![img sd]({{page.img_dir}}/Visit_Location_DL.png)

The following screen illustrates how content has been re-organized for a mobile context. Each of the items extends to the functionality of the mobile device, thus allowing the user to use their phone to do more with the information on the screen.

## Conclusion

Ever since the app was released, it had been receiving unanimously positive reviews touting that it is extremely simple to use. Isha yoga program registrations have increased by <b>37%</b>, thanks to the mobile app. Donations through the app were averaging at <b>Rs. 2 lac</b> per month, without any marketing whatsoever. Further improvements to the donation forms were planned in order to make the donation experience even better.

![img center]({{page.img_dir}}/playstore-reviews.png)

This has been one of the most enriching projects that I had worked on, in terms of impact and contributing my bit to the spiritual community.