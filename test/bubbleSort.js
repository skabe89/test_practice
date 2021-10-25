const expect = require('chai').expect
const validator = require('../bubbleSort')
const arr1 = "Hello World"

describe('#bubbleSort()', () => {
  it('should sort array ascending order', () => {
    expect(validator.bubbleSort(arr1)).to.equal('Hello World')
  })
})