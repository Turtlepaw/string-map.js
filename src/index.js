class StringMap {
  constructor() {
    this._values = {};
  }

  get(key) {
    var value = this._values[key];
    return value != null ? value : null;
  }

  set(key, value) {
    if (key instanceof Object) {
      for(var prop in key) {
        this._values[prop] = key[prop];
      }
    } else {
      this._values[key] = value;
    }
  }

  exists(key) {
    return this._values[key] != null;
  }

  remove(key) {
    if (this.exists(key)) {
      return delete this._values[key];
    }
    return false;
  }

  keys() {
    var keys = [];
    for(var prop in this._values) {
      if (this.exists(prop)) {
        keys.push(prop);
      }
    }
    return keys;
  }

  toString(formatted, ident) {
    if (formatted) {
      return JSON.stringify(this._values, null, ident || '\t');
    }
    return JSON.stringify(this._values);
  }
}
