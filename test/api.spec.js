const {expect} = require('chai')
const govinfo = require('../src/')
const util = require('util')

describe('govinfo', () => {

  const callback = (error, data, response) => {
    if (error) {
      console.error(error)
    } else {
      console.log(govinfo.toJson(response))
    }
  }

  const opts = {
    linkType: 'xml'
  }

  it('converts Bill XML to JSON', async () => {
    const api = new govinfo.CongressionalBills()
   
  })

})
