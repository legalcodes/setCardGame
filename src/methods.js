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
	// flag
	var isSet = true;
	// for each property
		// are values the same on all cards?
	    // if so, move to next property
			// else are values different on all cards?

	// if values were neither all different nor all the same, no set
	// else, set

};
