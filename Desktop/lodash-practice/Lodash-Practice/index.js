var _ = require('lodash');
const assert = require('assert');

let a = [1,4,6,4,8,3];
console.log(_.reverse(a));

let b = [10,43,55,19,7,3];
console.log(_.chunk(b, 2))

let c = [88,32,44,21,8,99,3];
console.log(_.without(c,21,88))

let d = [6,4,8,3,2,6];
console.log(_.shuffle(d))

let e = [88,5,66,4,96,75];
console.log(_.max(e))

// Test

describe('#test lodash functions()', () => {

  it('reverse', () => {
    assert.deepEqual(_.reverse([1,2,3]),[3,2,1]);
  });
  it('max', () => {
    assert.deepEqual(_.max([1,2,3]), 3);
  });
  it('shuffle', () => {
    assert.deepEqual(_.shuffle([1]),[1]);
  });
  it('without', () => {
    assert.deepEqual(_.without([1,2,3])[1,3]);
  });
  it('chunk', () => {
    assert.deepEqual(_.chunk([10,43,55,19,7,3], 2),([[10,43],[55,19],[7,3]]));
  });
});