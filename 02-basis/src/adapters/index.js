const { getAgeAdapter } = require('../adapters/get-age.adapter');
const { uuidAdapter } = require('../adapters/uuid.adapter');
const { httpClientAdapter } = require( '../adapters/http-client.adapter' );

module.exports = {
  getAgeAdapter,
  uuidAdapter,
  httpClientAdapter
};

