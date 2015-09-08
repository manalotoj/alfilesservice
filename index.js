// filename: index.js

/** 
* @module alfilesservice 
* @description Exposes operations supported by awardletter files REST api
*/

'use strict';

var httpRequest = require('request-promise');
var files = 'files';
var values = 'values';

function HttpException(statusCode, message) {
  this.statusCode = statusCode;
  this.message = message;
  this.toString = function(){
    return 'statusCode: ' + this.statusCode + '; message: ' + this.message;
  }
} 

/**
* upload a file as application/octet-stream content
* @param {rootUrl} Root url of awardletter API
* @param {authorization} Authorization header value
* @param {object} content JSON content to be uploaded
* @returns {function} Returns a promise of the results.
*/
exports.upload = function(rootUrl, authorization, content) {

  var options = {
    url: rootUrl + files,
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/octet-stream'
    },
    body: JSON.stringify(content)
  };  

  return httpRequest.post(options);
}

/**
* retrieves file processing results summary
* @param {rootUrl} Root url of awardletter API
* @param {authorization} Authorization header value
* @param {fileId} string The Id of the file being retrieved
* @returns {function} Returns a promise of the results.
*/
exports.getFile = function(rootUrl, authorization, fileId) {
  var options = {
    url: rootUrl + files + '/' + fileId,
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/octet-stream'
    }
  };

  return httpRequest.get(options);
}

/**
* get all records for a given file
* @param {rootUrl} Root url of awardletter API
* @param {authorization} Authorization header value
* @param {fileId} string The Id of the file for which records are being retrieved
* @returns {function} Returns a promise of the results.
*/
exports.getRecords = function(rootUrl, authorization, fileId) {
  
  var options = {
    url: rootUrl + files + '/' + fileId + '/records',
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/octet-stream'
    }
  };

  return httpRequest.get(options);
}


