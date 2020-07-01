"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var option_1 = require("./option");
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
exports.List = {
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
    isList: function (maybeList) { return Array.isArray(maybeList); },
    remove: function (list, itemToRemove) {
        return list.filter(function (item) { return item !== itemToRemove; });
    },
    equals: function (list1, list2, eq) {
        if (list1.length !== list2.length)
            return false;
        else {
            for (var i = 0; i < list1.length; ++i) {
                var elem1 = list1[i];
                var elem2 = list2[i];
                if (option_1.Option.isDefined(eq) && !eq(elem1, elem2))
                    return false;
                else if (option_1.Option.isEmpty(eq) && elem1 !== elem2)
                    return false;
                else
                    continue;
            }
            return true;
        }
    },
    setAndMove: function (a, where, newIdx) { return function (list) {
        var list_ = list.filter(function (item, idx) { return !match(where, item, idx, list); });
        list_.splice(newIdx, 0, a);
        return list_;
    }; }
};
//# sourceMappingURL=list.js.map