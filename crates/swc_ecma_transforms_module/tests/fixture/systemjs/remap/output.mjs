System.register([], function(_export, _context) {
    "use strict";
    var test1, a, b, d;
    return {
        setters: [],
        execute: function() {
            _export("test", test1 = 2);
            _export("test", test1 = 5);
            _export("test", +test1 + 1), test1++;
            (function() {
                var test = 2;
                test = 3;
                test++;
            })();
            _export("a", a = 2);
            _export("a", a = 3);
            _export("c", b = 2);
            _export("c", b = 3);
            _export("f", _export("e", d = 3));
            _export("f", _export("e", d = 4));
        }
    };
});