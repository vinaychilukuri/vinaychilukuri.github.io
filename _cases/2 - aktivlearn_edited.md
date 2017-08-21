---
layout: page
title: Making corporate learnings fun
case-tag: Interaction Design, Visual Design
year: 2015
imgurl: /assets/img/al-app-icon.svg
permalink: /case/aktivlearn
---

<div class="page-color-block"></div>
{::options parse_block_html="true" /}

A client of ours from an IT team lamented that how most of the corporate trainings are ineffective. He exclaimed that his organization requires team members to dedicate significant time & effort for the trainings alongside their daily work. Even after the repeated reminders by Learning & Development team to complete the trainings, the completion rates remain low. 

At KNOLSKAPE, our intention was to address this issue by building a learning ecosystem that would motivate learners to engage with their training material and move towards completion.

## ACT 1 - Usability first

### Background

KNOLSKAPE hired an open-source Learning Management System (LMS) as the foundation upon which the intended system would be developed. As a precursor, for a few early adopters, we designed a few screens of the LMS to give them an idea of how the next version of learning system could be. 

![img](/assets/img/cases/aktlearn/al_web_road.png)

My team began with making the training into a visual journey. The initial idea was to create various themes like this and let the client pick a theme from one of them — translating the environment into a slightly different world.

### Analysis and Diagnosis 

Before we could set out to design our intended gamified ecosystem, the fundamentals needed a major revision. The usability of the open-source LMS that we were using had major issues.

![img](/assets/img/cases/aktlearn/old-canvas-home.png)

**There is no easy way for the user to know/do the following**:

- What is my progress in each of the courses/trainings that I have subscribed to?
- What are the To-Do items in each of the courses? When do I have to complete them?
- Once, I am inside a course, where am I in it?
- What is the next item in the course that I am going to take as I reach the end of the current item?
- How to easily explore other areas of the course?

![img](/assets/img/cases/aktlearn/old-course-home.png)

One of the fundamental principles of Usability is to give the user a feeling of control. This was sorely lacking in the current version of the site. The constant feedback we got from various clients was that their learners seem to be *lost* in the interface.

### Design and the explanation
I set out to address the above issues by doing a task-analysis of a user who would go through a training scenario. I had obtained enough context from our customer development executives who communicate with the client.

I compared existing online interfaces of MOOC platforms and sought out what the user would want with respect to a learning journey of 3-4 months.

>An important question for a user who comes to an online learning platform is: 
**_What do I learn today?_**

<div class="full-width"><img src="/assets/img/cases/aktlearn/profile-home.svg" alt="profile">
</div>
{::options parse_block_html="true" /}

<!-- The above UI addresses the following points:

- Shows the learner clearly the trainings ascribed to him along with the progress and his/her current score.
- Courses are sorted based on most recently accessed.
- Clearly, shows what are the to-do items for the learner across the trainings in the upcoming weeks. -->

The re-designed homepage has multiple ways for the user to take a decision on what to learn. The learner could either pick the most recent item, or one with a good progress metric or the To-Do item that needs attention. Bringing these three items up-front means a **bias for action**.

<div class="full-width"><img src="/assets/img/cases/aktlearn/course-menu-bar.svg" alt="course-menu-bar">
</div>
{::options parse_block_html="true" /}

*The re-designed course menu with the course action-bar, act as an anchor point for the learner through out the interface.*

<!-- The intent of the course action bar is the following:

1. Cues the learner to resume the training from where he/she had left off. Else, the user has to go to the course journey and process which items had been completed and then go to the respective item. 
2. Communicate the progress of the course.
3. Combining the cue to resume the course along with the progress bar is an element to nudge the user to get back on the track and push towards completion. -->

The course action-bar element would be present on all the pages of a course that are not part of the course-content, viz., calendar, discussion pages, announcements etc. This ensures that the learner does not have to think twice about resuming the course from anywhere. Again, *a bias for action*.

![img](/assets/img/cases/aktlearn/course-bar-todo.svg)

The course-bar reflects an upcoming To-Do item for the user, whenever the due-date of an item is fast approaching. Since the course action-bar is present in almost all the pages of the course, we have drastically reduced the ability of the learner to miss a To-do.

Now that the fundamentals of the interface had been fixed, it was time to add a persuasive layer to the system that would incentivize their learning.

## ACT 2 - A shift to Mobile

The initial idea was to make a mobile app that would supplement the desktop version. It would not have feature parity with that of the desktop LMS and would only have a subset of features that can make it as an MVP (Minimum Viable Product). However, with the organization deciding to have the overall product strategy shift to mobile, there was a sudden emphasis on the LMS being the first project to go mobile.

So, the mobile system needed to have the same robust usability as of the web interface with an added layer of persuasive mechanisms for the user to be engaged through the training duration.

#### Navigation on mobile

![img right](/assets/img/cases/aktlearn/al-mobile-nav-screen.png)

The navigation on mobile had the primary elements as shown to the right. We tested the navigation along with the key tasks of the app, using a prototype, with internal employees. People were given a series of tasks in terms of finding various sections of the course.

### Welcoming the learner to a course

Using native animations on mobile and employing creative loading states, wherever possible, I was able to bring an element of fun and interesting-ness to the proceedings.

![img center](https://s3-us-west-2.amazonaws.com/notion-static/a1c637f0177e4556ba7568d1360ac8ee/AL-mob-loading-states.gif)

### Caring about the learner's progress

It is imperative to show messages from the system that acknowledges the learner's progress as he/she goes through the training. I  designed screens that would represent the progress as a means to show that the app (and there by the client) cares about the learner's progress throughout the training duration.

![img](/assets/img/cases/aktlearn/pr-1-cut.png)

Each of these would come at specific times during the learner's progress and are important to the experience as a means to encourage the learner and also that the system acknowledges his/her progress using ✨ playful emoji 🙌🏽  and corresponding text.

![img center](/assets/img/cases/aktlearn/pr-2-cut.png)

### Designing for motivation

To further engage a learner, the product team had decided to use gamified elements like points, badges, and leaderboards. The content needed to be inherently engaging — without that, any of the persuasive techniques will only yield mediocre results.

However, unfortunately, most people choose to sprinkle these techniques thinking that they would work in any context and our team was leaning on using these tools as magic dust. I took it upon myself to educate the team about this and I designed a strategy on how to use gamification elements for persuasion.

#### POINTS

The users would gain points as they complete each of the items in the training. The idea is to have points be used as a way to visually represent the momentum and reward the user for keeping up with the progress. 

Every time a user completes a training item, he would be awarded a few points. If he completes three items in a row, he would be awarded more points etc.

#### BADGES

Badges are a reward that has the ability to make the learners self-identify with a particular trait or a competency and thus increasing their motivation to do more. Badges can indicate both a level of mastery of the training material or they could also allude to other behavioral attributes of the user.

Here are some example badges that could be given in a learning scenario. 

![img center](/assets/img/cases/aktlearn/badges.svg)

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

![al-app-logo sd-l](/assets/img/al-app-icon.svg)
The mobile app had found a new use case. In addition to being a complement to the web interface, the customer development team saw a lot of requests for a post-training engagement model with learners. The product team offered a solution where short consumable content (bites) could be pushed to a learner over a period of time. This seemed to be a good intersection of the business need, the clients' need and how users consume content on a mobile device.

![pdf-ppt right](/assets/img/cases/aktlearn/pdf-ppt.svg)

The "bite-size" learning use-case had a lot of potential for adoption than the first scenario. This was because the content provided by most companies had a lot of long-form reading material in terms of two-column PDFs and PPTs than originally anticipated, which was not amenable to the mobile view. Though there were apps to allow the users to view this content on their phones, the experience took a hit. This meant that someone within KNOLSKAPE has to take and re-work on the entire content that was presented in PDFs and PPTs. This is not a scalable model. Or, the client's company had to do it — which often they have not had the resources to do so.

<!-- Also, as part of the course, users had to take part in business simulations (which is one of the strong components of the course) and this would run only on a desktop browser. Though the team was conscious of this right from the start, the content experience on mobile was not satisfactory. Due to these important limitations, users preferred to consume content of the course on the desktop. -->

The product management decided to use the same set screens for the new use case. I opposed to this. Even though a screen could accommodate what we wanted to show, the intent with which a screen had been created in the first place was totally different. In other words, the user flows are not the same for the two scenarios.

A lot of new screens had to be created. It was tough maintaining two user flows with a few screens being turned off and turned on, at the code level, based on the scenario at hand.

I wish we had focused on only one problem right from the beginning through some data and validated learnings.


## My learnings

This project made me realize that without a validated product strategy, there are going to be a lot of hits and misses in product design. In my opinion, this was not the ideal way to build products. I wanted to understand how a strategy is formed in user experience, how to validate solutions without building a product completely and how to use research to leverage product decisions.

In order to know how I've used user research in taking an informed approach with product design, [read this case-study](/case/sales-user-research).