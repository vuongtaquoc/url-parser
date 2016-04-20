'use strict';

var qs = require('querystring');
var _ = require('lodash');

module.exports = function(path, params) {
	if (!path) {
		return;
	}

	if (params && (!_.isObject(params) || _.isArray(params))) {
		return;
	}

	var query = {};
	var invalid = false;

	_.forEach(params, function(param, name) {
		var searchPattern = new RegExp('(:' + name + ')(\\(.*\\))?(\\?{0,1})');
		var match = path.match(searchPattern);

		if (match) {
			if (!_.isString(param) && !_.isNumber(param)) {
				invalid = true;

				return false;
			}

			path = path.replace(searchPattern, param);
		} else {
			if (_.isString(param) || _.isNumber(param)) {
				query[name] = param;
			}
		}
	});

	if (invalid) {
		return;
	}

	if (_.keys(query).length > 0) {
		path += '?' + qs.stringify(query);
	}

	return path;
};
