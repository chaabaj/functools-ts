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
export var Pending = function () { return ({
    type: RemoteDataStatus.Pending
}); };
export var Failed = function (error) { return ({
    type: RemoteDataStatus.Failed,
    error: error
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
                return cases.Pending();
            case RemoteDataStatus.Failed:
                return cases.Failed(rd.error);
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
    data: function (rd) {
        return RemoteData.loaded(rd) ? rd.data : null;
    },
    toString: function (rd) {
        return RemoteData.match(rd, {
            Loaded: function (x) { return "Loaded(" + x + ")"; },
            Pending: function () { return "Pending"; },
            Failed: function (error) { return "Failed(" + error.toString() + ")"; },
            Unloaded: function () { return "Unloaded"; }
        });
    }
};
//# sourceMappingURL=remote-data.js.map