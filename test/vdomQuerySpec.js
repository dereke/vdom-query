var vdomQuery = require('../');
var h = require('virtual-dom/h');
var expect = require('chai').expect;

describe('vdomQuery(render)', function() {

  describe('.click(e)', function() {
    it('calls onclick(e) event handlers', function() {
      var clicks = [];

      function render() {
        return h('.clickable', {
          onclick: function(e) { clicks.push(e); },
        })
      }

      var f = vdomQuery(render);
      f.click(123);
      expect(clicks[0]).to.equal(123);
    })
  });

  describe('.outerHtml()', function() {
    it('returns the outer HTML of the first element', function() {
      function render() {
        return h('.x', {}, [h('.y', 'hello')])
      }

      var f = vdomQuery(render);
      expect(f.outerHtml()).to.equal(
        '<div class="x"><div class="y">hello</div></div>'
      );
    })
  });

  describe('.startOfChain()', function() {
    it('returns the start of the chain', function() {
      function render() {
        return h('.x', {}, [h('.y', 'hello')])
      }

      var f = vdomQuery(render);
      var p = f.slice(10, 11).eq(12).startOfChain();
      expect(p.outerHtml()).to.equal(
        '<div class="x"><div class="y">hello</div></div>');
    })
  });

  describe('combining selectors', function() {
    it('combines successive select iterators', function() {
      function render() {}
      var f = vdomQuery(render);
      var p = f.find("a, b").find("x, y");
      expect(p.createIterator().selector).to.equal(
        ':root a x, :root a y, :root b x, :root b y');
    })
  });

  describe('wrap in self', function(){
    it('can call vdomQuery multiple times', function(){
      function render() {
        return h('.x');
      }

      var f = vdomQuery(vdomQuery(render));
      expect(f.attr('class')).to.equal('x');
    });
  });

  describe('toArray', function(){
    it('creates an array of elements', function(){
      function render() {
        return h('.x');
      }

      var f = vdomQuery(render);
      var array = f.toArray();
      expect(array.length).to.equal(1);
      expect(array[0].tagName).to.equal('DIV');
    });
  });
});
