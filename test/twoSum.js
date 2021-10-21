let expect = require('chai').expect
let validator = require('../twoSum')
const test1 = [1, 2, 4, -2]

describe('#twoSum()', () => {
  it('should return true', () => {
    expect(validator.twoSum(test1, 6)).to.equal(true)
  })
  it('should return true', () => {
    expect(validator.twoSum(test1, 5)).to.equal(true)
  })
  it('should return false', () => {
    expect(validator.twoSum(test1, 10)).to.equal(false)
  })
})