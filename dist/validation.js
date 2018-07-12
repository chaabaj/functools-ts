"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_1 = require("./option");
var either_1 = require("./either");
exports.Validation = {
    validate: function (value, f) {
        var res = f(value);
        return option_1.Option.isDefined(res) ? either_1.Left(res) : either_1.Right(value);
    }
};
//# sourceMappingURL=validation.js.map