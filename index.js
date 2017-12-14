var factory = require('rdf-data-model');
var RdfTerm = require('rdf-string');

module.exports = function(s, p, o, g) {
  return factory.quad(
    RdfTerm.stringToTerm(s),
    RdfTerm.stringToTerm(p),
    RdfTerm.stringToTerm(o),
    g ? RdfTerm.stringToTerm(g) : factory.defaultGraph()
  );
};

