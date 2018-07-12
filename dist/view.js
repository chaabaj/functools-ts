export var ListView = function (start, end, items) {
    var self = {
        start: start,
        end: end,
        at: function (index) {
            return self.start + index >= end ? null : items[self.start + index];
        },
        forEach: function (f) {
            for (var i = self.start; i <= self.end; i++)
                f(items[i], i - self.start);
        },
        foldLeft: function (f, zero) {
            var acc = zero;
            for (var i = self.start; i <= self.end; i++) {
                var item = items[i];
                acc = f(acc, item, i - self.start);
            }
            return acc;
        }
    };
    return self;
};
//# sourceMappingURL=view.js.map