const expect = require('chai').expect
const validator = require('../mergeSort')
const arr1 = [5,4,3,2,1]
const arr2 = [1,3,2,5,4]
const arr3 = [34,50,24,43,12]

describe('#mergeSort()', () => {
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.mergeSort(arr1))).to.equal(JSON.stringify([1,2,3,4,5]))
  })
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.mergeSort(arr2))).to.equal(JSON.stringify([1,2,3,4,5]))
  })
  it('should sort array ascending order', () => {
    expect(JSON.stringify(validator.mergeSort(arr3))).to.equal(JSON.stringify([12,24,34,43,50]))
  })
})