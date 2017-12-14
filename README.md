# RDF Quad

[![npm version](https://badge.fury.io/js/rdf-quad.svg)](https://www.npmjs.com/package/rdf-quad)

A convenience constructor for RDF quads based on string-based terms, as done by [RDF-String](https://github.com/rubensworks/rdf-string.js).

This produces quads according to the [RDFJS](https://github.com/rdfjs/representation-task-force/) specification.

## Usage

```javascript
const quad = require('rdf-quad');

quad('http://example.org/subject', 'http://example.org/predicate', '?variable');
quad('http://example.org/subject', 'http://example.org/predicate', '"myString"', 'http://example.org/someGraph');
```

## License
This software is written by [Ruben Taelman](http://rubensworks.net/).

This code is released under the [MIT license](http://opensource.org/licenses/MIT).
