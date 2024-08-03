const customapierror=require('./custom-error');
const {StatusCodes}=require('http-status-codes')
class unauthorized extends customapierror {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED;
    }
  }
  
  module.exports = unauthorized;
  