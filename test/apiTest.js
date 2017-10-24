var api = require('../api');
var assert = require('assert');

describe('getChampions', function () {
    it('should return json object with the list of driver standings', function testSlash (done) {
        const year = 2005;
        this.timeout(20000);
        api.getChampions(year, [], function (yearNext, listOfChampions) {
            assert.equal(yearNext > 2015, true);
            assert.equal(listOfChampions.length === 11, true);
            done();
        });
    });
});

describe('getRaceWiners', function () {
    it('should return json with list of the winners for every race for the selected year', function testSlash (done) {
        const year = 2005;
        api.getRaceWinners(year, function (yearNext) {
            assert.equal(yearNext > 2015, true);
        });
        assert.equal();
        done();
    });
});

