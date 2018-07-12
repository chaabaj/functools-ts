"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = function (start, end, items) {
    var self = {
        start: start,
        end: end,
        at: function (index) { return (start + index >= end ? null : items[start + index]); },
        forEach: function (f) {
            var length = self.end - self.start;
            for (var i = start; i < length; i++)
                f(items[start + i]);
        },
        foldLeft: function (f, zero) {
            var acc = zero;
            var length = self.end - self.start;
            var start = self.start;
            for (var i = start; i < length; i++) {
                var item = items[start + i];
                acc = f(acc, item);
            }
            return acc;
        }
    };
    return self;
};
//# sourceMappingURL=view.js.map