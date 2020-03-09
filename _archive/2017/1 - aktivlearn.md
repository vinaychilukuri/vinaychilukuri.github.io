---
layout: page
title: Making corporate learnings fun
client: KNOLSKAPE
case-tag: Interaction Design
year: 2015
imgurl: /assets/img/al-app-icon.svg
img_dir: /assets/img/cases/aktlearn
hero_img: hero-al-mob.png
<!-- permalink: /case/aktivlearn -->
impact: Training completions up by 23%. Learner engagement up by 48%.
---
<div class="overview">
<h1 class="post-title">{{ page.title | escape }}</h1>

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
Training completions increased by <b>23%</b>; User engagement up by <b>48%</b>.
</div>
</div>
</div>

### Background

KNOLSKAPE hired an open-source Learning Management System (LMS) as the foundation upon which the intended system would be developed.

### My Role
I was leading the UX for this project, which involved revamping the design of an existing learning management system from the ground up. In addition to gathering requirements from stakeholders, translating the requirements to prototypes, I conducted usability tests with internal employees in order to ensure that the proposed designs were user-centric.

## ACT 1 - Usability first

The existing learning management system needed a major revision from the ground up. The constant feedback we got from various clients was that learners seem to be **lost** in the interface.

![img center]({{page.img_dir}}/old-course-home.png)

##### Heuristic analysis of the site, revealed the following gaps:
- What is my progress in each of the courses/trainings that I have subscribed to?
- What are the To-Do items in each of the courses? When do I have to complete them?
- Once, I am inside a course, where am I in it?
- What is the next item in the course that I am going to take as I reach the end of the current item?

### Designing for Action
I set out to address the above issues by doing a task-analysis of a user who would go through a training scenario. I had obtained enough context from our customer development executives who communicate with the client. I have also studied existing online interfaces of MOOC platforms to understand navigation flows.

>An important question for a user who comes to an online learning platform is: 
**What do I learn today?**

<div class="full-width"><img src="{{page.img_dir}}/profile-home.png" alt="profile">
</div>

The re-designed homepage has many ways for the user to take a decision on what to learn. Bringing the above three items up-front intents to a **bias for action**.

#### Inside a Course
For a returning user, the interface should afford to quickly resume learning, among exploring other pages of the course. Making the users to "think" and figure out what to do, at this step would be slowing them down on the training path.

<div id="course-bar"></div>
<ul>
	<li data-thumb="{{page.img_dir}}/thumb-0.svg"><img src="{{page.img_dir}}/course-bar-0.png"></li>
	<li data-thumb="{{page.img_dir}}/thumb-1.svg"><img src="{{page.img_dir}}/course-bar-1.jpg"></li>
	<li data-thumb="{{page.img_dir}}/thumb-2.svg"><img src="{{page.img_dir}}/course-bar-2.png"></li>
	<li data-thumb="{{page.img_dir}}/thumb-3.svg"><img src="{{page.img_dir}}/course-bar-3.jpg"></li>
</ul>

*The re-designed course menu with the course action-bar, act as an anchor point for the learner through out the interface.*

The course action-bar element would be present on all the pages of a course that are not part of the course-content, viz., calendar, discussion pages, announcements etc. This ensures that the learner does not have to think twice about resuming the course from anywhere. Again, **a bias for action**.

![img center]({{page.img_dir}}/course-bar-todo.png)

The course-bar presents an upcoming To-Do item whenever the due-date fast approaching. Since it is present in almost all the pages of the course, the possibility of a learner missing a To-do was significantly reduced.

Now that the fundamentals of the interface had been fixed, it was time to add a persuasive layer to the system that would incentivize their learning.

### Bringing an element of play

With inputs from the product manager, I began making the course of the training into a visual journey. The intent was to translate the often serious environment of an LMS into a playful world. 

![img]({{page.img_dir}}/al_web_road.png)
*The initial idea was to create various themes like the above and let the client pick a theme from one of them suiting to their need.*

## ACT 2 - A shift to Mobile

With an organizational shift of product strategy to mobile, the management prioritized the mobile experience of the learning management system over it's web counterpart.

The mobile system needed to have robust usability with an added layer of persuasive mechanics, to further engage the learners. The intent was to port this layer to the web interface, post the app's release.

### User testing 

![img right]({{page.img_dir}}/al-mobile-nav-screen.png)

Having designed the mobile navigation after many iterations, we tested the navigation along with the key tasks of the app, using a prototype, with internal employees.

The major findings were: 
- The icons used for denotating various components of a training, like Quiz, Assignments were not clear, on their own.
- The nomenclature of 'Rewards', 'Grades', 'Scores' was confusing.
- Some users had difficulty in going back to 'All Courses' screen from within the course screen.

I resolved the above issues and proceeded for higher fidelity to the app.
<p style="clear: both"></p>

### Welcoming the learner to a course

Using native animations on mobile and employing creative loading states, wherever possible, I was able to bring an element of fun and interesting-ness to the proceedings.

![img center](https://s3-us-west-2.amazonaws.com/notion-static/a1c637f0177e4556ba7568d1360ac8ee/AL-mob-loading-states.gif)

### Caring about the learner's progress

It is important to show relevant messages from the system that acknowledges the learner's progress as a means of encouragement. Using ✨ playful emoji 🙌 added to the effect.

![img center]({{page.img_dir}}/pr-1-cut.png)
![img center]({{page.img_dir}}/pr-2-cut.png)

### Designing for motivation

To further engage a learner, the product team had decided to use gamified elements like points, badges, and leaderboards. The content needed to be inherently engaging — without that, any of the persuasive techniques will only yield mediocre results. I designed a strategy on how to use gamification elements at the right time of the user flow.

<!-- However, unfortunately, most people choose to sprinkle these techniques thinking that they would work in any context and our team was leaning on using these tools as magic dust. I took it upon myself to educate the team about this and I designed a strategy on how to use gamification elements at the right time of the user flow.
 -->
<!-- ![img center]({{page.img_dir}}/badges.svg)
*Some of the badges awarded to the learner in a training scenario.* -->

### Visual Design

We had a third-party agency come on-board with the visual design of the app. However, the engagement with them had been ceased after a month and I took up the job to create all the screens ( ~ 100 screens) for the mobile app, based on the style guide that the agency had given us. I used a component-based approach using Symbols in the Sketch to create the UI for the app.

## ACT 3 - Conclusion

#### Impact of the redesign.
Training completion rates on the web, after the redesign, increased by <b>23%</b>. This was validated by a positive S.U.S (System Usability Scale) score of 74. The user's engagement measured by time on site and number of sessions over a week, has increased by <b>48%</b>. The number of UI bug reports have also considerably reduced.

![al-app-logo sd-l]({{page.img_dir}}/al-app-icon.svg)
The mobile app had found a new use case. Besides being a complement to the web interface, the customer development team saw a lot of requests for a post-training engagement model with learners. The product team offered a solution where short consumable content (bites) could be pushed to a learner over a period of time. This seemed to be a good intersection of the business need, the clients' need and how users consume content on a mobile device.

### My learnings

This project made me realize that without a validated product strategy, there are going to be a lot of hits and misses in product design. I wanted to understand how a strategy is formed in user experience, how to validate solutions without building a product completely and how to use research to leverage product decisions.

To know how I've used user research in taking an informed approach with product design, [read this case-study](/case/sales-user-research).