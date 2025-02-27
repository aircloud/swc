import * as swcHelpers from "@swc/helpers";
// @module: amd
// @target: esnext
// @filename: 0.ts
export var B = /*#__PURE__*/ function() {
    "use strict";
    function B() {
        swcHelpers.classCallCheck(this, B);
    }
    var _proto = B.prototype;
    _proto.print = function print() {
        return "I am B";
    };
    return B;
}();
// @filename: 2.ts
// We use Promise<any> for now as there is no way to specify shape of module object
function foo(x) {
    x.then(function(value) {
        var b = new value.B();
        b.print();
    });
}
foo(import("./0"));
