var names = [];
var audio = new Audio('sounds/Finger-snap.mp3');

// initialize board
reset();

// create tiles from names in array
function createTiles(){
  for(var i = 0; i < names.length; i++){
    $(".tileContainer").append("<span class='tile'>" + names[i] + "</span>");
  }
}

// remove approximately half of the tiles
function thanosed(){
  names.forEach(function(name){
    var randomNum = Math.floor((Math.random() * 100) + 1);
    if (randomNum < 50) {
      names.splice(this, 1);
    }
  });
  clearTiles();
  createTiles();
}

// clear all tiles
function clearTiles(){
  names.forEach(function(name){
    $(".tile").fadeOut(500,function(){
        $(this).remove();
      });
  });
}

// empty array
function clearArray(){
  names = [];
}

// clear board, reset to original tiles, and recreate board
function reset(){
  clearTiles();
  clearArray();
  names = ["Iron Man", "Vision", "Captain America", "Thor", "Black Widow", "Pepper Pots", "War Machine", "Heimdall", "Loki", "The Hulk", "Bucky Barnes", "Falcon", "Hawkeye", "Drax", "Black Panther", "Rocket Raccoon", "Dr. Strange", "Groot", "Nebula", "Spiderman", "Scarlet Witch", "Starlord", "Ant-Man", "Gamora", "Okoye", "Mantis", "The Wasp"];
  createTiles(names.name);
}

// create new tile based on user input
function addTile(){
  var newTile = $('#userInput').val();
  names.push(newTile);
  $('#userInput').val("");
  $(".tileContainer").append("<span class='tile'>" + newTile + "</span>");
}

// adds new tile after user presses enter or clicks + button
$('document').ready(function(){
    $('#addButton').click(function(){
        addTile();
    });
    $('#userInput').keypress(function(e){
      if(e.which == 13){
        addTile();
        }
    });
});

// when clear button is clicked, clear tiles
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
