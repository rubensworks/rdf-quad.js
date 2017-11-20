# RDF Quad

[![npm version](https://badge.fury.io/js/rdf-quad.svg)](https://www.npmjs.com/package/rdf-quad)

A convenience constructor for RDF quads based on string terms.
A term is a blank node if it starts with `'_'`.
A term is a variable if it starts with `'?'`.
In all other cases, a term is assumed to be a named node.

This produces quads according to the [RDFJS](https://github.com/rdfjs/representation-task-force/) specification.

Currently, only blank nodes, variables and named nodes are supported.
Literals may be supported in the future.

## Usage

```javascript
const quad = require('rdf-quad');

quad('http://example.org/subject', 'http://example.org/predicate', '?variable');
quad('http://example.org/subject', 'http://example.org/predicate', '?variable', 'http://example.org/someGraph');
```

## License
This software is written by [Ruben Taelman](http://rubensworks.net/).

This code is released under the [MIT license](http://opensource.org/licenses/MIT).
