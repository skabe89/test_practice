const { expect } = require('chai')

expect = require('chai').expect
const validator = ('../largestSubArray')

describe('#largestSubarray()', () => {
  it('Should return Hello', () => {
    expect(validator.longestSubArray().to.equal('Hello'))
  })
})