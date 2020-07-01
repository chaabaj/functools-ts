"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry2 = exports.curry1 = void 0;
exports.curry1 = function (f) { return function (a) { return function (b) {
    return f(a, b);
}; }; };
exports.curry2 = function (f) { return function (a) { return function (b) { return function (c) { return f(a, b, c); }; }; }; };
//# sourceMappingURL=curry.js.map