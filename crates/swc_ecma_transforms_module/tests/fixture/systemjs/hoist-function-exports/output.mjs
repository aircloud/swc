System.register([
  "./evens"
], function(_export, _context) {
  "use strict";
  var isEven1, p, a, i, j, isOdd;
  function nextOdd(n) {
      return _export("p", p = isEven1(n) ? n + 1 : n + 2);
  }
  _export("nextOdd", nextOdd);
  return {
      setters: [
          function(_evens) {
              isEven1 = _evens.isEven;
          }
      ],
      execute: function() {
          _export("p", p = 5);
          for(a in b);
          for(i = 0, j = 0;;);
          _export("isOdd", isOdd = function(isEven) {
              return function(n) {
                  return !isEven(n);
              };
          }(isEven1));
      }
  };
});