const expect = require('chai').expect
const validator = require('../largestSubArray')
const testOne = [1, 2, -3, -2, 2]
const testTwo = [2, 1, -2, 3, 2]
const testThree = [-1]
const testFour = [0]

describe('#largestSubArray()', () => {
  it('Should Return largest Sub Array from Array of Nums', () => {
    expect(validator.largestSubArray(testOne)).to.equal(3)
  })
  it('Should Return largest Sub Array from Array of Nums', () => {
    expect(validator.largestSubArray(testTwo)).to.equal(6)
  })
  it('Should Return 0 if largest Sub Array is Negative', () => {
    expect(validator.largestSubArray(testThree)).to.equal(0)
  })
  it('Should Return 0 if array is empty', () => {
    expect(validator.largestSubArray(testFour)).to.equal(0)
  })
})