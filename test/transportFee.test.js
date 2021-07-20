let assert = require('assert')
let transportFee = require('../transportFee')

describe('transportFee function', () => {
    it('should return R20 if shift is morning', () => {
        assert.strictEqual(transportFee('morning'), 'R20');
    });
    it('should return R10 if shift is afternoon', () => {
        assert.strictEqual(transportFee('afternoon'), 'R10');
    });
    it('should return "free" if shift is neither morning nor afternoon', () => {
        assert.strictEqual(transportFee('night'), 'free');
    });
    
});
