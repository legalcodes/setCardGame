(function() {
  'use strict';

	describe('Ancillary Methods', function(){

		describe('makeCard', function() {

			it('should generate a card with four properties', function(){
				var result = makeCard();
				expect(result).to.equal(8);
			});
		});

		describe('makeDeck', function() {

			it('should create a deck with 52 cards', function(){
				var result = makeDeck(board);
				expect(result).to.equal(8);
			});
		});

		describe('makeBoard', function() {

			it('should create a 12-card board and remove cards from the deck', function(){
				var result=playSet(3, 5);
				expect(result).to.equal(8);
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
