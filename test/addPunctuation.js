const expect = require('chai').expect
const validator = require('../addPunctuation')
const string = 'This works'

describe('#addPunctuation()', () => {

  it("should add '!' to the sentance", () => {
    expect(validator.addPunctuation(string, '!')).to.equal('This works!')
  })

  it("should add '.' to the sentance", () => {
    expect(validator.addPunctuation(string, '.')).to.equal('This works.')
  })
  
  it("should add '?' to the sentance", () => {
    expect(validator.addPunctuation(string, '?')).to.equal('This works?')
  })

})