$(document).ready(function (){

$("#scissors").on('click', function(){
  var result = compare('scissors', computerRandom());
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', computerRandom());
  $("#decision").html(result);
});

$('#paper').on('click', function(){
  var result = compare('paper', computerRandom());
  $("#decision").html(result);
});


var compare = function(user, computer) {
  if(user === 'rock') {

      if(computer === 'rock') {
          return 'Both guessed Rock';
      } else if (computer === 'paper') {
        return 'Rock loses to paper...You Lose';
      } else if (computer === 'scissors') {
        return 'Rock beats Scissors! You Win!';
      }

  } else if (user === 'paper') {

      if(computer === 'paper') {
        return 'Both guessed paper';
      } else if (computer === 'rock') {
        return 'Paper beats Rock You Win!';
      } else if (computer === 'scissors') {
        return 'Paper is cut by Scissors! You Lose!';
    }
  } else if (user === 'scissors') {

      if(computer === 'scissors') {
        return 'Both guessed scissors';
      } else if (computer === 'paper') {
        return 'My scissor beat paper :(';
      } else if (computer === 'rock') {
        return 'My scissor got crushed! >:)';
    }
  } else {
    return "Something has gone terribly wrong here...!"
  }
};
// Random choice generator using math floor to round the number then multiply 3 and 1 so it is not 0-2
var computerRandom = function() {
        var random = Math.floor(Math.random() * 3 + 1);
        if (random === 1) {
	      return  'rock';
        } else if(random === 2) {
	      return 'paper';
        } else {
	      return 'scissors';
        }
};

});
