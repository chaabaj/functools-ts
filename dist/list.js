var match = function (selector, item, index, list) {
    return typeof selector === "number"
        ? selector === index
        : typeof selector === "function"
            ? selector(item, index, list)
            : propsMatch(item, selector);
};
var propsMatch = function (record, partial) {
    for (var key in partial) {
        if (partial[key] !== record[key]) {
            return false;
        }
    }
    return true;
};
var getNewValue = function (newValue, oldValue) {
    return typeof newValue === "function" ? newValue(oldValue) : newValue;
};
export var List = {
    set: function (list, where, value) {
        return list.map(function (item, i) {
            return match(where, item, i, list) ? getNewValue(value, item) : item;
        });
    },
    get: function (list, where) {
        return list.find(function (item, i) { return match(where, item, i, list); });
    },
    contains: function (list, item) {
        return list.find(function (x) { return x === item; }) ? true : false;
    },
    match: function (list, cases) {
        return list.length === 0
            ? cases.Empty()
            : list.length === 1
                ? cases.Single(list[0])
                : cases.Cons(list[0], list.slice(1));
    },
    isList: function (maybeList) { return Array.isArray(maybeList); }
};
//# sourceMappingURL=list.js.map