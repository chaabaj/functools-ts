"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                            Invalid: function (_, errors2) { return form_1.Invalid(result, errors.concat(errors2)); },
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