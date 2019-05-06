"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormFieldType;
(function (FormFieldType) {
    FormFieldType["Valid"] = "Valid";
    FormFieldType["Invalid"] = "Invalid";
    FormFieldType["Untouched"] = "Untouched";
})(FormFieldType = exports.FormFieldType || (exports.FormFieldType = {}));
exports.Valid = function (value) { return ({
    type: FormFieldType.Valid,
    value: value
}); };
exports.Invalid = function (value, errors) { return ({
    type: FormFieldType.Invalid,
    value: value,
    errors: errors
}); };
exports.Untouched = function (value) { return ({
    type: FormFieldType.Untouched,
    value: value
}); };
exports.FormField = {
    invalid: function (ff) {
        return ff.type === FormFieldType.Invalid;
    },
    valid: function (ff) {
        return ff.type === FormFieldType.Valid;
    },
    untouched: function (ff) {
        return ff.type === FormFieldType.Untouched;
    },
    match: function (ff, cases) {
        switch (ff.type) {
            case FormFieldType.Valid:
                return cases.Valid(ff.value);
            case FormFieldType.Invalid:
                return cases.Invalid(ff.value, ff.errors);
            case FormFieldType.Untouched:
                return cases.Untouched(ff.value);
        }
    },
    isValidForm: function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        return fields.every(function (field) { return exports.FormField.valid(field) || exports.FormField.untouched(field); });
    }
};
//# sourceMappingURL=form.js.map