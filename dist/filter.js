export var Filter = {
    combine: function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        return function (a) {
            return filters.every(function (filter) { return filter(a); });
        };
    }
};
//# sourceMappingURL=filter.js.map