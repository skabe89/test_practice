const expect = require('chai').expect
const validator = require('../largestSubArray')

describe('#largestSubArray()', () => {
  it('Should return Hello', () => {
    expect(validator.largestSubArray('Hello')).to.equal('Hello')
  })
})