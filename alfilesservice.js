// filename: filesService.js

/** 
* @module alfilesservice 
* @description Exposes operations supported by awardletter files REST api
*/

'use strict';

var httpRequest = require('request');
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
# @param {function} callback Standard callback
*/
exports.upload = function(rootUrl, authorization, content, callback) {

  var options = {
    url: rootUrl + files,
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/octet-stream'
    },
    body: JSON.stringify(content)
  };  

  /**
  * callback for http.post
  * @param {Exception} error The error if any  
  * @param {object} response http response object
  * @param {body} body http response body
  */ 
  function requestHandler(error, response, body){    
    if (error) {
      callback(error);
      return;
    }
    callback(null, body);
  }

  httpRequest.post(options, requestHandler);
}

/**
* retrieves file processing results summary
* @param {object} request Defines rootUrl and authorization header value
* @param {fileId} string The Id of the file being retrieved
# @param {function} callback Standard callback
*/
exports.getFile = function(request, fileId, callback) {
  var options = {
    url: request.rootUrl + files + '/' + fileId,
    headers: {
      'Authorization': request.authorization,
      'Content-Type': 'application/octet-stream'
    }
  };

  /**
  * callback for http.get
  * @param {object} error The error if any occurred
  * @param {object} response http response object
  * @param {body} body http response body
  */ 
  function getFileRequestHandler(error, response, body) {
    if (error) {
      callback(error);
      return;
    }
    callback(null, body);    
  }

  httpRequest.get(options, getFileRequestHandler);
}

/**
* get all records for a given file
* @param {object} request Defines rootUrl and authorization header value
* @param {fileId} string The Id of the file for which records are being retrieved
# @param {function} callback Standard callback
*/
exports.getRecords = function(request, fileId, callback) {
  
  var options = {
    url: request.rootUrl + files + '/' + fileId + '/records',
    headers: {
      'Authorization': request.authorization,
      'Content-Type': 'application/octet-stream'
    }
  };

  /**
  * callback for http.get
  * @param {Exception} error The error if any  
  * @param {object} response http response object
  * @param {body} body http response body
  */ 
  function getRecordsRequestHandler(error, response, body) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, body);    
  }

  httpRequest.get(options, getRecordsRequestHandler);
}


