import * as swcHelpers from "@swc/helpers";
// @target: es6
var Foo = function Foo() {
    "use strict";
    swcHelpers.classCallCheck(this, Foo);
};
var Foo2 = function Foo2() {
    "use strict";
    swcHelpers.classCallCheck(this, Foo2);
};
var tmp = 1 << 6, tmp1 = 1 << 6;
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: tmp,
            get: // Computed properties
            function get() {
                return new Foo;
            }
        },
        {
            key: tmp1,
            set: function set(p) {}
        }
    ]);
    return C;
}();
