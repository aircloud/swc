var this_will_disappear;
function a(x) {
    switch(this_will_disappear){
        case x:
            return;
    }
}
function b() {
    c();
}
function c() {
    b();
    d();
}
function d() {
    a();
}
