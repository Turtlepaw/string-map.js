#StringMap
simple javascript StringMap class.

###Installation

nodejs
```
npm install string-map --save
```

browser
```html
<script src="path/to/string-map.js"></script>
```

###Usage

```javascript
// nodejs
// var StringMap = require('string-map');

var map = new StringMap();

map.set('one', 1);
map.set('two', 2);

// or
map.set({
  one: 1,
  two: 2
});

map.get('one'); // => 1

map.exists('one'); // => true

map.keys(); // => ["one", "two"]

map.remove("two"); // => true (when removed)

map.remove("two"); // => false (already removed)

var formatted = true;
var ident = '\t'
var json1 = map.toJSON(formatted, ident); // returns a json string formatted
var json2 = map.toJSON(false); // returns a json string NOT formatted
```

###License
[MIT](luizbills.mit-license.org)
