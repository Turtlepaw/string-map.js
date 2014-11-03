(function() {
  'use strict';

  if (typeof module === 'object') {
    module.exports = StringMap;
  } else {
    window.StringMap = StringMap;
  }

  function StringMap() {
    this._values = {};
  }

  var proto = StringMap.prototype;

  proto.get = function(key) {
    var value = this._values[key];
    return value != null ? value : null;
  };

  proto.set = function(key, value) {
    if (key instanceof Object) {
      for(var prop in key) {
        this._values[prop] = key[prop];
      }
    } else {
      this._values[key] = value;
    }
  };

  proto.exists = function(key) {
    return this._values[key] != null;
  };

  proto.remove = function(key) {
    if (this.exists(key)) {
      return delete this._values[key];
    }
    return false;
  };

  proto.keys = function() {
    var keys = [];
    for(var prop in this._values) {
      if (this.exists(prop)) {
        keys.push(prop);
      }
    }
    return keys;
  };

  proto.toJSON = function(formatted, ident) {
    if (formatted) {
      return JSON.stringify(this._values, null, ident || '\t');
    }
    return JSON.stringify(this._values);
  };
})();
