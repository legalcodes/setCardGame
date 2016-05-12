var gameLogic = {};
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
		return arr[Math.floor(Math.random() * arr.length)];
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

gameLogic.Game = function(){
	this.turnCount = 0;
	this.gameDeck = gameLogic.makeDeck();
	this.gameBoard = gameLogic.makeBoard(this.gameDeck);
	this.gameSets = [];
	this.gameDiscard = [];
};

// Deals 3 new cards from Deck to Board

gameLogic.Game.prototype.deal = function(){
	 // remove 3 cards from game deck
		var new3 = this.gameDeck.splice(0, 3);
	 // add those 3 cards to game board
		this.gameBoard.splice(this.gameBoard.length, 0, new3[0], new3[1], new3[2]);
};


// Finds the first set on the board, adds to set list, and discards used cards from the board

gameLogic.Game.prototype.shiftSet = function(){
		// pick the first set returned from checkBoard
		var sets = gameLogic.checkBoard(this.gameBoard);
		var set = sets[0];
		var board = this.gameBoard;
		var discard = this.gameDiscard;
		// pull gameBoard card objects that make up this set
		_.each(board, function(cardObj, i){
 				if (cardObj === undefined){ return; }
				_.each(set, function(num){
						if (cardObj.id === num){
								// remove card from board and add to this.gameDiscard
								discard.push(board.splice(i, 1)[0]);
						}
				});
		});
		this.gameSets.push(set);
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

  var propSet = [colors, shapes, shading, numbers];

  var isSet = true;
	// for each propSet
	_.each(propSet, function(propArr){
	// check if all the same
		var areSame = propArr[0] === propArr[1] && propArr[1] === propArr[2];
		// if not, check if all different
		if (!areSame){
			var allDifferent = propArr[0] !== propArr[1] && propArr[1] !== propArr[2] && propArr[0] !== propArr[2];
			if (!allDifferent){
				isSet = false;
			}
		}
	});
	// return whether combo is a set
	return isSet;
};

// should take a board of cards and either find a set or determine if there are no sets on the table.

gameLogic.checkBoard = function(board, setLength){
	var sets = [];
	// if user provides no value, setLength defaults to three
	setLength = (typeof setLength === 'undefined') ? 3 : setLength;
	// container for a single 3-card-combination to be tested for set
	var combo = [];
	// recursive function to find all combos
	var findAllCombos = function(){
		// recursed deep enough?
		if(combo.length === setLength){
			// if so, is combo a set?
			if (gameLogic.findSet(combo[0], combo[1], combo[2])){
				var comboIds = _.pluck(combo, 'id');
				// if so, is combo a duplicate set?
				var isDuplicate = false;
				// for each existing set
				_.each(sets, function(set){
					// find intersection
					var hits = _.intersection(comboIds, set).length;
					// if 3 elements are the same
					if (hits === 3){
						// set is a duplicate
						isDuplicate = true;
					}
				});
				// if set is NOT a duplicate
				if (isDuplicate === false){
					// store new set
					sets.push(comboIds);
				}
			}
			return;
		}
		// visit children
		for (var i = 0; i < board.length; i++){
			// prep work
			// pull card into combo and remove from board
			combo.push(board[i]);
			var selected = board.splice(i, 1)[0];
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
	return sets;
/*
 	_.each(sets, function(set){
		console.log(set[0], set[1], set[2]); 
	});
*/
};

gameLogic.playGame = function(){
		// create new Game
		var game = new gameLogic.Game;

		// is game over?
		if (game.gameDeck.length === 0){
				return game.sets;
		}
		// any sets on the current board?
		var setsOnCurrentBoard = gameLogic.checkBoard(game.gameBoard);
		if (setsOnCurrentBoard.length > 0){
				// move first combo from board and put into gameSets

/*
				console.log('Board length: ', game.gameBoard.length);
				console.log('There is a set!');
				console.log('Game sets before: ', game.gameSets);
				game.shiftSet();
				console.log('Game sets after: ', game.gameSets);
				console.log('Board length: ', game.gameBoard.length);
*/

				// call checkBoard on new board
				// if there are any sets
		}
			//findSets

		  //checkGameBoard
		//if not, are there cards left in the deck?
		  //deal
		//if not, return gameSets
};
