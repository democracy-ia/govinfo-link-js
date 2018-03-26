const { expect } = require('chai')
const { noop } = require('lodash')
const govinfo = require('../src/index')
const jsonConverter = require('../src/json-converter')
const sinon = require('sinon')

const callback = (error, data) => {
  
  if (error) {
    console.error(error)
  } else {
    govinfo.toJson(data)
    govinfo.toJson(data, {
      compact: true
    })
  }
  expect(jsonConverter.toJson.called).to.be.true
}

const opts = {
  linkType: 'xml'
}
describe('jsonConverter', () => {

  describe('adds a "toJson" method, which', async () => {

    before(() => {
      sinon.stub(jsonConverter, 'toJson').callsFake(noop)
    })

    after(() => {
      jsonConverter.toJson.restore()
    })

    expect(jsonConverter).to.be.ok
    expect(jsonConverter.toJson).to.be.ok

    it('converts XML to JSON', (done) => {
      const api = new govinfo.CongressionalBills()
      api.billsFetchUsingGET('115', 'hr', 2422, opts, callback)      
      done()
    })
  })
})
