"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
var form_1 = require("./form");
exports.Validation = {
    combine: function () {
        var validations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            validations[_i] = arguments[_i];
        }
        return function (value) {
            var i = 0;
            var length = validations.length;
            var current = form_1.Valid(value);
            while (i < length) {
                current = form_1.FormField.match(validations[i](current.value), {
                    Valid: function (_) { return current; },
                    Invalid: function (result, errors) {
                        return form_1.FormField.match(current, {
                            Valid: function (_) { return form_1.Invalid(result, errors); },
                            Invalid: function (_, errors2) { return form_1.Invalid(result, __spreadArrays(errors, errors2)); },
                            Untouched: function (_) { return form_1.Invalid(result, errors); }
                        });
                    },
                    Untouched: function (x) { return form_1.Untouched(x); }
                });
                i++;
            }
            return current;
        };
    }
};
//# sourceMappingURL=validation.js.map