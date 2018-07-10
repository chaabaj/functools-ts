export var RemoteDataStatus;
(function (RemoteDataStatus) {
    RemoteDataStatus["Loaded"] = "Loaded";
    RemoteDataStatus["Pending"] = "Pending";
    RemoteDataStatus["Failed"] = "Failed";
    RemoteDataStatus["Unloaded"] = "Unloaded";
})(RemoteDataStatus || (RemoteDataStatus = {}));
export var Data = function (data) { return ({
    type: RemoteDataStatus.Loaded,
    data: data
}); };
export var Pending = function () { return ({
    type: RemoteDataStatus.Pending
}); };
export var Failed = function () { return ({
    type: RemoteDataStatus.Failed
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
                return cases.Failed();
            case RemoteDataStatus.Unloaded:
                return cases.Unloaded();
        }
    },
    map: function (rd, f) {
        return RemoteData.match(rd, {
            Loaded: function (x) { return Data(f(x)); },
            Pending: function () { return Pending(); },
            Failed: function () { return Failed(); },
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
            Failed: function () { return "Failed"; },
            Unloaded: function () { return "Unloaded"; }
        });
    }
};
//# sourceMappingURL=remote-data.js.map