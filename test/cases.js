'use strict';

require('./blanket');
var should = require('should');

var urlParser = require('../lib/url-parser/index');

describe('url-parser', function() {
	it('should return source string when no params passed', function(done) {
		var url = urlParser('http://example.com/one/two');

		should.equal('http://example.com/one/two', url);

		done();
	});

	it('should replace source string with params', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId', {
			termId: 1,
			postId: 2,
		});

		should.equal('http://example.com/terms/1/posts/2', url);

		done();
	});

	it('should replace source string with params and add query string', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', {
			termId: 1,
			skip: 5,
			take: 20,
		});

		should.equal('http://example.com/terms/1/posts?skip=5&take=20', url);

		done();
	});

	it('should replace source string with no params', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId');

		should.equal('http://example.com/terms/:termId/posts/:postId', url);

		done();
	});

	it('should replace source string with no params but the query string is has value', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', {
			skip: 5,
			take: 20,
		});

		should.equal('http://example.com/terms/:termId/posts?skip=5&take=20', url);

		done();
	});

	it('should add query string with a param is null', function(done) {
		var url = urlParser('http://example.com/terms', {
			skip: null,
			take: 20,
		});

		should.equal('http://example.com/terms?take=20', url);

		done();
	});

	it('should replace source string with params are string', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', 'string');

		should.equal(undefined, url);

		done();
	});

	it('should replace source string with params are array', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', [{
			skip: 5,
			take: 20,
			termId: 1,
		}]);

		should.equal(undefined, url);

		done();
	});

	it('should replace source string with value of param is not string or number', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', {
			skip: 5,
			take: 20,
			termId: {
				id: 1,
			},
		});

		should(undefined, url);

		done();
	});

	it('should replace source string with value of query string is not string or number', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts', {
			skip: {
				data: 3
			},
			take: 20,
			termId: 1,
		});

		should('http://example.com/terms/1/posts?take=20', url);

		done();
	});
});
