let assert = require('assert')
let regCheck = require('../regCheck')

describe('regCheck function', () => {
    it('should return true for ("DV 23 NB GP,", "GP")', () => {
        assert.strictEqual(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('should return true for("LP 87 BN GP", "GP")', () => {
        assert.strictEqual(regCheck('LP 87 BN GP', 'GP'), true);
    });
    

    it("should return false for ('DV 23 GP NB', 'GP')", () => {
        assert.strictEqual(regCheck('DV 23 GP NB', 'GP'), false);
    });
    it("should return false for ('CA 564 768', 'CA')", () => {
        assert.strictEqual(regCheck('CA 564 768', 'CA'), false);
    });
    
});
