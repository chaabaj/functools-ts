export var View = {
    create: function (items, start, end) {
        if (end === void 0) { end = items.length; }
        return ({
            start: start,
            end: end,
            items: items
        });
    },
    at: function (view, index) {
        return view.items[view.start + index];
    },
    filter: function (view, f) {
        var arr = [];
        var length = view.end - view.start;
        var start = view.start;
        for (var i = start; i < length; i++) {
            var item = view.items[start + i];
            if (f(item))
                arr.push(item);
        }
        return arr;
    },
    forEach: function (view, f) {
        var length = view.end - view.start;
        var start = view.start;
        for (var i = start; i < length; i++)
            f(view.items[start + i]);
    },
    map: function (view, f) {
        var arr = [];
        var length = view.end - view.start;
        var start = view.start;
        for (var i = start; i < length; i++) {
            var item = view.items[start + i];
            arr.push(f(item));
        }
        return arr;
    },
    foldLeft: function (view, f, zero) {
        var acc = zero;
        var length = view.end - view.start;
        var start = view.start;
        for (var i = start; i < length; i++) {
            var item = view.items[start + i];
            acc = f(item, acc);
        }
        return acc;
    }
};
//# sourceMappingURL=view.js.map