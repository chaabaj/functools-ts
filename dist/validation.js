import { Option } from "./option";
import { Left, Right } from "./either";
export var Validation = {
    validate: function (value, f) {
        var res = f(value);
        return Option.isDefined(res) ? Left(res) : Right(value);
    }
};
//# sourceMappingURL=validation.js.map