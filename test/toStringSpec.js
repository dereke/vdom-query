var jquery = require('jquery');
var vdomQuery = require('../');
var expect = require('chai').expect;

var dollar = vdomQuery(function() { return []; });
var V$ = dollar.find.bind(dollar);

assert('V$("x")')
assert('V$("x").eq(1)')
assert('V$("x").first()')
assert('V$("x").last()')
assert('V$("x").not("y")')
assert('V$("x").find("y")', 'V$("x y")')
assert('V$("x y").eq(0).has("z")')
assert('V$("x").eq(0).find("y").eq(1)')
assert('V$("x").filter(function() {})', 'V$("x").filter(<fn>)')
assert('V$("x").children()')

function assert(input, output) {
  if (output == undefined) {
    output = input;
  }
  describe(input + '.toString()', function() {
    it('returns ' + output, function() {
      expect(eval(input).toString()).to.equal(output);
    })
  });
}
