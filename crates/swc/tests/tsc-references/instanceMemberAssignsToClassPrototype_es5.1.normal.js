import * as swcHelpers from "@swc/helpers";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    var _proto = C.prototype;
    _proto.foo = function foo() {
        C.prototype.foo = function() {};
    };
    _proto.bar = function bar(x1) {
        C.prototype.bar = function() {} // error
        ;
        C.prototype.bar = function(x) {
            return x;
        }; // ok
        C.prototype.bar = function(x) {
            return 1;
        }; // ok
        return 1;
    };
    return C;
}();
