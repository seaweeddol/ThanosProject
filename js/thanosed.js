var names = [];
var audio = new Audio('sounds/Finger-snap.mp3');

init();

function init(){
  reset();
}

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

//clear tiles
function clearTiles(){
  names.forEach(function(name){
    $(".tile").fadeOut(500,function(){
        $(this).remove();
      });
  });
}

function clearArray(){
  names = [];
}

// clear board, and reset to original tiles
function reset(){
  clearTiles();
  clearArray();
  names = ["Iron Man", "Vision", "Captain America", "Thor", "Black Widow", "Pepper Pots", "War Machine", "Heimdall", "Loki", "The Hulk", "Bucky Barnes", "Falcon", "Hawkeye", "Drax", "Black Panther", "Rocket Raccoon", "Dr. Strange", "Groot", "Nebula", "Spiderman", "Scarlet Witch", "Starlord", "Ant-Man", "Gamora", "Okoye", "Mantis", "The Wasp"];
  createTiles(names.name);
}

function addTile(){
  var newTile = $('#userInput').val();
  names.push(newTile);
  $('#userInput').val("");
  $(".tileContainer").append("<span class='tile'>" + newTile + "</span>");
}

// when user enters text and presses enter or button, add new tile
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

//when clear button is clicked, clear tiles
clearButton.addEventListener("click", function(){
  clearTiles();
  clearArray();
});

//when reset button is clicked, reset game
resetButton.addEventListener("click", function(){
  reset();
});

thanosButton.addEventListener("click", function(){
  thanosed();
  audio.play();
});
