(function() {
  'use strict';
	describe('Requirements', function(){

		describe('findSet', function() {

			it('should take three cards, and determine whether the three cards make a set.', function(){
				var result=findSet(3, 5);
				expect(result).to.equal(8);
			});
		});

	});
})();
