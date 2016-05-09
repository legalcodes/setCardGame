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

gameLogic.getRandomElement = function(arr){
	return arr[Math.floor(Math.random() * arr.length)]
};

gameLogic.Card = function(){
	this.color = gameLogic.getRandomElement(gameLogic.properties.colors);
	this.shape = gameLogic.getRandomElement(gameLogic.properties.shapes);
	this.shading = gameLogic.getRandomElement(gameLogic.properties.shadings);
	this.number = gameLogic.getRandomElement(gameLogic.properties.numbers);
};

gameLogic.deckSize = 52;

// generate deck
gameLogic.makeDeck = function(){
  var cards = [];
	for (var i = 0; i < gameLogic.deckSize; i++){
		cards.push(new gameLogic.Card);
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

	var isSet = true;
	// for each prop
	_.each(props, function(propArr){
		// check to see if all values match
		var areSame = propArr[0] === propArr[1] && propArr[1] === propArr[2];
		// if not, check to see if ANY values match
		if (!areSame){
			var noneMatch = propArr[0] !== propArr[1] && propArr[1] !== propArr[2];
			if (!noneMatch){
				isSet = false
			}
		}
	});
	return isSet;
};

// should take a board of cards and either find a set or determine if there are no sets on the table.

gameLogic.checkBoard = function(board, setLength){
	// holds all 3 card combinations for passed in board
	var combos = [];
	// if user provides no value, setLength defaults to three
	var setLength = (typeof setLength === 'undefined') ? 3 : setLength;
	// holds values for a single 3-card-combo
	var combo = [];

	// recursive function to find all combos
	var findAllCombos = function(){
		// check if we have recursed far enough
		if(combo.length === setLength){
			// add this combo to the combos list
			console.log('combo: ', combo);
			console.log(combo[0], combo[1], combo[2]);
			combos.push(combo.slice());
			return;
		}
		// visit children
		for (var i = 0; i < board.length; i++){
			// prep work
			combo.push(board[i]);
			// console.log('pushed: ', combo);
			// recurse down
			findAllCombos();
			// cleanup
			// console.log('popped: ', combo);
			combo.pop();
		}
	};
	findAllCombos();
  console.log('Combos : ', combos);
};
