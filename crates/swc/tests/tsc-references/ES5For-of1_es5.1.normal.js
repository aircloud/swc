var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    //@sourcemap: true
    for(var _iterator = [
        "a",
        "b",
        "c"
    ][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var v = _step.value;
        console.log(v);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
