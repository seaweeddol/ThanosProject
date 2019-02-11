// variable names
var names = [];
var survivors = [];
var audio = new Audio('sounds/Finger-snap.mp3');

// initialize board
init();

// populate names array and create the board
function init(){
  names = ["Iron Man", "Vision", "Captain America", "Thor", "Black Widow", "Pepper Pots", "War Machine", "Heimdall", "Loki", "The Hulk", "Bucky Barnes", "Falcon", "Hawkeye", "Drax", "Black Panther", "Rocket Raccoon", "Dr. Strange", "Groot", "Nebula", "Spiderman", "Scarlet Witch", "Starlord", "Ant-Man", "Gamora", "Okoye", "Mantis", "The Wasp"];
  createTiles(names.name);
}

// create tiles from names in array
function createTiles(){
  // loop through each item in the array and create a tile within the tileContainer div
  names.forEach(function(name){
    $(".tileContainer").fadeIn(500, function(){
      $(".tileContainer").append("<span class='tile'>" + name + "</span>");
    });
  });
}

// remove approximately half of the tiles
function thanosed(){
  names.forEach(function(name){
    // creates a random number between 1-100
    var randomNum = Math.floor((Math.random() * 100) + 1);
    // if random number is greater than 50, push the name into a new array
    if (randomNum > 50) {
      survivors.push(name);
    }
    console.log(name + " " + randomNum);
  });
  // update names array with survivors array
  names = survivors;
  // clear survivors array
  survivors = [];
  clearTiles();
  createTiles();
}

// clear all tiles
function clearTiles(){
  // fadeout tileContainer div, and then set to inital display property
  $('.tileContainer').fadeOut(500, function() {
     $(this).empty().show();
  });
};

// empty names array
function clearArray(){
  names = [];
};

// clear tiles and array, and initialize original tiles
function reset(){
  clearTiles();
  clearArray();
  init();
};

// create new tile based on user input
function addTile(){
  // create variable with useInput
  var newTile = $('#userInput').val();
  // push user input to names array
  names.push(newTile);
  // set userInput field to blank
  $('#userInput').val("");
  // create new tile with userInput
  $(".tileContainer").append("<span class='tile'>" + newTile + "</span>");
}

// adds new tile after user presses enter or clicks + button
$('document').ready(function(){
    // runs addTile function on addButton click
    $('#addButton').click(function(){
        addTile();
    });
    // runs addTile function on enter key press
    $('#userInput').keypress(function(e){
      if(e.which == 13){
        addTile();
        }
    });
});

// when clear button is clicked, clear tiles and names array
clearButton.addEventListener("click", function(){
  clearTiles();
  clearArray();
});

//when reset button is clicked, reset game
resetButton.addEventListener("click", function(){
  reset();
});

// when thanos button is clicked, run thanosed function and play finger snap sound
thanosButton.addEventListener("click", function(){
  thanosed();
  audio.play();
});

// this is another comment on the git-basics branch
