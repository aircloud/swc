// -- operator on number type
var NUMBER;
var NUMBER1 = [
    1,
    2
];
class A {
}
var M;
(function(M) {
    var n;
    M.n = n;
})(M || (M = {
}));
var objA = new A();
// number type var
var ResultIsNumber1 = --NUMBER;
var ResultIsNumber2 = NUMBER--;
// expressions
var ResultIsNumber3 = --objA.a;
var ResultIsNumber4 = --M.n;
var ResultIsNumber5 = objA.a--;
var ResultIsNumber6 = M.n--;
var ResultIsNumber7 = NUMBER1[0]--;
// miss assignment operators
--NUMBER;
--NUMBER1[0];
--objA.a;
--M.n;
--objA.a, M.n;
NUMBER--;
NUMBER1[0]--;
objA.a--;
M.n--;
objA.a--, M.n--;