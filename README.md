# url-parser

## Usage
```npm install url-parser```

or

```bower install url-parser```

```javascript
var urlParser = require('urlParser');

urlParser('http://example.com/terms/:termId/posts/:postId', {
	termId: 1,
	postId: 2,
}); // -> http://example.com/terms/1/posts/2
```

```javascript
var urlParser = require('urlParser');

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
