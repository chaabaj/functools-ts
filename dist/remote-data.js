import { Option } from "./option";
export var RemoteDataStatus;
(function (RemoteDataStatus) {
    RemoteDataStatus["Loaded"] = "Loaded";
    RemoteDataStatus["Pending"] = "Pending";
    RemoteDataStatus["Failed"] = "Failed";
    RemoteDataStatus["Unloaded"] = "Unloaded";
})(RemoteDataStatus || (RemoteDataStatus = {}));
export var Loaded = function (data) { return ({
    type: RemoteDataStatus.Loaded,
    data: data
}); };
export var Pending = function (data) { return ({
    type: RemoteDataStatus.Pending,
    data: data
}); };
export var Failed = function (error, data) { return ({
    type: RemoteDataStatus.Failed,
    error: error,
    data: data
}); };
export var Unloaded = function () { return ({
    type: RemoteDataStatus.Unloaded
}); };
export var RemoteData = {
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
        return RemoteData.match(rd, {
            Loaded: function (x) { return Loaded(f(x)); },
            Pending: function () { return Pending(); },
            Failed: function (e) { return Failed(e); },
            Unloaded: function () { return Unloaded(); }
        });
    },
    flatMap: function (rd, f) {
        return RemoteData.match(rd, {
            Loaded: function (x) { return f(x); },
            Pending: function () { return Pending(); },
            Failed: function (e) { return Failed(e); },
            Unloaded: function () { return Unloaded(); }
        });
    },
    map2: function (rd1, rd2, f) {
        return RemoteData.flatMap(rd1, function (data1) { return RemoteData.map(rd2, function (data2) { return f(data1, data2); }); });
    },
    data: function (rd) {
        return RemoteData.loaded(rd) || RemoteData.failed(rd) || RemoteData.pending(rd) ? rd.data : null;
    },
    toString: function (rd) {
        return RemoteData.match(rd, {
            Loaded: function (data) { return "Loaded(" + data + ")"; },
            Pending: function (data) { return "Pending(" + data + ")"; },
            Failed: function (error, data) { return "Failed(" + error.toString() + ", " + data + ")"; },
            Unloaded: function () { return "Unloaded"; }
        });
    },
    getOrElse: function (rd1, fval) {
        return Option.getOrElse(RemoteData.data(rd1), fval);
    },
    merge: function (rd1, rd2, add) {
        if (RemoteData.loaded(rd1) && RemoteData.loaded(rd2))
            return Loaded(add(rd1.data, rd2.data));
        else if (RemoteData.pending(rd1) && RemoteData.loaded(rd2))
            return rd1.data ? Loaded(add(rd1.data, rd2.data)) : rd2;
        else if (RemoteData.pending(rd1) && RemoteData.pending(rd2))
            return rd1.data && rd2.data ? Pending(add(rd1.data, rd2.data)) : rd2;
        else if (RemoteData.pending(rd1) && RemoteData.failed(rd2))
            return rd1.data ? Failed(rd2.error, rd1.data) : rd2;
        else if (RemoteData.failed(rd1) && RemoteData.failed(rd2))
            return rd1.data ? Failed(rd2.error, rd1.data) : rd2;
        else if (RemoteData.failed(rd1) && RemoteData.pending(rd2))
            return rd1.data ? Pending(rd1.data) : rd2;
        else
            return rd2;
    },
    replace: function (rd1, rd2) {
        return RemoteData.merge(rd1, rd2, function (a) { return a; });
    }
};
//# sourceMappingURL=remote-data.js.map