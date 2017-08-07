---
layout: page
title: Connecting millions of spiritual seekers with a master
permalink: /case/sadhguru-app
---
<div class="gen">
My role was to build the complete UX for the app whose intent is to have the vast amount of knowledge by Sadhguru and various offerings of ISHA — yoga, meditation, music etc. under one umbrella.
</div>

{::options parse_block_html="true" /}

# Background
Sadhguru is a contemporary mystic, yogi and a visionary. He is the founder of Isha Foundation, a non-profit organization, that concerns with human wellbeing and the spiritual growth of an individual through Yoga. Sadhguru is a spiritual master who has a vast online presence in the form of his talks on youtube, article posts on facebook and an online blog. He has more than 2 million followers on facebook, as of today.

![Sadhguru at a public event][image-1]

Touched by the insight of Sadhguru and deep experience that I had felt through ISHA foundation's yoga programs, I signed up as a volunteer, often working after hours of my regular job.

Team ISHA wanted to build a mobile app which would enable the fans/followers of Sadhguru to connect with him through the palm of their hands. Not only that, the intent of the app was to provide users a means to have easy access to yoga and meditations that one could try in the comfort of their homes and also be able to register for other ISHA yoga programs that were taught by highly-qualifed yoga teachers across various locations in the world.

There are two things that were needed to be done:
1. Structure the content on a strong foundation of information architecture.
2. Give a task-oriented context to the information, so that the content could be easily consumed in a mobile context.

In order to set out to achieve this, I have spent considerable time looking at the following aspects of ISHA foundation.

![ia-lens center][image-2]

# User & Business Needs

Currently, there is a vast source of information that is spread across multiple website. The primary website of ISHA (isha.sadhguru.org) itself had it's own navigation and findability issues. Given that there is new wisdom from Sadhguru almost every day either in the form of an article or a video — communicating this to the user was one of the primary concerns.

Other than this, the business need was to inform the users a list of Yoga programs happening in their area. The current flow for this is to have the user redirect to a different micro-site than the main website and select the filters every time they want to see what programs were available in their city.

An important business need was also to convey the social activities the organisation was part of and allow the user to either volunteer or donate for the cause. In the words of one of the stakeholders, "Donations are our life-line."

Summarizing the needs:

- Users should be able to easily find Sadhguru's content (which are in the form of text, video, audio and quotes)
- Users should be able to find Isha foundation's Yoga programs happening in their area.
- Users should be able to know the various outreach activities of the organization and be able to Volunteer/Donate for these.

## Analytics

Upon studying the navigation patterns of the users from analytics data, most of it was going to Sadhguru's pages which had lot of articles, videos. People were also very interested to know where Sadhguru is going to be at a given point of time - what his schedule was. This was one of the most viewed pages on the desktop version of the website.

# Constructing the Info. Architecture

Given that there were so many navigation items on the web, I did not want the user to feel the same on the mobile app. In the need to accommodate all of the content on the website, I have prioritised the content according to user needs and business needs and then re-evaluated the IA of the website. 

![][image-3]

Re-looking at the navigation of the web with the lens of user & business needs yielded the following grouping: 

![][image-4]

![][image-5]

Given that I was volunteering on the side, I had little time to do any formal validation of the IA with actual users. The stakeholders had unanimously agreed to the IA that was proposed based on the user needs, business goals and the frequency of content updates.

Having this structure yielded a very solid foundation for even future versions of the app, for adding further types of content and providing various other offerings of the organisation.

## Translating the IA into a navigation system
From the very beginning, there were a few principles that I wanted to adhere to:

- Clearly tell the user what aspects of the information are available — No hamburgers or hiding of information.
- Make the structure of information look like as if Sadhguru is speaking to the user. As if, they are receiving content from the Master.

![bottom-bar center][image-6]

- Let the user to discover various facets of 'updates' from ISHA rather than he/she "figuring" something out. This is critical for user engagement in the context of a mobile app.

## Death to the Hamburger

The stakeholders had proposed the idea to have all the navigation items on the web page as part of a hamburger menu on the mobile and thus have more information for the user. 

The hamburger menu had become a convenience to have lots of navigable labels under one menu without cluttering the visuals. It had become so pervasive that people had started treating it as a standard. In effect, there has been quite some research on how it is detrimental to the UX of the app as it does not give a cue to the user in terms of the navigable sections of the app, as all the navigation items are tucked away inside a menu. In other words, the \*\*information scent \*\* is not apparent for the users. 

The hamburger menu does not favour the usability principle 'Recognition over Recall'. As all the navigable items are hidden inside the menu, the user needs to make an attempt to click on the menu, process which of the navigation labels he/she is interested in order to switch. Or, one needs to remember the items that are part of the menu in order to reduce the processing time every time the user wants to make a navigation choice.

![][image-7]

![][image-8]

The bottom-bar navigation pattern is much better in the above aspects because, it shows what the primary navigable sections of the app are, up front. There is no need for the user to recall these sections from memory. Perhaps, realizing the bad UX of the hamburger pattern, Google had updated their design guidelines on the android platform, to have the bottom navigation bar as the standard, though this has been the constant on iOS. 

The image shows how we have used the bottom-bar navigation with a top-segmented bar for level-1 items of the information hierarchy, with the first-tab being the prominent section of the lot.

One of the other reasons why a bottom navigation makes sense — with the screen sizes becoming larger, the area on the phone reachable with the thumb becomes smaller and is restricted to the lower portion of the screen.

![][image-9]

Educating the stakeholders about the then recently released Material Design spec and showing some early examples of how Google+ and BookMyShow apps have adopted the bottom bar navigation, I have convinced the team to go ahead with this kind of a navigation pattern for Android. (Since iOS had been using the same pattern, it was easier for me to convince the stakeholders)

After 6 months, there is no looking back on this with so many apps following the best practices from the Material Design spec.

## Choosing the labels
Though, we have debated the idea of having all verbs for the navigation labels, it made sense to use labels which the users would relate a lot. Hence, we have used the label 'Sadhguru' instead of 'Seek' as one of the navigation items. Since this is going to be an app for the vast followers of Sadhguru, having his name as one of the navigation items is going to connect with the users instantly.

I have also learnt from the book by Donna Spencer that one does not need to be stickler for using only nouns or verbs in the name of consistency. The best labels are the ones that are unambiguous to the users.

There was a debate if we wanted to have Donate as one of the navigation items over Outreach. However, the stakeholders strongly recommended it to be called Donate as it would bring an active voice to the user and for them the attracting donations from users are critical.

![mobile-nav center][image-10]

Given that I was working on this project in my free-time, there was no scope to formally test the IA. I have instead relied on feedback from internal team members and thought if the grouping would unambiguously communicate what each of the labels meant.

# Prototype
A picture is worth a thousand words. A prototype is even better. Feel free to navigate through one of the initial prototypes for the app below. It gives a clear view of how the IA has been laid out using bottom and top navigation systems.

<iframe src="https://marvelapp.com/1i0e59f?emb=1" class="prototype" width="360" height="640" allowTransparency="true" frameborder="0"></iframe>
{::options parse_block_html="true" /}

# Presenting the content in a Mobile context.
In the mobile context, users should be able to quickly find what they want. There is a certain urgency inherent in the way people use mobile. So, the content has to be presented in a way that emphasizes the task-oriented nature of the users. 

![][image-11]

The following screen illustrates how content has been re-organized for a mobile context. Each of the items extend to the functionality of the mobile device, thus allowing the user to use their phone to do more with the information on the screen.

 **For eg** : Clicking on the pin would open the location in Google Maps / Apple Maps

Clicking on the phone number would open the dialer on the phone, etc.

Like the above example, various screens had been mobile-optimized for a superior user experience.

# Conclusion
Ever since the app was released, it had been receiving unanimously positive reviews touting that the app is extremely simple to use. This is what I wanted to achieve. When you have content from a Master who talks about the dimensions of the beyond, I did not want of the features of the app to interfere with that. The content has to take over the interface.

![user-reviews center][image-12]

This has been one of the most enriching projects that I had worked on, in terms of impact and contributing my bit to the spiritual community.

[image-1]:	https://static.notion-static.com/3af7e0836cbd482f9850dda1ce9fb617/sadhguru-1.jpg
[image-2]:	https://static.notion-static.com/797493bd3b7240238bd38570434ee24e/PCC_approach.png
[image-3]:	https://static.notion-static.com/e016eff6c1a946fc8593f7f933d3450e/isha-web-nav.png
[image-4]:	https://static.notion-static.com/f6354ad4dc2040b6b97db89230c659fd/web-mobile-IA.png
[image-5]:	https://static.notion-static.com/d6ab49f89784415aa5d01dcc315c3618/IA-mob-exp.png
[image-6]:	https://static.notion-static.com/b3257017b6f648968516eef4cb9cfb74/mobile-nav-bottom-bar.png
[image-7]:	https://static.notion-static.com/8883122cf7df47a5b9deef4eb5a6339f/hambgr.png
[image-8]:	https://static.notion-static.com/55ffdfb4f2fa4c268eca18cd14f9c98d/bottom__top_nav.png
[image-9]:	https://static.notion-static.com/a8c58154eb2a4eaab0b8e443d335a085/thumb-zones.png
[image-10]:	https://static.notion-static.com/d28e1f2e879e495f996e6c8d64027069/Isha-app-IA.png
[image-11]:	https://static.notion-static.com/e663a001d1cc4c50a4b66a87597fa31b/Visit_Location_DL.png
[image-12]:	https://static.notion-static.com/b5fcb99ac5534da3b0dac6e48b516b85/playstore-reviews.png