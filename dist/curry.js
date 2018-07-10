export var curry1 = function (f) { return function (a) { return function (b) {
    return f(a, b);
}; }; };
export var curry2 = function (f) { return function (a) { return function (b) { return function (c) { return f(a, b, c); }; }; }; };
//# sourceMappingURL=curry.js.map