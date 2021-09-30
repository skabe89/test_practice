let reverseString = require('../reverseString.js')
let expect = require('chai').expect
const validator = require('../reverseString')

describe('#reverseString()', function(){
  context('reverse hello', function(){
    expect(validator.reverseString('hello')).to.equal('olleh')
  })
})