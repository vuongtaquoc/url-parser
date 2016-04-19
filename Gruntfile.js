'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			dist: 'dist/**',
		},
		browserify: {
			dist: {
				files: {
					'dist/url-parser.js': 'lib/url-parser/index.js',
				},
			},
			standalone: {
				options: {
					browserifyOptions: {
						standalone: '__',
					},
				},
				files: {
					'dist/url-parser.standalone.js': 'lib/url-parser/index.js',
				},
			},
		},
		uglify: {
			dist: {
				files: {
					'dist/url-parser.min.js': 'dist/url-parser.js',
					'dist/url-parser.standalone.min.js': 'dist/url-parser.standalone.js',
				},
			},
		},
		jscs: {
			src: [
				'index.js',
				'test/**/*.js',
				'Gruntfile.js',
			],
			options: {
				config: 'rules/.jscsrc',
			},
		},
		jshint: {
			src: '<%= jscs.src %>',
			options: {
				jshintrc: 'rules/.jshint',
			},
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('build', [
		'clean',
		'browserify',
		'uglify',
	]);

	grunt.registerTask('default', [
		'jscs',
		'jshint',
		'build',
	]);
};
