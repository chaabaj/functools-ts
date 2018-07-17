export var FormFieldType;
(function (FormFieldType) {
    FormFieldType["Valid"] = "Valid";
    FormFieldType["Invalid"] = "Invalid";
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
export var FormField = {
    invalid: function (ff) {
        return ff.type === FormFieldType.Invalid;
    },
    valid: function (ff) {
        return ff.type === FormFieldType.Valid;
    },
    match: function (ff, cases) {
        switch (ff.type) {
            case FormFieldType.Valid:
                return cases.Valid(ff.value);
            case FormFieldType.Invalid:
                return cases.Invalid(ff.value, ff.errors);
        }
    }
};
//# sourceMappingURL=form.js.map