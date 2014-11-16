/*! string-map v0.0.4 <https://github.com/luizbills/string-map.js>
 *  Copyright 2014 Luiz "Bills" <luizpbills@gmail.com>
 *  Licensed under MIT License
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD/RequireJS
    define(factory);
  } else if (typeof exports === "object") {
    // Browser globals
    module.exports = factory();
  } else {
    // Browser global
    window.StringMap = factory();
  }
}(function () {

"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var StringMap = (function () {
  var StringMap = function StringMap() {
    this._values = {};
  };

  _classProps(StringMap, null, {
    get: {
      writable: true,
      value: function (key) {
        var value = this._values[key];
        return value != null ? value : null;
      }
    },
    set: {
      writable: true,
      value: function (key, value) {
        if (key instanceof Object) {
          for (var prop in key) {
            this._values[prop] = key[prop];
          }
        } else {
          this._values[key] = value;
        }
      }
    },
    exists: {
      writable: true,
      value: function (key) {
        return this._values[key] != null;
      }
    },
    remove: {
      writable: true,
      value: function (key) {
        if (this.exists(key)) {
          return delete this._values[key];
        }
        return false;
      }
    },
    keys: {
      writable: true,
      value: function () {
        var keys = [];
        for (var prop in this._values) {
          if (this.exists(prop)) {
            keys.push(prop);
          }
        }
        return keys;
      }
    },
    toString: {
      writable: true,
      value: function (formatted, ident) {
        if (formatted) {
          return JSON.stringify(this._values, null, ident || "\t");
        }
        return JSON.stringify(this._values);
      }
    }
  });

  return StringMap;
})();
return StringMap;
}));
