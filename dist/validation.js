import { FormField, Valid, Invalid, Initial } from "./form";
export var Validation = {
    combine: function () {
        var validations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            validations[_i] = arguments[_i];
        }
        return function (value) {
            var i = 0;
            var length = validations.length;
            var current = Valid(value);
            while (i < length) {
                current = FormField.match(validations[i](current.value), {
                    Valid: function (_) { return current; },
                    Invalid: function (result, errors) {
                        return FormField.match(current, {
                            Valid: function (_) { return Invalid(result, errors); },
                            Invalid: function (_, errors2) { return Invalid(result, errors.concat(errors2)); },
                            Initial: function (_) { return Invalid(result, errors); }
                        });
                    },
                    Initial: function (x) { return Initial(x); }
                });
                i++;
            }
            return current;
        };
    }
};
//# sourceMappingURL=validation.js.map