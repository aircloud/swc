import * as swcHelpers from "@swc/helpers";
var symbol = Symbol.for("myThing"), _symbol = symbol, Foo = function() {
    "use strict";
    function Foo() {
        swcHelpers.classCallCheck(this, Foo);
    }
    return Foo.prototype[_symbol] = function() {
        return 0;
    }, Foo;
}(), _symbol1 = symbol, Bar = function(Foo) {
    "use strict";
    swcHelpers.inherits(Bar, Foo);
    var _super = swcHelpers.createSuper(Bar);
    function Bar() {
        return swcHelpers.classCallCheck(this, Bar), _super.apply(this, arguments);
    }
    return Bar.prototype[_symbol1] = function() {
        return swcHelpers.get(swcHelpers.getPrototypeOf(Bar.prototype), Bar, this).call(this);
    }, Bar;
}(Foo);
