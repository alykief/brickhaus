
# brickhaus lifestyle: a lifestyle app for nutrition tracking, fitness advice & more.
## WDIR Final Project by Alyssa Kieffer

## Technology
For this project, I utilized the MEAN stack - Mongo, Express, AngularJS and Node.

## Methods
I began my project by achieving full MEAN CRUD in the most basic way possible. I set up a Controller for the Item (i.e. the food) and went from there. Once this was achieved, I worked on basic styling. I opted for a color palette and header and my inspiration, and kept a sleekly designed wire frame to follow.

![Header](https://github.com/alykief/brickhaus/blob/master/public/css/Header.jpg)

![Wireframe](https://github.com/alykief/brickhaus/blob/master/public/css/Screen%20Shot%202018-11-29%20at%203.26.21%20PM.png)

## Issues

At first, I was having connectivity issues with my Mongo Database and my project itself. Instead of pushing all of the new food nutrient information, it was only generating an ID. I realized that I was connected to the wrong DB within my Mongo tab and was able to resolve the issue with no harm to my code.

Additionally, I really struggled launching to Heroku. I was unable to do it on my own, although Terminal showed success with pushing to origin Heroku. Dan was able to resolve the issue with me though.

At one point, I spent a full day trying to figure out why nothing was working. I was ready to trash my entire project, but then I realized that I had moved my files into different folders, and therefore the paths weren't being read properly. It was a total *DOH* moment, but now it will be the first thing I check from here on out. Lesson learned.

FINAL NIGHT: Here I am on the final night of the project, attempting to get my "Daily Log" feature up and running with a sum of all the macros per each category (i.e. calories, carbs, etc.) and integrate a log-in feature. This is a lot for the final night, but I think I can make it happen.

## Integration

My plans for this app are big. I would like to have this be something that my friends and I can actually utilize. In time, I would like for the food options to be categorized and implement a search bar to find what you're looking for more easily. This will mean moving the daily log onto another page altogether and making the database be the index route.

My original goal was to have a "log" feature (shown but not functional) that pushed the total macros for the day to a calendar which saved them, but this ended up being far too advanced for this particular project. Eventually, I will add that in.

I would also like to have a message board feature where users can share information regarding nutrition and fitness, and maybe even have a selection of work out videos and tutorials for them to use. This would require having a "basic" and "advanced" step to logging in - only people who have the upgraded account can utilize certain tutorials, etc.


## New Material

Since I am very fond of CSS and am keen to finding new ways to utilize it, I opted to learn CSS Grid. It's an alternative way to get div's to line up properly without using flex or float. I got the hang of it quite quickly and am actually planning on integrating this new method into my portfolio as well.

## Link
[Brickhaus Lifestyle](https://brickhaus.herokuapp.com/)
