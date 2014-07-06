/**
 * Created by dseet on 7/4/2014.
 */
var fortune = require('../../lib/fortune.js');
var expect = require('chai').expect;

suite("Fortune cookie Tests", function () {
    test('getFortune() should return a fortune', function () {
        expect(typeof fortune.getFortune() === 'string');
    });
});