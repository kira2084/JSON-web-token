const CustomAPIError=require('./custom-error');
const badrequest=require('./bad-request');
const unauthorized=require('./unauthenticated');

module.exports={
    CustomAPIError,
    badrequest,
    unauthorized,
}