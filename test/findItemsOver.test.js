let assert = require('assert')
let findItemsOver = require('../findItemsOver')

describe('findItemsOver function', () => {
    it('must find and return items with the quantity over the specified threshold', () => {
        assert.deepStrictEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 15), [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

    it('should return an empty array if none of the quantities provided are above the provided threshold', () => {
        assert.deepStrictEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 0},
            {name : 'bananas', qty : 10},
            {name : 'apples', qty : 3},], 15), []); 
    });
});
