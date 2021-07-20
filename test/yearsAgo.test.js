let assert = require('assert')
let yearsAgo = require('../yearsAgo')

describe('yearsAgo function', () => {
    it('should return 15 if 2006 is passed as a parameter', () => {
        assert.strictEqual(yearsAgo(2006), 15)
    });

    it('should return 26 if 1995 is passed as a parameter', () => {
        assert.strictEqual(yearsAgo(1995), 26)
    });
});
