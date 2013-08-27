## Checklist - An Angular.JS app
I am learning **Angular.JS** by building a mobile-first checklist web app. I am practicing agile project management and behavior-driven, test-driven development. I will document the daily process with written stand-ups. My goal is to get familiar with **JavaScript MVC frameworks** and **Jasmine**.

Read my daily app check-ins [here](http://deskof.machiko.co). 

## Project process:
+ Write pitch and specification
+ Write user stories
+ Add user stories to Pivotal Tracker with to-do list.
+ Start Git repo
+ Write Jasmine tests, based on Pivotal Tracker user stories.
+ Write daily stand-up check-ins.

## Pitch: 
Get you and your friends organized with one central checklist. Your group can start a checklist together and take on your project, one step at a time. Use your mobile phone as a collaborative checklist: Log a list of everything you need, start checking things off as you go, see what your friends have done, see what’s left to get done. See your status reach 100% and get ready to roll.

## Specification:
For small groups of people who need to quickly write and organize an activity, the app, a light-weight mobile-friendly website, will provide groups a way to collaborate on a checklist to get things done. Unlike all the other apps out there, this app will be accessible from mobile phones and web browsers, will not require log-ins and has no extra features.

*What’s in the scope?*

* Time: Two-week minimum-viable product
* Speed: Fast, real-time collaborating

*What’s out of scope (for now)?*

+ Log-in/log-out
+ Assigning people to tasks
+ Dates, deadlines
+ Privacy settings

*What’s possible in the future?*

+ Re-usable checklist

## A user story: A series of process stories

In order to organize a group activity with a set list of prep instructions, as a leader of a bicycle touring group, I want a collaborative real-time checklist website to see what the group collectively has, and what we don’t have yet. Ultimately, I want my group to be able to see what we have 

1. *To* get all my friends on the same page, as an organizer, *I must be able to* start a checklist that all participants can view and invite them to it. It will have a title and unique URL.
2. *To* work collaboratively on my list, as an organizer and participant, *I must be able to* be able to have all participants, including myself, write items and save it on our checklist.
3. *To* start make sure the list is complete and accurate, as an organizer and participant, *I must be able to* be able to edit (re-write) items in the list.
4. *To* see what my friends have already, as an organizer and participant, *I must be able to* be able to let others check things off the list.
5. *To* see what has already been done and who did it, as an organizer and participant, *I must be able to* see the initials of who checked what item off.
6. *To* gauge our overall progress, *I must be able to* be able to see how many items are checked off. I want to see it graphically.

*Future*
1. *To* re-use a checklist, *I must be able to* save the items on a checklist and start a new checklist with a new URL. 

## Pivotal Tracker:
See [here](https://www.pivotaltracker.com/s/projects/896926).

## Wireframe:
![To-do list](https://raw.github.com/machikoyasuda/angular-checklist/master/wireframe.png)

## Milestones:
1. Create HTML elements with basic CSS styling — Checklist with rows, check boxes, text-input area and button, progress bar.
2. Angular module created.
3. Firebase connection established; API library installed.
4. Start to-do list page - add a to-do list item by clicking the button. Complete tests and deploy test-case for mobile testing.
5. Start to-do list editing - edit a to-do list item by clicking the item. 
6. Show a total number of items.
6. Add a check button and log into database the check status. Show check status on the screen.
7. Add a progress bar that shows overall check-list status.

## Colophon:
+ Unix/Mac OS X
+ iTerm2
+ Vim, Sublime Text 3
+ Git
+ Jasmine, Cucumber.JS
+ Pivotal Tracker
+ Basecamp
+ HTML/CSS - Sass? Compass?
+ Responsive, mobile-first design
+ Angular.JS
+ Firebase
+ Google Web Fonts
