'use strict';

var qs = require('querystring');
var _ = require('lodash');

module.exports = function(path, params) {
	if (path) {
		if (!_.isObject(params) || _.isArray(params)) {
			return path;
		}

		var query = {};

		_.forEach(params, function(param, name) {
			var searchPattern = new RegExp('(:' + name + ')(\\(.*\\))?(\\?{0,1})');
			var match = path.match(searchPattern);

			if (match) {
				path = path.replace(searchPattern, param);
			} else {
				if (typeof param !== 'undefined' &&
					param !== null &&
					param !== '') {
					query[name] = params[name];
				}
			}
		});

		if (_.keys(query).length > 0) {
			path += '?' + qs.stringify(query);
		}
	}

	return path;
};
