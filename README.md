# ThanosProject Description
A web application that decimates approximately half of the board at the click of a button. Similar (probably) to the upcoming Avengers movie though, it allows you to bring everyone back. You can also add additional tiles, or wipe out the board entirely and start fresh.

View it here: https://seaweeddol.github.io/ThanosProject/index.html

# Background
I created this project mid-way through Colt Steele's web development course on Udemy to test out some of the concepts I have learned so far.

# Change Log
**1/6/2018** 
- Realized logic for removing ~50% of the array was not removing the correct items, and did not work if there was only one item left. Updated createTiles() function to push the items that met the conditions to a new array, rather than being removed from the original array. Then matched the original array to the new array, and cleared the new array
- Fixed tile fadeIn()/fadeOut() functions. The new tiles were appearing at the end of the original tiles and then moving up after the original tiles faded away. Fixed functions to make the old tiles fade out before the new tiles appeared.
