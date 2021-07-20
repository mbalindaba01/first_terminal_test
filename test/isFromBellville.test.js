let assert = require('assert')
let isFromBellville = require('../isFromBellville')

describe('isFromBellville function', () => {
    it('should return true for "CY 343 456"', () => {
        assert.strictEqual(isFromBellville('CY 343 456'), true);
    });
    
    it('should return false for "CA 887 125"', () => {
        assert.strictEqual(isFromBellville('CA 887 125'), false);
    });
    it('should return false "L 225 998"', () => {
        assert.strictEqual(isFromBellville('L 225 998'), false);
    });
    
});


