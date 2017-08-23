---
layout: page
title: Connecting millions of spiritual seekers with a master
case-tag: Information Architecture, Interaction Design
year: 2017
imgurl: /assets/img/sadhguru-app.jpg
permalink: /case/sadhguru-app
---

<div class="page-color-block"></div>
{::options parse_block_html="true" /}

I designed a mobile app for the millions of followers of Sadhguru on social media. The intent of the app is to have the vast knowledge of Sadhguru and various offerings of ISHA — yoga, meditation, events etc.. easily accessible under one umbrella. <br><br>
DURATION: Dec, 2016 - Feb, 2017
<hr>

## Background

Sadhguru is a contemporary mystic, yogi and a visionary. He is the founder of ISHA Foundation, a non-profit organization, that concerns with human wellbeing and the spiritual growth of an individual through Yoga.  Sadhguru is a spiritual master who has a vast online presence in the form of his talks on YouTube, article posts on Facebook and an online blog. He has more than 2 million followers on Facebook, as of today.

![img full](/assets/img/cases/isha-app/sadhguru.jpg)

Touched by the insight of Sadhguru and deep experience that I had felt through ISHA foundation's yoga programs, I signed up as a volunteer.

## Problem Definition
The various offerings of ISHA were scattered across 42 websites! As a result, the experience was totally fragmented and a more fundamental problem being the key information was not at all discoverable.

Team ISHA wanted to build a mobile experience to bring the key offerings of ISHA under one umbrella. A larger website consolidation project was part of the plan, at a later stage. 

<!-- The intent of the app was to provide users a means to have easy access to yoga and meditations that one could try in the comfort of their homes and also be able to register for other ISHA yoga programs that were taught by highly-qualified yoga teachers across various locations in the world.
 -->
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

![img](/assets/img/cases/isha-app/isha-web-nav.png)

Re-looking at the navigation of the web with the lens of user & business needs yielded the following grouping: 

![img](/assets/img/cases/isha-app/web-mobile-IA.png)

![img sd](/assets/img/cases/isha-app/IA-mob-exp.png)

Given that I was volunteering on the side, I had little time to do any formal validation of the IA with actual users. The stakeholders had unanimously agreed to the IA that was proposed based on the user needs, business goals, expert opinions and the frequency of content updates.

<!-- Having this structure yielded a very solid foundation for even future versions of the app, for adding further types of content and providing various other offerings of the organization.
 -->
### Translating the IA into a navigation system on mobile

From the very beginning, there were a few principles that I wanted to adhere to:

- Clearly tell the user what aspects of the information are available — No hamburgers or hiding of information.
- Make the structure of information look like as if Sadhguru is speaking to the user. As if, they are receiving content from the Master.

![img center](/assets/img/cases/isha-app/mobile-nav-bottom-bar.png)

- Let the user to discover various facets of 'updates' from ISHA rather than he/she "figuring" something out. This is critical for user engagement in the context of a mobile app. 

### Death to the Hamburger

The stakeholders had proposed the idea to have all the navigation items on the web page as part of a hamburger menu on the mobile and thus have more information for the user. 

The hamburger menu had become a convenience to have lots of navigable labels under one menu without cluttering the visuals.  It had become so pervasive that people had started treating it as a standard. In effect, there has been quite some research on how it is detrimental to the UX of the app as it does not give a cue to the user in terms of the navigable sections of the app. In other words, the *information scent* is not apparent to the users. 

![hamburger sd](/assets/img/cases/isha-app/hambgr.png)

The hamburger menu does not favor the usability principle, *Recognition over Recall*. 
<!-- As all the navigable items are hidden inside the menu, the user has to make an attempt to click on the menu and process which of the navigation labels he/she is interested in order to switch. Or the user needs to remember the items that are part of the menu, in order to reduce the processing time every time the user wants to make a navigation choice. -->

The bottom-bar navigation pattern is much better because, it shows what the primary navigable sections of the app are, up front. There is no need for the user to recall these sections from memory. 

Perhaps, realizing the bad UX of the hamburger pattern, Google had updated their design guidelines on the android platform, to have the bottom navigation bar as the standard, though this has been the constant on iOS.

<p style="clear: both">
The image below shows the how the bottom-bar navigation has been adopted to our IA. Notice that the user could see all the level-2 items, make a selection among them, without losing the focus on level-1. In my opinion, this style of navigation provides a superior anchor for the user to browse through the various sections of the app.</p>
{::options parse_block_html="true" /}

![bottom-top-nav sd center](/assets/img/cases/isha-app/bottom-top-nav.svg)

One of the other reasons why a bottom navigation also makes sense — with the screen sizes becoming larger, the area on the phone reachable with the thumb becomes smaller and is restricted to the lower portion of the screen.

![thumb-zones center](/assets/img/cases/isha-app/thumb-zones.png)

Educating the stakeholders about the then recently released Material Design spec and showing some early examples of how Google+ and BookMyShow apps have adopted the bottom bar navigation, I convinced the team to go ahead with this kind of a navigation pattern for Android. (Since iOS had been using the same pattern, it was easier for me to convince the stakeholders)

After 6 months, there is no looking back on this with so many apps following the best practices from the Material Design spec.

### Choosing the labels

Though, we have debated the idea of having all verbs for the navigation labels, it made sense to use labels which the users would relate a lot. 
<!-- Hence, we have used the label 'Sadhguru' instead of 'Seek' as one of the navigation items. Since this is going to be an app for the vast followers of Sadhguru, having his name as one of the navigation items is going to connect with the users instantly. -->

I have also learnt from the book by [Donna Spencer](http://uxmastery.com/practical-ia){:target="_blank"} that one does not need to be a stickler for using only nouns or verbs in the name of consistency. The best labels are the ones that are unambiguous to the users.

There was a debate if we wanted to have Donate as one of the navigation labels over "Outreach". However, the stakeholders strongly recommended it to be called "Donate" as it would bring an active voice and might fare better in attracting donations from the users.

![img center](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2Fd28e1f2e879e495f996e6c8d64027069%2FIsha-app-IA.png?w=1.0&s=76405bef14da17a7cfa8396aae868309)

### Prototype

A picture is worth a thousand words. A prototype is even better. Feel free to navigate through one of the initial prototypes for the app below. It gives a clear view of how the IA has been laid out using bottom and top navigation systems.

<iframe src="https://marvelapp.com/1i0e59f?emb=1" class="prototype" width="360" height="640" allowTransparency="true" frameborder="0"></iframe>
{::options parse_block_html="true" /}

## 3) Context-Presenting the content in a Mobile context

In the mobile context, users should be able to quickly find what they want. There is a certain urgency inherent in the way people use mobile. So, the content has to be presented in a way that emphasizes the task-oriented nature of the users. 

![img sd](/assets/img/cases/isha-app/Visit_Location_DL.png)

The following screen illustrates how content has been re-organized for a mobile context. Each of the items extends to the functionality of the mobile device, thus allowing the user to use their phone to do more with the information on the screen.

For eg: Clicking on the pin would open the location in Google Maps / Apple Maps

Clicking on the phone number would open the dialer on the phone, etc.

Similarly, various screens had been mobile-optimized for a superior user experience.

## Conclusion

Ever since the app was released, it had been receiving unanimously positive reviews touting that it is extremely simple to use. This is what I wanted to achieve. When you have content from a Master who talks about life in a crystal clear way, I did not want the interface of the app to interfere with that. The content has to take over the interface.

![img center](/assets/img/cases/isha-app/playstore-reviews.png)

This has been one of the most enriching projects that I had worked on, in terms of impact and contributing my bit to the spiritual community.