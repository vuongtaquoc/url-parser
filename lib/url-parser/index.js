'use strict';

var qs = require('querystring');

module.exports = function(path, params) {
	if (path) {
		var query = {};

		for (var name in params) {
			var searchPattern = new RegExp('(:' + name + ')(\\(.*\\))?(\\?{0,1})');
			var match = path.match(searchPattern);
			var param = params[name];

			if (match) {
				path = path.replace(searchPattern, param);
			} else {
				if (typeof param !== 'undefined' &&
					param !== null &&
					param !== '') {
					query[name] = params[name];
				}
			}
		}

		if (Object.keys(query).length > 0) {
			path += '?' + qs.stringify(query);
		}
	}

	return path;
};
