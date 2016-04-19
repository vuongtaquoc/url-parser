# url-parser

======
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Coverage Status][coveralls-image]][coveralls-url]

## Usage
```npm install url-parser```

or

```bower install url-parser```

```javascript
var urlParser = require('url_parser');

urlParser('http://example.com/terms/:termId/posts/:postId', {
	termId: 1,
	postId: 2,
}); // -> http://example.com/terms/1/posts/2
```

```javascript
var urlParser = require('url_parser');

urlParser('http://example.com/terms/:termId/posts/:postId', {
	termId: 1,
	postId: 2,
	skip: 5,
	take: 10,
}); // -> http://example.com/terms/1/posts/2?skip=5&take=10
```

## Tests
	$ npm install
	$ npm test

## License
[The MIT License](http://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/url_parser.svg?style=flat
[npm-url]: https://www.npmjs.org/package/url_parser
[downloads-image]: https://img.shields.io/npm/dm/url_parser.svg?style=flat
[coveralls-image]: https://coveralls.io/repos/vuongtaquoc/url-parser/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/vuongtaquoc/url-parser?branch=master
