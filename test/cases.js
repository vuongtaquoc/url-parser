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

	it('should replace params with values', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId', {
			termId: 1,
			postId: 2,
		});

		should.equal('http://example.com/terms/1/posts/2', url);

		done();
	});

	it('should replace params with values and add query string', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId', {
			termId: 1,
			postId: 2,
			skip: 5,
			take: 20,
		});

		should.equal('http://example.com/terms/1/posts/2?skip=5&take=20', url);

		done();
	});

	it('should replace params with no value', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId');

		should.equal('http://example.com/terms/:termId/posts/:postId', url);

		done();
	});

	it('should replace params with no value but the query string is has value', function(done) {
		var url = urlParser('http://example.com/terms/:termId/posts/:postId', {
			skip: 5,
			take: 20,
		});

		should.equal('http://example.com/terms/:termId/posts/:postId?skip=5&take=20', url);

		done();
	});
});
