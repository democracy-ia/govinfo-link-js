const xmlJs = require('xml-js')

const WHITESPACE = 2
const defaultOptions = {
  'compact': false, 'spaces': WHITESPACE
}

const jsonConverter = {

  toJson (response, options = defaultOptions) {
    return xmlJs.xml2json(response.text, options)
  }
}

module.exports = jsonConverter
