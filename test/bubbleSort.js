const expect = require('chai').expect
const validator = require('../bubbleSort')
const arr1 = [5,4,3,2,1]
const arr2 = [1,3,2,5,4]
const arr3 = [34,50,24,43,12]

describe('#bubbleSort()', () => {
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.bubbleSort(arr1))).to.equal(JSON.stringify([1,2,3,4,5]))
  })
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.bubbleSort(arr2))).to.equal(JSON.stringify([1,2,3,4,5]))
  })
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.bubbleSort(arr3))).to.equal(JSON.stringify([12,24,34,43,50]))
  })
})