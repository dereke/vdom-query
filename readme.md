# vdom-query

Traverses and manipulates
[virtual-dom](https://github.com/Matt-Esch/virtual-dom) trees.

Implements a subset of the jQuery API.

## Example

```JavaScript
var h = require('virtual-dom/h');
var $ = require('vdom-query');

function render() {
  return h('.top', h('.banana'));
}

$(render).find('.banana').first().attr('class') //-> banana

```

# API

## Finding elements in a virtual dom

```JavaScript
require('vdom-query')(render);
```

* `render` - a function that returns a virtual DOM fragment.

The resulting vdom-query object represents a set of elements, which can be manipulated to produce new sets. Every set can extract data or interact with its matching elements.

Traversing the dom to find elements is deferred until it is required, rather than as the query is being constructed. The dom is re-rendered before any traversal.

### .attr(name)
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

### .children([selector])
Get the children of each element in the set of matched elements, optionally filtered by a selector.

### .click(event)
Call all onclick handlers on any of the matched elements.

### .each(function)
Iterate over a vdom-query object, executing a function for each matched element.

### .eq(index)
Reduce the set of matched elements to the one at the specified index.

### .filter(function)
Reduce the set of matched elements to those that pass the function's test.

### .find(selector)
Get the descendants of each element in the current set of matched elements, filtered by a selector.

### .first()
Reduce the set of matched elements to the first in the set.

### .get([index])
Retrieve the virtual DOM elements matched by the vdom-query object.

### .has(selector)
Reduce the set of matched elements to those that have a descendant that matches the selector.

### .hasClass(selector)
Determine whether any of the matched elements are assigned the given class.

### .html()
Get the HTML contents of the first element in the set of matched elements.

### .is(selector)
Check the current matched set of elements against a selector and return true if at least one of these elements matches the given arguments.

### .last([count])
Reduce the set of matched elements to the final `count` in the set, or the last element if count is omitted.

### .map(function)
Pass each element in the current matched set through a function, producing a new set containing the return values.

### .not(selector)
Remove elements matching the selector, from the set of matched elements.

### .outerHtml()
Get the HTML of the first element in the set of matched elements.

### .parent()
Get the parent of each element in the current set of matched elements.

### .size()
Return the number of elements in the vdom-query object.

### .skip(count)
Reduce the set of matched elements to those with an index greater than the specified count.

### .slice(start, [count])
Reduce the set of matched elements to a subset specified by a range of indices.

### .take(count)
Reduce the set of matched elements to the first `count` elements.

### .text()
Get the combined text contents of each element in the set of matched elements, including their descendants.

# Work in progress

Patches welcome!
