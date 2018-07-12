"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemoteDataStatus;
(function (RemoteDataStatus) {
    RemoteDataStatus["Loaded"] = "Loaded";
    RemoteDataStatus["Pending"] = "Pending";
    RemoteDataStatus["Failed"] = "Failed";
    RemoteDataStatus["Unloaded"] = "Unloaded";
})(RemoteDataStatus = exports.RemoteDataStatus || (exports.RemoteDataStatus = {}));
exports.Data = function (data) { return ({
    type: RemoteDataStatus.Loaded,
    data: data
}); };
exports.Pending = function () { return ({
    type: RemoteDataStatus.Pending
}); };
exports.Failed = function () { return ({
    type: RemoteDataStatus.Failed
}); };
exports.Unloaded = function () { return ({
    type: RemoteDataStatus.Unloaded
}); };
exports.RemoteData = {
    loaded: function (rd) {
        return rd.type === RemoteDataStatus.Loaded;
    },
    pending: function (rd) {
        return rd.type === RemoteDataStatus.Pending;
    },
    failed: function (rd) {
        return rd.type === RemoteDataStatus.Failed;
    },
    unloaded: function (rd) {
        return rd.type === RemoteDataStatus.Unloaded;
    },
    match: function (rd, cases) {
        switch (rd.type) {
            case RemoteDataStatus.Loaded:
                return cases.Loaded(rd.data);
            case RemoteDataStatus.Pending:
                return cases.Pending();
            case RemoteDataStatus.Failed:
                return cases.Failed();
            case RemoteDataStatus.Unloaded:
                return cases.Unloaded();
        }
    },
    map: function (rd, f) {
        return exports.RemoteData.match(rd, {
            Loaded: function (x) { return exports.Data(f(x)); },
            Pending: function () { return exports.Pending(); },
            Failed: function () { return exports.Failed(); },
            Unloaded: function () { return exports.Unloaded(); }
        });
    },
    data: function (rd) {
        return exports.RemoteData.loaded(rd) ? rd.data : null;
    },
    toString: function (rd) {
        return exports.RemoteData.match(rd, {
            Loaded: function (x) { return "Loaded(" + x + ")"; },
            Pending: function () { return "Pending"; },
            Failed: function () { return "Failed"; },
            Unloaded: function () { return "Unloaded"; }
        });
    }
};
//# sourceMappingURL=remote-data.js.map