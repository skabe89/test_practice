const expect = require('chai').expect
const validator = require('../DFS')


describe('#DFS()', () => {
  it("Should return 'Hello World''", () => {
    expect(validator.DFS()).to.equal("Hello World")
  })
})