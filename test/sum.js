let sum = require('../sum.js')
let expect = require('chai').expect

describe('#sum()', function() {

  context('without arguments', function(){
    it('should return 0', function(){
      expect(sum()).to.equal(0)
    })
  })

  context('with arguments', function(){
    it('should return sum of arguments', function(){
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })

    it('should return argument when only one argument is passed', function(){
      expect(sum(5)).to.equal(5)
    })
  })
})