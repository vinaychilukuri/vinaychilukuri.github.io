---
layout: page
title: Making corporate learnings fun
permalink: /case/aktivlearn
---

A client of ours from an IT team lamented that how most of the corporate trainings are ineffective. He exclaimed that his organization requires team members to dedicate significant time & effort for the trainings alongside their daily work. Even after the repeated reminders by Learning & Development team to complete the trainings, the completion rates remain low. 

At KNOLSKAPE, our intention was to address this issue by building a learning ecosystem that would motivate learners to engage with their training material and move towards completion.

## ACT 1 - Usability first

### Background

KNOLSKAPE hired an open-source Learning Management System (LMS) as the foundation upon which the intended system would be developed. As a precursor, for a few early adopters, we designed a few screens of the LMS to give them an idea of how the next version of learning system could be. 

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2Fd88e7d6dc7d24006a7c0a7d3a4d3fbd7%2FAL_Web_road.png?w=1.0&s=fc64e0e5483002e008f27fbdcfd4ef89)

My team began with making the training into a visual journey. The initial idea was to create various themes like this and let the client pick a theme from one of them — translating the environment into a slightly different world.

### Analysis and Diagnosis 

Before we could set out to design our intended gamified ecosystem, the fundamentals needed a major revision. The usability of the open-source LMS that we were using had major issues. It needed a revival from the ground up.

I conducted a thorough usability review of the LMS and some of the problems unearthed are as follows:

There is no easy way for the user to know/do the following:

- What is my progress in each of the courses/trainings that I have subscribed to?
- What are the To-Do items in each of the courses? When do I have to complete them?
- Once, I am inside a course, where am I in it?
- What is the next item in the course that I am going to take as I reach the end of the current item?
- How to easily explore other areas of the course?

One of the fundamental principles of Usability is to give the user a feeling of control. This was sorely lacking in the current version of the site. The constant feedback we got from various clients was that their learners seem to be lost in the interface.

I set out to address the above issues by doing a task-analysis of a user who would go through a training scenario. I had obtained enough context from our customer development executives who communicate with the client. It was very difficult to get access to the actual learners who were undergoing the trainings as these were managers who were very busy with their schedules. Getting buy-in from L&D teams for doing user research to understand their pain points was challenging.

I  compared existing online interfaces of MOOC platforms and sought out what the user would want with respect to a learning journey of 3-4 months.

In my opinion, the important question for a user who comes to an online learning platform is: **What do I choose to learn today?**

### Design and the explanation

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F15bb832cd10f4ee395a5921edcdab86c%2FProfile-redux.png?w=1512&s=b75c9bf50cc8a261fa2110aa4842a97e)

The above UI addresses the following points:

- Shows the learner clearly the trainings ascribed to him along with the progress and his/her current score.
- Courses are sorted based on most recently accessed.
- Clearly, shows what are the to-do items for the learner across the trainings in the upcoming weeks.

The homepage thus has multiple ways for the user to go into a course. The user could either take a decision on the most recent item, the progress metric or the To-Do item that needs his/her attention. Bringing these three items up-front means a bias for action. These elements provide a way for the user to resolve the question, "What do I choose to learn, today?"

Once the user enters the course home-page, there is no place where the old LMS interface lists the name of the course! I  redesigned the course menu so that the first item lists the course name and the items of the course follow, thus communicating a clear hierarchy to the user.

The re-designed course menu with the element next to it, the course action-bar, act as an anchor point for the learner through out the interface.

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F4fdc300b0c9743f78c17f6d475877c00%2FAL-Course-Home.png?w=1552&s=706df733a181a533cb5e9976c88a7943)

The intent of the course action bar is the following:

1. Cues the learner to resume the training from where he/she had left off. Else, the user has to go to the course journey and process which items had been completed and then go to the respective item. 
2. Communicate the progress of the course.
3. Combining the cue to resume the course along with the progress bar is an element to nudge the user to get back on the track and push towards completion.

The course action-bar element would be present on all the pages of a course that are not part of the course-content, viz., calendar, discussion pages, announcements etc. This ensures that the learner does not have to think twice about resuming the course wherever he/she is in the interface. Again, a bias for action.

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F5cffe7bfa5b948bdb782b81a393dbfd3%2Fcourse-bar-with-ToDo.png?w=1548&s=99bd7210616ba3089363f5f31375076f)

Though the home page lists the upcoming To-Do items for the user when he /she visits the course home, the course-bar also reflects an upcoming To-Do item for the user as an extra measure, whenever the due-date is fast approaching. Since the course action-bar is present in almost all the pages of the course, we have drastically reduced the ability of the learner to miss a To-do item that needs attending to. Other than this, the system would also send a reminder email to the user when an assignment needs completion.

Now that the fundamentals of the interface had been fixed, it was time to add a persuasive layer to the system that would incentivize their learning.

## ACT 2 - A shift to Mobile

The initial idea was to make a mobile app that would supplement the desktop version. It would not have feature parity with that of the desktop LMS and would only have a subset of features that can make it as an MVP (Minimum Viable Product).

However, with the organization deciding to have the overall product strategy shift to mobile, there was a sudden emphasis on the LMS being the first project to go mobile. Also, there seemed to be a lot of interest from clients to engage with learners on a mobile platform — as that would mean more adoption to the training material anywhere anytime.

So, the mobile system needed to have the same robust usability as of the web interface with an added layer of persuasive mechanisms for the user to be engaged through the training duration.

#### Navigation on mobile

![img right](https://static.notion-static.com/4b09756ea7734358aee9d4659b3ba8e3/al-mobile-nav-screen.png)

The navigation on mobile had the primary elements as shown to the right. We tested the navigation along with the key tasks of the app, using a prototype, internal employees. People were given a series of tasks in terms of finding various sections of the course.

### Welcoming the learner to a course

Using native animations on mobile and employing creative loading states, wherever possible, I was able to bring an element of fun and interesting-ness to the proceedings.

![img center](https://s3-us-west-2.amazonaws.com/notion-static/a1c637f0177e4556ba7568d1360ac8ee/AL-mob-loading-states.gif)

### Caring about the learner's progress

It is imperative to show messages from the system that acknowledges the learner's progress as he/she goes through the training. I  designed screens that would represent the progress as a means to show that the app (and there by the client) cares about the learner's progress throughout the training duration.

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F2ea5d97070b74749aabdc96baee88a10%2Fpr-1.png?w=1752&s=f1e26f3f7b4f4f61d5ab0953c0cdbdad)

Each of these would come at specific times during the learner's progress and are important to the experience as a means to encourage the learner and also that the system acknowledges his/her progress using ✨ playful emoji 🙌🏽  and corresponding text.

![img center](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F8dab93035cef4310b90bb78782b2f835%2Fpr-2.png?w=1760&s=9db2b0ebfc17fb947a231b6b1acaec64)

### Designing for motivation

To further engage a learner, the product team had decided to use gamified elements like points, badges, and leaderboards. The content needed to be inherently engaging — without that, any of the persuasive techniques will only yield mediocre results.

However, unfortunately, most people choose to sprinkle these techniques thinking that they would work in any context and our team was leaning on using these tools as magic dust. I took it upon myself to educate the team about this and I designed a strategy on how to use gamification elements for persuasion.

#### POINTS

The users would also gain points as they complete each of the items in the training. The idea is to have points be used as a way to visually represent the momentum and reward the user for keeping up with the progress. 

Every time a user completes a training item, he would be awarded a few points. If he completes three items in a row, he would be awarded more points etc.

#### BADGES

Badges are a reward that has the ability to make the learners self-identify with a particular trait or a competency and thus increasing their motivation to do more. Badges can indicate both a level of mastery of the training material or they could also allude to other behavioral attributes of the user.

Here are some example badges that could be given in a learning scenario. 

![img center](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F0f77771e033e44b29fe555bca195c1da%2FBadges.png?w=1.0&s=87b1500cbb068b7eab7451c6e5f4ef78)

#### LEADERBOARD

The leaderboard is a competitive component designed to compare one's performance with that of the peers and is used frequently in various scenarios to provide an extra nudge to get better over one's peers. According to Bartle's player types this is a component that caters primarily towards achievers.

However, a leaderboard would be demotivating for the people who are at the bottom of the ladder. So, whenever there are people who haven't been active in their training and are at the bottom of the leaderboard, other players/learners can choose to send a private message to encourage them to get back on track. Doing so is a personalized way to encourage learners to help each other.

![img](https://notion.imgix.net/https%3A%2F%2Fstatic.notion-static.com%2F157e37b8bf06432597598311cf7fe6f9%2Fhelping-hands.png?w=1264&s=1435815d3147182f6d356915a936d778)

The giving away of rewards like points and badges have to be finely calibrated so that the learners feel that they have actually earned them and that the system is not throwing some incentives at them. I have formulated a few scenarios of when badges could be given and what type of badges could be given. A pilot run would have helped immensely in refining the reward mechanism to the training needs. 

The strategy of when to give what type of rewards could not be implemented on the system due to the complexity of rules. As a result, only the leaderboard component could be implemented, with an agreement to look at the implementation of points and badges, in the later revisions of the app. (KNOLSKAPE tied up with a gamification vendor later to get this rule engine implemented)

### Visual Design

We had a third-party agency come on-board with the visual design of the app. However, the engagement with them had been ceased after a month and I took up the job to create all the screens ( ~ 100 screens) for the mobile app, based on the style guide that the agency had given us. I used a component-based approach using Symbols in the Sketch to create the UI for the app.

## ACT 3 - Denouement

The web app had become quite useful with much needed Usability and navigation refinements, which has been validated by a positive S.U.S (System. Usability.Scale) score. The number of UI bug reports have also considerably reduced.

The mobile app's direction was pivoted in not just being a complement to the web interface, but to have knowledge bites pushed to the user over a period of time, with the intent to continuously engage with the learners.

![pdf-ppt right](https://static.notion-static.com/92928d7c274249f4abcab040538ca171/pdf-ppt.svg)

This was because the courses had a lot of long-form reading material in terms of two-column PDFs and PPTs than originally anticipated, which was not amenable to the mobile view. Though there were apps to allow the users to view these content on their phones, the experience took a hit. This meant that someone within KNOLSKAPE has to take and re-work on the entire content that were present in PDFs and PPTs. This is not a scalable model. Or, the client's company had to do it — which they did not have the resources to do so.

Also, as part of the course, users had to take part in business simulations (which is one of the strong components of the course) and this would run only on a desktop browser. Due to these important limitations, users preferred to consume content of the course on the desktop. This meant that the call taken to develop mobile-first had been wrong.

![al-app-logo](https://static.notion-static.com/2bf8138dec1b4f98a2fd44cfceea36b6/AL-app-logo.png)
After a few iterations, the product management team had arrived at a juncture to use the app that will push bite-sized content to users after they have been part of a workshop with KNOLSKAPE. The intention here was to engage the learners by pushing short consumable content on the mobile, even after a short-term training had been finished. There seemed to be a good intersection of the business need, the clients' need and how users consume content on a mobile device.

## My learnings

This project made me realize that without a validated product strategy, there are going to be a lot of hits and misses in product design. I wanted to understand how a strategy is formed in user experience, how to validate solutions without building a product completely and how to use research to leverage product decisions.

In order to know how I've used user research in taking an informed approach with product design, [read this case-study](/case/sales-user-research).