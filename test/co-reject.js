/**
 * Module Dependencies
 */

var assert = require('assert');
var co = require('co');
var reject = co(require('../'));
var fs = require('co-fs');
var path = require('path');
var basename = path.basename;
var join = path.join;
var root = join(__dirname, '..')

/**
 * Test
 */

describe('co-reject', function() {

  it('should reject out values', function(done) {
    var paths = ['index.js', 'Makefile', 'blah.js']
    paths = paths.map(function(path) { return join(root, path); });

    reject(paths, fs.exists, function(err, paths) {
      if (err) return done(err);
      paths = paths.map(function(path) { return basename(path); });
      assert(1 == paths.length);
      assert('blah.js' == paths[0]);
      assert(!paths[1]);
      assert(!paths[2]);
      done();
    });
  });

});
