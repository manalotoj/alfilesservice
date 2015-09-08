jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

var filesService = require('../index.js');
var config = require('./config.json');
var oauth = require('oauth-wrap');
var oauthRequest = config.oauth;
var fileId = '27171CD1-D9B4-0000-08D2-B4B5CB3966F9';

describe("al-files-service", function() {

	xit('upload of valid file results in 202', function(done) {		
		oauth.getAuthHeader(oauthRequest.url,
		 	oauthRequest.creds.uid,
		 	oauthRequest.creds.pwd,
		 	oauthRequest.wrapScope)
		 	.then(function(authorization) {
		 		// TODO: upload a minimally valid file
				filesService.upload(config.filesApi.rootUrl, authorization, '{}')
					.then(function(body) {
						console.log('body: ', body);
						expect(body.length).toBe(38);						
						done();
					})
					.catch(function(error) {
						console.log(error);
						done(new Error('should have been resolved.'));
					});
			})
	}),
	it('get file should return file summary', function(done) {
		oauth.getAuthHeader(oauthRequest.url,
		 	oauthRequest.creds.uid,
		 	oauthRequest.creds.pwd,
		 	oauthRequest.wrapScope)
			.then(function(authorization) {
		 		filesService.getFile(config.filesApi.rootUrl, authorization, fileId)
					.then(function(body) {
						try {
							console.log(body);
							var file = JSON.parse(body);
							expect(file.id).toBeDefined();
							expect(file.recordCounts).toBeDefined();
						} catch (e) { done(new Error('failed to validate response: ', body)); };
						done();
					})
					.catch(function(error) {
						console.log(error);
						done(new Error('should have been resolved.'));
					})
			})
	}),
	it('get records should return file summary', function(done) {
		oauth.getAuthHeader(oauthRequest.url,
		 	oauthRequest.creds.uid,
		 	oauthRequest.creds.pwd,
		 	oauthRequest.wrapScope)
			.then(function(authorization) {
		 		filesService.getRecords(config.filesApi.rootUrl, authorization, fileId)
					.then(function(body) {
						try {
							console.log(body);
							var file = JSON.parse(body);
							//expect(file.id).toBeDefined();
							//expect(file.recordCounts).toBeDefined();
						} catch (e) { done(new Error('failed to validate response: ', body)); };
						done();
					})
					.catch(function(error) {
						console.log(error);
						done(new Error('should have been resolved.'));
					})
			})
	});
});