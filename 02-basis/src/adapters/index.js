const { getAgeAdapter } = require('../adapters/get-age.adapter');
const { uuidAdapter } = require('../adapters/uuid.adapter');
const { httpClientAdapter } = require('../adapters/http-client.adapter');
const buildLogger = require('../adapters/logger.adapter');

module.exports = {
  getAgeAdapter,
  uuidAdapter,
  httpClientAdapter,
  buildLogger,
};
