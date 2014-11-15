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
