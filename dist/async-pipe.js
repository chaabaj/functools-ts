"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defer = function (f) { return setTimeout(f, 0); };
var asyncGroup_ = function () {
    var tasks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tasks[_i] = arguments[_i];
    }
    return function (value) {
        return Promise.all(tasks.map(function (task) { return new Promise(function (resolve) { return resolve(task(value)); }); }));
    };
};
var asyncGroup = asyncGroup_;
exports.asyncGroup = asyncGroup;
exports.asyncPipe = function () {
    var tasks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tasks[_i] = arguments[_i];
    }
    var _executeNext = function (result, pos, future) {
        if (pos >= tasks.length)
            future.resolve(result);
        else if (result && result.then)
            result
                .then(function (value) { return _executeNext(tasks[pos](value), pos + 1, future); })
                .catch(future.reject);
        else
            defer(function () {
                try {
                    _executeNext(tasks[pos](result), pos + 1, future);
                }
                catch (err) {
                    future.reject(err);
                }
            });
    };
    return function (param) {
        return new Promise(function (resolve, reject) {
            return _executeNext(tasks[0](param), 1, { resolve: resolve, reject: reject });
        });
    };
};
//# sourceMappingURL=async-pipe.js.map