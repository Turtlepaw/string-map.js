QUnit.test("StringMap Methods", function( assert ) {
  var map = new StringMap();
  assert.ok(map instanceof StringMap, "constructor");

  map.set('n', 123);
  assert.ok(map.get('n') === 123, ".set(key, value)");

  map.set({
    'a': 1,
    'b': 2
  });
  assert.ok(map.get('a') === 1 && map.get('b') === 2, ".set(obj)");

  assert.ok(map.get('a') === 1, ".get(key)");

  map.remove('n');
  assert.ok(map.exists('n') === false, ".remove(key)");

  map.exists('n');
  assert.ok(!map.exists('n') && map.exists('a'), ".exists(key)");

  map.set('testNull', null); // this key is not valid
  assert.ok(map.keys().length === 2, ".keys()");

  assert.ok(map.toString(true) === JSON.stringify(map._values, null, '\t'), ".toString(true)");
  assert.ok(map.toString(true, 4) === JSON.stringify(map._values, null, 4), ".toString(true, 4)");
  assert.ok(map.toString(false) === JSON.stringify(map._values), ".toString(false)");

  console.log(map.toString(true));
});
