"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
exports.pipe = function (a) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.slice(1).reduce(function (next, fn) { return fn(next); }, fns[0](a));
};
//# sourceMappingURL=pipe.js.map