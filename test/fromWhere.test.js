let assert = require('assert')
let fromWhere = require('../fromWhere')

describe('fromWhere function', () => {
    it('should return "Bellville" for all reg numbers starting with "CY"', () => {
        assert.strictEqual(fromWhere('CY 756 948'), 'Bellville')
    });
    it('should return "Paarl" for all reg numbers starting with "CJ"', () => {
        assert.strictEqual(fromWhere('CJ 332 430'), 'Paarl')
    });
    it('should return "Cape Town" for all reg numbers starting with "CA"', () => {
        assert.strictEqual(fromWhere('CA 002 365'), 'Cape Town')
    });
    it('should return "Some other place!" for all other registration numbers', () => {
        assert.strictEqual(fromWhere('NN 758 ZN'), 'Some other place!')
    });
    
    
    
});
