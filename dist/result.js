"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var either_1 = require("./either");
exports.Success = function (value) { return either_1.Right(value); };
exports.Failure = function (error) { return either_1.Left(error); };
//# sourceMappingURL=result.js.map