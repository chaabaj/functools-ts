"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_1 = require("./option");
var RemoteDataStatus;
(function (RemoteDataStatus) {
    RemoteDataStatus["Loaded"] = "Loaded";
    RemoteDataStatus["Pending"] = "Pending";
    RemoteDataStatus["Failed"] = "Failed";
    RemoteDataStatus["Unloaded"] = "Unloaded";
})(RemoteDataStatus = exports.RemoteDataStatus || (exports.RemoteDataStatus = {}));
exports.Loaded = function (data) { return ({
    type: RemoteDataStatus.Loaded,
    data: data
}); };
exports.Pending = function (data) { return ({
    type: RemoteDataStatus.Pending,
    data: data
}); };
exports.Failed = function (error, data) { return ({
    type: RemoteDataStatus.Failed,
    error: error,
    data: data
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
                return cases.Pending(rd.data);
            case RemoteDataStatus.Failed:
                return cases.Failed(rd.error, rd.data);
            case RemoteDataStatus.Unloaded:
                return cases.Unloaded();
        }
    },
    map: function (rd, f) {
        return exports.RemoteData.match(rd, {
            Loaded: function (x) { return exports.Loaded(f(x)); },
            Pending: function (data) { return data ? exports.Pending(f(data)) : exports.Pending(); },
            Failed: function (e, data) { return data ? exports.Failed(e, f(data)) : exports.Failed(e); },
            Unloaded: function () { return exports.Unloaded(); }
        });
    },
    flatMap: function (rd, f) {
        return exports.RemoteData.match(rd, {
            Loaded: function (x) { return f(x); },
            Pending: function (data) { return data ? f(data) : exports.Pending(); },
            Failed: function (e, data) { return data ? f(data) : exports.Failed(e); },
            Unloaded: function () { return exports.Unloaded(); }
        });
    },
    map2: function (rd1, rd2, f) {
        return exports.RemoteData.flatMap(rd1, function (data1) { return exports.RemoteData.map(rd2, function (data2) { return f(data1, data2); }); });
    },
    data: function (rd) {
        return exports.RemoteData.loaded(rd) || exports.RemoteData.failed(rd) || exports.RemoteData.pending(rd) ? rd.data : null;
    },
    toString: function (rd) {
        return exports.RemoteData.match(rd, {
            Loaded: function (data) { return "Loaded(" + data + ")"; },
            Pending: function (data) { return "Pending(" + data + ")"; },
            Failed: function (error, data) { return "Failed(" + error.toString() + ", " + data + ")"; },
            Unloaded: function () { return "Unloaded"; }
        });
    },
    getOrElse: function (rd1, fval) {
        return option_1.Option.getOrElse(exports.RemoteData.data(rd1), fval);
    },
    merge: function (rd1, rd2, add) {
        if (exports.RemoteData.loaded(rd1) && exports.RemoteData.loaded(rd2))
            return exports.Loaded(add(rd1.data, rd2.data));
        else if (exports.RemoteData.pending(rd1) && exports.RemoteData.loaded(rd2))
            return rd1.data ? exports.Loaded(add(rd1.data, rd2.data)) : rd2;
        else if (exports.RemoteData.pending(rd1) && exports.RemoteData.pending(rd2))
            return rd1.data && rd2.data ? exports.Pending(add(rd1.data, rd2.data)) : rd2;
        else if (exports.RemoteData.pending(rd1) && exports.RemoteData.failed(rd2))
            return rd1.data ? exports.Failed(rd2.error, rd1.data) : rd2;
        else if (exports.RemoteData.failed(rd1) && exports.RemoteData.failed(rd2))
            return rd1.data ? exports.Failed(rd2.error, rd1.data) : rd2;
        else if (exports.RemoteData.failed(rd1) && exports.RemoteData.pending(rd2))
            return rd1.data ? exports.Pending(rd1.data) : rd2;
        else
            return rd2;
    },
    replace: function (rd1, rd2) {
        return exports.RemoteData.merge(rd1, rd2, function (a) { return a; });
    },
    getState: function (rd1) {
        var b = exports.RemoteData.match(rd1, {
            Loaded: function (data) { return [null, data, false]; },
            Pending: function (data) { return [null, data || null, true]; },
            Failed: function (err, data) { return [err, data || null, false]; },
            Unloaded: function () { return [null, null, false]; }
        });
        return b;
    }
};
//# sourceMappingURL=remote-data.js.map