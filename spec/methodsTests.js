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

			it('should create a deck whose size matches gameLogic.deckSize', function(){
				var result = gameLogic.makeDeck();
				expect(result.length).to.equal(gameLogic.deckSize);
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
				var card1 = {
					color: 'red',
					shape: 'solid',
					shading: 'squiggle',
					number: 2
				};
				var card2 = {
					color: 'green',
					shape: 'solid',
					shading: 'diamond',
					number: 1
				};
				var card3 = {
					color: 'purple',
					shape: 'solid',
					shading: 'oval',
					number: 3
				};
				var card4 = {
					color: 'red',
					shape: 'solid',
					shading: 'squiggle',
					number: 2
				};
				var card5 = {
					color: 'green',
					shape: 'solid',
					shading: 'diamond',
					number: 1
				};
				var card6 = {
					color: 'purple',
					shape: 'solid',
					shading: 'oval',
					number: 3
				};

				var result1 = gameLogic.findSet(card1, card2, card3);
				var result2 = gameLogic.findSet(card4, card5, card6);
				expect(result1).to.equal(true);
				expect(result2).to.equal(false);
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