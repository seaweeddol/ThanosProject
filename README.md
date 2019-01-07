# ThanosProject Description
A web application that decimates approximately half of the board at the click of a button. Similar (probably) to the upcoming Avengers movie though, it allows you to bring everyone back. You can also add additional tiles, or wipe out the board entirely and start fresh.

View it here: https://seaweeddol.github.io/ThanosProject/index.html

# Background
I created this project mid-way through Colt Steele's web development course on Udemy to practice some of the concepts learned so far.

# Change Log
**1/6/2018** 
- Updated createTiles() function to push the items that met the condition to a new array, then update the original array with the new array. The createTiles() function was not removing the correct items, and did not work if there was only one item left. 
- Fixed tile fadeIn()/fadeOut() functions. The new tiles were appearing at the end of the original tiles and then moving up after the original tiles faded away. Fixed functions to make the old tiles fade out before the new tiles appeared.
