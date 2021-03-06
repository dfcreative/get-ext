const assert = require('assert');
const extname = require('./');
const path = require('path');

assert.equal(path.extname(''), extname(''));
assert.equal(path.extname('../x'), extname('../x'));
assert.equal(path.extname('../x.yz'), extname('../x.yz'));
assert.equal(path.extname('./a../x.yz'), extname('./a../x.yz'));
assert.equal(path.extname('./a../.yz'), extname('./a../.yz'));
assert.equal(path.extname('./a../yz.'), extname('./a../yz.'));