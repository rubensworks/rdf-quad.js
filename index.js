var factory = require('rdf-data-model');

module.exports = function(s, p, o, g) {
  return factory.quad(term(s), term(p), term(o), g ? term(g) : factory.defaultGraph());
  function term(value) {
    if (value.charAt(0) === '_') return factory.blankNode(value ? value.substring(1) : undefined);
    if (value.charAt(0) === '?') return factory.variable(value.substring(1));
    return factory.namedNode(value);
  }
};

