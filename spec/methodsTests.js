(function() {
  'use strict';

	describe('Ancillary Methods', function(){

		describe('Card', function() {

			it('should generate a card with four properties', function(){
				var result = new gameLogic.Card;
				expect(result.color).to.be.ok;
				expect(result.shape).to.be.ok;
				expect(result.shading).to.be.ok;
				expect(result.number).to.be.ok;
			});
		});

		describe('makeDeck', function() {

			it('should create a deck with 52 cards', function(){
				var result = gameLogic.makeDeck();
				expect(result.length).to.equal(52);
			});
		});

		describe('makeBoard', function() {

			it('should create a 12-card board and remove cards from the deck', function(){
				var testDeck = gameLogic.makeDeck();
				var result = gameLogic.makeBoard(testDeck);
				expect(testDeck.length).to.equal(40);
				expect(result.length).to.equal(12);
			});
		});
	});


	describe('Requirements', function(){

		describe('findSet', function() {

			it('should take three cards, and determine whether the three cards make a set.', function(){
				var result = findSet(3, 5);
				expect(result).to.equal(8);
			});
		});

		describe('checkBoard', function() {

			it('should take a board of cards and either find a set or determine if there are no sets on the table.', function(){
				var result = checkBoard(board);
				expect(result).to.equal(8);
			});
		});

		describe('playSet', function() {

			it('should take three cards, and determine whether the three cards make a set.', function(){
				var result=playSet(3, 5);
				expect(result).to.equal(8);
			});
		});


	});
})();
