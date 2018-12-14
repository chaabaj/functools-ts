export var FormFieldType;
(function (FormFieldType) {
    FormFieldType["Valid"] = "Valid";
    FormFieldType["Invalid"] = "Invalid";
    FormFieldType["Initial"] = "Initial";
})(FormFieldType || (FormFieldType = {}));
export var Valid = function (value) { return ({
    type: FormFieldType.Valid,
    value: value
}); };
export var Invalid = function (value, errors) { return ({
    type: FormFieldType.Invalid,
    value: value,
    errors: errors
}); };
export var Initial = function (value) { return ({
    type: FormFieldType.Initial,
    value: value
}); };
export var FormField = {
    invalid: function (ff) {
        return ff.type === FormFieldType.Invalid;
    },
    valid: function (ff) {
        return ff.type === FormFieldType.Valid;
    },
    initial: function (ff) {
        return ff.type === FormFieldType.Initial;
    },
    match: function (ff, cases) {
        switch (ff.type) {
            case FormFieldType.Valid:
                return cases.Valid(ff.value);
            case FormFieldType.Invalid:
                return cases.Invalid(ff.value, ff.errors);
            case FormFieldType.Initial:
                return cases.Initial(ff.value);
        }
    },
    isValidForm: function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        return fields.every(function (field) { return FormField.valid(field) || FormField.initial(field); });
    }
};
//# sourceMappingURL=form.js.map