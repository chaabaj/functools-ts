export var pipe = function (a) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.slice(1).reduce(function (next, fn) { return fn(next); }, fns[0](a));
};
//# sourceMappingURL=pipe.js.map