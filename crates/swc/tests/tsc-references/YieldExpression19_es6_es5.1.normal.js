import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(foo);
// @target: es6
function foo() {
    var bar;
    return regeneratorRuntime.wrap(function foo$(_ctx1) {
        while(1)switch(_ctx1.prev = _ctx1.next){
            case 0:
                bar = function bar() {
                    var _marked1 = regeneratorRuntime.mark(quux);
                    function quux() {
                        return regeneratorRuntime.wrap(function quux$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return foo;
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _marked1);
                    }
                };
            case 1:
            case "end":
                return _ctx1.stop();
        }
    }, _marked);
}
