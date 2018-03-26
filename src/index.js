const govinfo = require('./govinfo')
const jsonConverter = require('./json-converter')

const api = Object.assign({
}, govinfo, jsonConverter)

module.exports = api
