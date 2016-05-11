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

			it('should create a deck of size equal to gameLogic.deckSize', function(){
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

		describe('Game', function() {
				var testGame = new gameLogic.Game;

				it ('should have a board of 12 cards', function(){
						expect(testGame.gameBoard.length).to.equal(12);
				});

				it ('should have a deck with 40 cards remaining', function(){
						var testingDeck = testGame.gameDeck;
						expect(testingDeck.length).to.equal(40);
				});
		});

		describe('Deal', function() {
			var testGame = new gameLogic.Game;
			var cards = [testGame.gameDeck[0],testGame.gameDeck[1],testGame.gameDeck[2] ];
			var departed = _.pluck(cards, 'id');

			it ('should remove three cards from the gameDeck', function(){
					testGame.deal();
					var matches = _.intersection(_.pluck(testGame.gameDeck, 'id'), departed);
					expect(matches.length).to.equal(0);
					expect(testGame.gameDeck.length).to.equal(37);
			});

			it ('should add those cards to the gameBoard', function(){
					var matches = _.intersection(_.pluck(testGame.gameBoard, 'id'), departed);
					expect(matches.length).to.equal(3);
					expect(testGame.gameBoard.length).to.equal(15);
			});

		});

	});


	describe('Requirements', function(){

		var card1 = {
			id: 1,
			color: 'red',
			shape: 'solid',
			shading: 'squiggle',
			number: 2
		};
		var card2 = {
			id: 2,
			color: 'green',
			shape: 'solid',
			shading: 'diamond',
			number: 1
		};
		var card3 = {
			id: 3,
			color: 'purple',
			shape: 'solid',
			shading: 'oval',
			number: 3
		};
		var card4 = {
			id: 4,
			color: 'green',
			shape: 'solid',
			shading: 'squiggle',
			number: 2
		};
		var card5 = {
			id: 5,
			color: 'purple',
			shape: 'empty',
			shading: 'squiggle',
			number: 1
		};
		var card6 = {
			id: 6,
			color: 'purple',
			shape: 'solid',
			shading: 'oval',
			number: 3
		};
		var card7 = {
			id: 7,
			color: 'purple',
			shape: 'striped',
			shading: 'squiggle',
			number: 2
		};
		var card8 = {
			id: 8,
			color: 'green',
			shape: 'solid',
			shading: 'diamond',
			number: 1
		};
		var card9 = {
			id: 9,
			color: 'purple',
			shape: 'solid',
			shading: 'oval',
			number: 3
		};
		var card10 = {
			id: 10,
			color: 'green',
			shape: 'solid',
			shading: 'oval',
			number: 2
		};
		var card11 = {
			id: 11,
			color: 'green',
			shape: 'solid',
			shading: 'squiggle',
			number: 1
		};
		var card12 = {
			id: 12,
			color: 'purple',
			shape: 'solid',
			shading: 'oval',
			number: 3
		};
		var testBoard = [
			card1, card2, card3,
			card4, card5, card6,
			card7, card8, card9,
			card10, card11, card12
		];

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
					color: 'green',
					shape: 'solid',
					shading: 'squiggle',
					number: 2
				};
				var card5 = {
					color: 'green',
					shape: 'solid',
					shading: 'squiggle',
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
				var result3 = gameLogic.findSet(card1, card3, card4);
				expect(result1).to.equal(true);
				expect(result2).to.equal(false);
				expect(result3).to.equal(false);
			});
		});

		describe('checkBoard', function() {

			it('should take a board of cards and either find a set or determine if there are no sets on the table.', function(){
			});
 			var result = gameLogic.checkBoard(testBoard);
		});

		describe('playSet', function() {

			it('should play an entire game of Set, from beginning to end, and return a list of each valid sets you removed from the board.', function(){
					var result = gameLogic.playGame();
					expect(Array.isArray(result)).to.equal(true);
			});
		});

	});
})();
