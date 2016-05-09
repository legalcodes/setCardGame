window.gameLogic = {};

//////////////////////////
///// ANCILLARY METHODS///
//////////////////////////

gameLogic.properties = {
	colors: ['red', 'green', 'purple'],
	shapes: ['diamond', 'squiggle', 'oval'],
	shadings: ['solid', 'empty', 'striped'],
	numbers: [1,2,3]
};

// helper function that returns random element from passed in array
gameLogic.getRandomElement = function(arr){
	return arr[Math.floor(Math.random() * arr.length)]
};

// Each card is assigned random properties when created
gameLogic.Card = function(){
	this.color = gameLogic.getRandomElement(gameLogic.properties.colors);
	this.shape = gameLogic.getRandomElement(gameLogic.properties.shapes);
	this.shading = gameLogic.getRandomElement(gameLogic.properties.shadings);
	this.number = gameLogic.getRandomElement(gameLogic.properties.numbers);
};

// change the size of the deck here
gameLogic.deckSize = 52;

// generate deck and add numbered id for each card
gameLogic.makeDeck = function(){
  var cards = [];
	for (var i = 0; i < gameLogic.deckSize; i++){
		var newCard = new gameLogic.Card;
		newCard.id = i;
		cards.push(newCard);
	}
	return cards;
};

gameLogic.makeBoard = function(deck){
	var board = [];
	for (var i = 0; i < 12; i++){
		board.push(deck.shift());
	}
	return board;
};

/////////////////////////
////REQUIRED METHODS/////
/////////////////////////

gameLogic.findSet = function(card1, card2, card3){
	var cards = [card1, card2, card3];

	var colors = _.pluck(cards, 'color');
	var shapes = _.pluck(cards, 'shape');
	var shading = _.pluck(cards, 'shading');
	var numbers = _.pluck(cards, 'number');

  var props = [colors, shapes, shading, numbers];
	// findSet will return true unless both of the following tests fail:
	var isSet = true;
	// for each prop
	_.each(props, function(propArr){
		// check to see if all values match
		var areSame = propArr[0] === propArr[1] && propArr[1] === propArr[2];
		// if not, check to see if all values are different
		if (!areSame){
			var allDifferent = propArr[0] !== propArr[1] && propArr[1] !== propArr[2];
			if (!allDifferent){
				isSet = false
			}
		}
	});
	return isSet;
};

// should take a board of cards and either find a set or determine if there are no sets on the table.

gameLogic.checkBoard = function(board, setLength){
	var sets = [];
	// if user provides no value, setLength defaults to three
	var setLength = (typeof setLength === 'undefined') ? 3 : setLength;
	// container for a single 3-card-combination to be tested for set
	var combo = [];

	// recursive function to find all combos
	var findAllCombos = function(){

		// recursed deep enough?
		if(combo.length === setLength){

			// if so, is combo a set?
			if (gameLogic.findSet(combo[0], combo[1], combo[2])){

				// if so, store set
				sets.push(_.pluck(combo, 'id'));
			}
			return;
		}

		// visit children
		for (var i = 0; i < board.length; i++){
			// prep work
			// pull card into combo and remove from board
			// console.log('Before: ', board.length);

			combo.push(board[i]);
			var selected = board.splice(i, 1)[0];
			// console.log('Removed card ',  selected, ' Board length: ', board.length);

			// recurse down
			findAllCombos();
			// cleanup
			combo.pop();
			// replace card into board 
			board.splice(i, 0, selected);
			// console.log('Replaced card ' + selected, 'Board length: ', board.length);
		}
	};
	findAllCombos();
	console.log(sets.length);
};
