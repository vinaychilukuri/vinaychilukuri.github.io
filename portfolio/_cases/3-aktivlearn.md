---
layout: page
title: Making corporate learnings fun
permalink: /case/aktivlearn
---

Corporate trainings are often drab.

They require employees to dedicate significant time & effort in addition to their daily work. Often, the Learning & Development team reminds employees multiple times about completion of the trainings, yet the completion rates remain low. 

Our intention was to build a learning ecosystem that would would motivate learners to engage with their training material and move towards completion.

- Background

	KNOLSKAPE is in the business of corporate training using hands-on **business simulations** to augment the learning experience. So, the trainings are not just facilitator-driven, but also have the learners play a simulation and experience how it is to be a manager and have a glimpse of the multi-faceted nature of the job, through a serious-game. This is the unique value-proposition of the organisation.

	Having conducted numerous day-long training sessions, KNOLSKAPE was looking to expand in creating a learning ecosystem so that the training journey could created and monitored over the course of 3-4 months for the learner.

	Given that completion rates for online courses in general (MOOCs) are very low, the intent was to use persuasive techniques to encourage the learners to complete their corporate trainings in the stipulated time with a focus to actively participate in learning rather than just complete the training course.

The organisation hired an open-source learning management system (LMS) as the foundation upon which the the intended system would be developed. As a precursor, for a few early adopters, we designed a few screens of the LMS to give them an idea of how the next version of learning system could be. \~\~However, there was no scope for an end-to-end experience for the learner had not been thought through at this stage\~\~ 

![][image-1]

Making the training into a visual journey. The initial idea was to create various themes like this and let the client pick a theme from one of them — translating the environment into a slightly different world.

Before we could set out to design our intended gamified ecosystem, the fundamentals needed a major revision. The usability of the open-source LMS that we were using had major issues. It needed a revival from the ground up.

I have conducted a thorough usability review of the LMS and some of the problems are as follows:

-  \*\*Usability Issues - \*\* There is no easy for the user to know/do the following:
	- What is my progress in each of the courses/trainings that I have subscribed to?
	- What are the To-Do items in each of the courses? When do I have to complete them?
	- Once, I am inside a course, where am I in it?
	- What is the next item in the course that I am going to take as I reach the end of the current item?
	- How to easily explore other areas of the course?

One of the fundamental principles of Usability is to give the user a feeling of control. This was sorely lacking in the current version of the site. The constant feedback we got from various clients was that their learners seems to be \*\*lost \*\* in the interface.

I had set out to address the above issues by doing a task-analysis of a user who would go through a training scenario. I had obtained enough context from our customer development executives who communicate with the client. It was very difficult to get access to the actual learners who were undergoing the trainings as these were managers who were very busy with their schedules. Getting buy-in from L&D teams to doing user research to understand their pain points had been challenging.

I had compared existing online interfaces of MOOC platforms and sought out what the user would want with respect to a learning journey of 3-4 months

There are two important steps for a user in an online learning platform:

1. What do I see when I login to the site? Or, how does the system welcome me when I login back to the site?
2. How do I choose what to learn today?

![][image-2]

The above UI addresses the following points:

- Shows the learner clearly the trainings ascribed to him along with the progress and his/her current score.
- Courses are sorted based on most recent accessed.
- Clearly shows what are the to-do items for the learner across the trainings in the upcoming weeks.

The homepage thus has multiple ways for the user to go into a course. The user could either take a decision on the most recent item, the progress metric or the To-Do item that needs the his/her attention. Bringing these three items up-front means a bias for action. These elements provide a way for the user to resolve the question, "What do I choose to learn, today?"

Once the user enters the course home-page, there is no place where the old LMS interface lists the name of the course! I had redesigned the course menu so that the first item lists the course name and the items of the course follow, thus communicating a clear hierarchy to the user.

The re-designed course menu with the element next to it, the course action-bar, act as an anchor point for the learner through out the interface.

![][image-3]

The intent of the course action bar is the following:

1. Cues the learner to resume the training from where he/she had left off. Else, the user has to go to the course journey, process which items had been completed and then go to the respective item. 
2. Communicate the progress of the course.
3. Combining the cue to resume the course along with the progress bar is an element to nudge the user to get back on the track and push towards completion.

The course action-bar element would be present on all the pages of a course that are not part of the course-content, viz., _calendar, discussion pages, announcements_ etc. This ensures that the learner does not have to think twice about resuming the course wherever he/she is in the interface. Again, **a bias for action.** 

![][image-4]

Though the home page lists the upcoming To-Do items for the user when he visits the course home, the course-bar also reflects an upcoming To-Do item for the user as an extra measure, whenever the due-date is fast approaching. Since the course action-bar is present in almost all the pages of the course, we have drastically reduced the ability for the learner to miss a ToDo item that needs attending to. Other than this, the system would also send a reminder email to the user when an assignment needs completion.

Now that the fundamentals of the interface had been fixed, it was time to add a persuasive layer to the system that would incentivize their learning.

- AktivLearn Mobile

	When you set out to build an ecosystem where the user does not feel a significant change when switching contexts, you ought to get the fundamentals right. 

	The navigation and the UX have to be seamless even though the feature parity is not maintained. Keeping this in mind, I wanted to replicate the same **_one-click button_** to resume where you had left off, in the mobile context as well, right from the start.

	There were two directions that I had considered for this:

	\<\< Put the two options of wireframes: 1) with recent being the first nav item; 2) With Feed being the first item.

	 **So, did you do a test? How did you resolve the tie?** 

	(( With the recent button in the nav bar, ability to switch a course, selecting a different component was getting trickier ))

	The codebase of the open-source project has undergone a major update and that freezed things from a development perspective. There was an option of not upgrading the code-base, however it meant compromising on some security features for the client's administrator accounts. This made us to make some significant compromises in the UX of the app.

	The development team had hit a wall with respect to tweaking the instance of the LMS and mentioned that the one-click button to resume the course is not possible, given the timeline to launch the app.

	So, the homescreen of the app had to go and we had settled for a simpler version. This is a hit in terms of UX because the user would not immediately know what is the most recent training course that he/she had accessed. The learner has to expend some thought on what he wants to learn today. Giving more information in terms of what was the recent course the learner was in would also be persuasive. In a learning context, recency is very important. **Recency?** Repetition of recently processed information.

# ACT 2 - A shift to Mobile

The initial idea was to make a mobile app that would supplement the desktop version. It would not have feature parity with that of the desktop LMS and would only have a subset of features that can make it as a MVP.

However, with the organisation deciding to have the overall product strategy shift to mobile, there was sudden emphasis on the LMS being the first project to go mobile. Also, there seemed to be a lot of interest from clients to engage with learners on a mobile platform — as that would mean more adoption to the training material anywhere anytime.

So, the mobile system needed to have the same robust usability as of the web interface with an added layer of persuasive mechanisms for the user to be engaged through the training duration.

- Designing Navigation for mobile

	The one thing that I wish to include is 

## Welcoming the learner to a course
Using native animations on mobile and employing creative loading states, wherever possible, I was able to bring an element of fun and interesting-ness to the proceedings.

![AL-loading-states center][image-5]

## Caring about the learner's progress

It is imperative to show messages from the system that acknowledges the learner's progress as he/she goes through the training. I have designed screens that would represent the progress as a means to show that the app (and there by the client) cares about the learner's progress through-out the training duration.

![][image-6]

Each of these would come at specific times during the learner's progress and are important to the experience as a means to encourage the learner and also that the system acknowledges his/her progress using ✨ playful emoji 🙌🏽 and corresponding text.

![][image-7]

## Designing for motivation

To further engage a learner, the product team had decided to use gamified elements like points, badges and leaderboards. The content needs to be inherently engaging — without that, any of the persuasive techniques will only yield mediocre results.

However, most people choose to sprinkle these techniques thinking that they would work in any context and our team was leaning on using these tools as magic dust. I took it upon myself to educate the team about this and I have designed a strategy on how to use gamification elements for persuasion.

### POINTS

The users would also gain points as they complete each of the items in the training. The idea is to have points be used as a way to visually represent the momentum and reward the user for keeping up with the progress. 

Every time a user completes an training item, he would be awarded a few points. If he completes three items in a row, he would be awarded more points etc.

 **BADGES** 

Badges are a reward that have the ability to make the learners self-identify with a particular trait or a competency and thus increasing their motivation to do more. Badges can indicate both a level of mastery of the training material or they could also allude to other behavioural attributes of the user (which deal with relatedness aspect of motivation.

Here are some example badges that could be given in a learning scenario. 

![center][image-8]

 **LEADERBOARD** 

The leaderboard is a competitive component designed to compare one's performance with that of the peers and is used frequently in various scenarios to provide an extra nudge to get better over one's peers. \~\~According to Bartle's player types this is a component that caters primarily towards achievers.\~\~ 

However, a leaderboard would be de-motivating for the people who are at the bottom of the ladder. So, whenever there are people who haven't been active in their training and are at the bottom of the leaderboard, anyone can choose to send a private message to encourage them to get back on track. Doing so is a personalised way to encourage learners to help each other.

![][image-9]

The giving away of rewards like points and badges have to be finely calibrated so that the learners feel that they have actually earned them and that the system is not throwing some incentives at them. I have formulated a few scenarios of when badges could be given and what type of badges could be given. A pilot run would have helped immensely in refining the reward mechanism to the training needs. Though a strategy had been made, this was not implemented on the system due to the complexity of rules. As a result, only the leaderboard component could be implemented, with an agreement to look at the implementation of points and badges, in the later revisions of the app.

## Visual Design

We had a third-party agency come on-board with the visual design of the app. However, the engagement with them had been ceased after a month and I took up the job to create all the screens ( \~ 100 screens) for the mobile app, based on the style guide that the agency had given us. I have used a component-based approach using Symbols in sketch to create the UI for the app.

# ACT 3 - Denouement

The web app had become quite useful with much needed Usability and navigation refinements, which has been validated by a positive S.U.S score.

The mobile app's direction was pivoted in not just being a complement to the web interface, but to have knowledge bites pushed to the user over a period of time, with the intent to continuously engage with the learners.

This was because the courses had a lot of long-form reading material in terms of two-column PDFs and PPTs, than originally anticipated, which were not amenable to the mobile view. Though there were apps to allow the users to view these content, the experience took a hit. This meant that someone within KNOLSKAPE have to take and re-work on the entire content that were present in PDFs and PPTs. This is not a scalable model. Or, the client's company had to do it — which they did not have the resources to do so.

Also, as part of the course, users had to take part in a business simulations (which is one of the strong components of the course) and this would run only on a desktop browser. Due to these important limitations, users preferred to consume content of the course on the desktop. This meant that the call taken to develop mobile-first had been wrong.

Talk about collaboration with Playlyfe here

After a few iterations, the product management team had arrived at a juncture to use the app that will push bite-sized content to users after they have been part of a workshop with KNOLSKAPE. The intention here was to engage the learners by pushing short consumable content on the mobile, even after a short-term training had been finished. There seemed to be a good intersection on the business need, the clients' need and how users consume content on a mobile device.

# My learnings

This project made me realize the importance of doing research and understanding if there is a problem that needs to be solved, in the first place. I have learnt that without a solid product strategy, no matter how well your UX is, the product will not take off. 

This whole experience pushed me into the territories of Product research and there by using this case to push the Design team further up at the table. This gave me an anchor to talk about the importance of incorporating User Research and how to use research to leverage product decisions. 

In order to know how I've used User Research to uncover a product idea, [read this case-study][1] .

[1]:	https://www.notion.so/Sales-Simulation-30b38e2350aa455ca6fb36821977b28b

[image-1]:	https://static.notion-static.com/d88e7d6dc7d24006a7c0a7d3a4d3fbd7/AL_Web_road.png
[image-2]:	https://static.notion-static.com/15bb832cd10f4ee395a5921edcdab86c/Profile-redux.png
[image-3]:	https://static.notion-static.com/4fdc300b0c9743f78c17f6d475877c00/AL-Course-Home.png
[image-4]:	https://static.notion-static.com/5cffe7bfa5b948bdb782b81a393dbfd3/course-bar-with-ToDo.png
[image-5]:	https://s3-us-west-2.amazonaws.com/notion-static/a1c637f0177e4556ba7568d1360ac8ee/AL-mob-loading-states.gif
[image-6]:	https://static.notion-static.com/2ea5d97070b74749aabdc96baee88a10/pr-1.png
[image-7]:	https://static.notion-static.com/8dab93035cef4310b90bb78782b2f835/pr-2.png
[image-8]:	https://static.notion-static.com/0f77771e033e44b29fe555bca195c1da/Badges.png
[image-9]:	https://static.notion-static.com/157e37b8bf06432597598311cf7fe6f9/helping-hands.png