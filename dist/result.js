import { Right, Left } from "./either";
export var Success = function (value) { return Right(value); };
export var Failure = function (error) { return Left(error); };
//# sourceMappingURL=result.js.map