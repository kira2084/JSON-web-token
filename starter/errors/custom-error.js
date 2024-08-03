const {StatusCodes}=require('http-status-codes')
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = CustomAPIError;
