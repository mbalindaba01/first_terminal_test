let assert = require('assert')
let totalPhoneBill = require('../totalPhoneBill')

describe('totalPhoneBill function', () => {
    it('should return R6.15 for two calls and an sms', () => {
        assert.strictEqual(totalPhoneBill('call, call, sms'), 'R6.15')
    });
    
    it('should return R2.75 for a call', () => {
        assert.strictEqual(totalPhoneBill('call'), 'R2.75')
    });
    
    it('should return R0.65 for an sms', () => {
        assert.strictEqual(totalPhoneBill('sms'), 'R0.65')
    });
});
