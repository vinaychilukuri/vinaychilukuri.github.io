---
layout: page
title: Making corporate learnings fun
case-tag: Interaction Design, Visual Design
year: 2015
imgurl: /assets/img/al-app-icon.svg
img_dir: /assets/img/cases/aktlearn
permalink: /case/aktivlearn
---

#### Overview
Completion rates of corporate trainings remain low, despite multiple reminders from Learning & Development teams. Lack of time to prioritize training over work and dis-engaging content are two primary factors for this behaviour.

At KNOLSKAPE, our intention was to address this issue by building a learning ecosystem that would motivate learners to engage with their training material and move towards completion.

<div class="row">
<div class="col hero-img">
![img]({{page.img_dir}}/hero-al-mob.png)
</div>

<div class="col">
#### Duration
Year of 2015

#### Role
Interaction design, Visual design, Usability testing

#### Impact
Increased completion rates by <b>23%</b>; User engagement up by <b>48%</b>.
</div>
</div>
---

### Background

KNOLSKAPE hired an open-source Learning Management System (LMS) as the foundation upon which the intended system would be developed.

### My Role
I was leading the UX for this project, which involved revamping the design of an existing learning management system from the ground up. In addition to gathering requirements from stakeholders, translating the requirements to prototypes, I have also conducted usability tests with internal employees in order to ensure that the proposed designs were user-centric.

## ACT 1 - Usability first 

Before we could set out to design our intended gamified ecosystem, the fundamentals needed a major revision.

![img center]({{page.img_dir}}/old-course-home.png)
The constant feedback we got from various clients was that their learners seem to be *lost* in the interface.

##### Heuristic analysis of the site, revealed the following gaps:
- What is my progress in each of the courses/trainings that I have subscribed to?
- What are the To-Do items in each of the courses? When do I have to complete them?
- Once, I am inside a course, where am I in it?
- What is the next item in the course that I am going to take as I reach the end of the current item?

### Design for Action
I set out to address the above issues by doing a task-analysis of a user who would go through a training scenario. I had obtained enough context from our customer development executives who communicate with the client. I have also studied existing online interfaces of MOOC platforms to understand how the navigation flow.

>An important question for a user who comes to an online learning platform is: 
**_What do I learn today?_**

<div class="full-width"><img src="{{page.img_dir}}/profile-home.png" alt="profile">
</div>

The re-designed homepage has multiple ways for the user to take a decision on what to learn. The learner could either pick the most recent item, or one with a good progress metric or the To-Do item that needs attention. Bringing these three items up-front means a **bias for action**.

<div class="full-width"><img src="{{page.img_dir}}/course-menu-bar.svg" alt="course-menu-bar">
</div>

*The re-designed course menu with the course action-bar, act as an anchor point for the learner through out the interface.*

The course action-bar element would be present on all the pages of a course that are not part of the course-content, viz., calendar, discussion pages, announcements etc. This ensures that the learner does not have to think twice about resuming the course from anywhere. Again, *a bias for action*.

![img]({{page.img_dir}}/course-bar-todo.svg)

The course-bar reflects an upcoming To-Do item for the user, whenever the due-date of an item is fast approaching. Since the course action-bar is present in almost all the pages of the course, we have drastically reduced the ability of the learner to miss a To-do.

Now that the fundamentals of the interface had been fixed, it was time to add a persuasive layer to the system that would incentivize their learning.

### Bringing an element of play
![img]({{page.img_dir}}/al_web_road.png)

With inputs from the product manager, I began making the course of the training into a visual journey. The initial idea was to create various themes like this and let the client pick a theme from one of them — translating the serious environment of an LMS into a slightly playful world.

## ACT 2 - A shift to Mobile

The initial idea was to make a mobile app that would supplement the desktop version. It would not have feature parity with that of the desktop LMS and would only have a subset of features that can make it as an MVP (Minimum Viable Product). However, with the organization deciding to have the overall product strategy shift to mobile, there was a sudden emphasis on the LMS being the first project to go mobile.

So, the mobile system needed to have the same robust usability as of the web interface with an added layer of persuasive mechanisms for the user to be engaged through the training duration.

#### Navigation on mobile

![img right]({{page.img_dir}}/al-mobile-nav-screen.png)

The navigation on mobile had the primary elements as shown to the right. We tested the navigation along with the key tasks of the app, using a prototype, with internal employees. People were given a series of tasks in terms of finding various sections of the course.

### Welcoming the learner to a course

Using native animations on mobile and employing creative loading states, wherever possible, I was able to bring an element of fun and interesting-ness to the proceedings.

![img center](https://s3-us-west-2.amazonaws.com/notion-static/a1c637f0177e4556ba7568d1360ac8ee/AL-mob-loading-states.gif)

### Caring about the learner's progress

It is imperative to show messages from the system that acknowledges the learner's progress as he/she goes through the training. I  designed screens that would represent the progress as a means to show that the app (and there by the client) cares about the learner's progress throughout the training duration.

![img]({{page.img_dir}}/pr-1-cut.png)

Each of these would come at specific times during the learner's progress and are important to the experience as a means to encourage the learner and also that the system acknowledges his/her progress using ✨ playful emoji 🙌🏽  and corresponding text.

![img center]({{page.img_dir}}/pr-2-cut.png)

### Designing for motivation

To further engage a learner, the product team had decided to use gamified elements like points, badges, and leaderboards. The content needed to be inherently engaging — without that, any of the persuasive techniques will only yield mediocre results.

However, unfortunately, most people choose to sprinkle these techniques thinking that they would work in any context and our team was leaning on using these tools as magic dust. I took it upon myself to educate the team about this and I designed a strategy on how to use gamification elements at the right time of the user flow.

![img center]({{page.img_dir}}/badges.svg)

### Visual Design

We had a third-party agency come on-board with the visual design of the app. However, the engagement with them had been ceased after a month and I took up the job to create all the screens ( ~ 100 screens) for the mobile app, based on the style guide that the agency had given us. I used a component-based approach using Symbols in the Sketch to create the UI for the app.

## ACT 3 - Conclusion

#### Impact of the redesign.
Training completion rates on the web, after the redesign, increased by <b>23%</b>. This was validated by a positive S.U.S (System Usability Scale) score. The user's engagement measured by time on site and number of sessions over a week, has increased by <b>48%</b>. The number of UI bug reports have also considerably reduced.

![al-app-logo sd-l](/assets/img/al-app-icon.svg)
The mobile app had found a new use case. In addition to being a complement to the web interface, the customer development team saw a lot of requests for a post-training engagement model with learners. The product team offered a solution where short consumable content (bites) could be pushed to a learner over a period of time. This seemed to be a good intersection of the business need, the clients' need and how users consume content on a mobile device.

### My learnings

This project made me realize that without a validated product strategy, there are going to be a lot of hits and misses in product design. I wanted to understand how a strategy is formed in user experience, how to validate solutions without building a product completely and how to use research to leverage product decisions.

In order to know how I've used user research in taking an informed approach with product design, [read this case-study](/case/sales-user-research).