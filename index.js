/**
 * Export `reject`
 */

module.exports = reject;

/**
 * reject contents in parallel
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

function *reject(arr, fn) {
  var vals = yield arr.map(fn);
  var out = [];

  for (var i = 0, len = vals.length; i < len; i++) {
    if (!vals[i]) out.push(arr[i]);
  }

  return out;
}
