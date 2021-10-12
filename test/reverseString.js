const expect = require('chai').expect
const validator = require('../reverseString')

describe('#reverseString()', () => {

  it('should reverse hello', function(){
    expect(validator.reverseString('hello')).to.equal('olleh')
  })

  it("should reverse 'Goodnight Moon'", function(){
    expect(validator.reverseString('Goodnight Moon')).to.equal('nooM thgindooG')
  })

  it("should reverse '  the   fox jumpedOver the    fence  ", () => {
    expect(validator.reverseString('  the   fox jumpedOver the    fence  ')).to.equal('  ecnef    eht revOdepmuj xof   eht  ')
  })

})