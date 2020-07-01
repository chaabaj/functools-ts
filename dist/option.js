"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
exports.Option = {
    map: function (value, f) {
        return exports.Option.flatMap(value, f);
    },
    flatMap: function (value, f) {
        return exports.Option.isDefined(value) ? f(value) : null;
    },
    getOrElse: function (value, defaultVal) {
        return exports.Option.isDefined(value) ? value : defaultVal();
    },
    isDefined: function (value) { return value != null; },
    isEmpty: function (value) {
        return !exports.Option.isDefined(value);
    },
    forEach: function (value, f) {
        return exports.Option.isDefined(value) ? f(value) : null;
    },
    sequence: function (list) {
        var i = 0;
        var length = list.length;
        var res = [];
        while (i < length) {
            var current = list[i];
            if (exports.Option.isEmpty(current))
                return null;
            res.push(current);
            i++;
        }
        return res;
    }
};
//# sourceMappingURL=option.js.map