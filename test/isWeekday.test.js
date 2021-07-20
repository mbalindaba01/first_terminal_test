let assert = require('assert')
let isWeekday = require('../isWeekday')

describe('isWeekday function', () => {
    it('should return true for "Thursday"', () => {
        assert.strictEqual(isWeekday('Thursday'), true);
    });
    it('should return true for "Monday"', () => {
        assert.strictEqual(isWeekday('Monday'), true);
    });
    it('should return true for "Friday"', () => {
        assert.strictEqual(isWeekday('Friday'), true);
    });
    
    it('should return false for "Saturday"', () => {
        assert.strictEqual(isWeekday('Saturday'), false);
    });
    it('should return false for "Sunday"', () => {
        assert.strictEqual(isWeekday('Sunday'), false);
    });
    it('should return false for an empty string in the parameter', () => {
        assert.strictEqual(isWeekday(''), false);
    }); 
});
