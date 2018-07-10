export var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (a) {
        return fns.slice(1).reduce(function (next, fn) { return fn(next); }, fns[0](a));
    };
};
//# sourceMappingURL=compose.js.map