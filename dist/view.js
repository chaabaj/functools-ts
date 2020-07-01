"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = void 0;
exports.ListView = function (start, end, items) {
    var self = {
        at: function (index) { return items[start + index]; },
        forEach: function (f) {
            for (var i = start; i <= end; i++)
                f(items[i], i - start);
        },
        foldLeft: function (f, zero) {
            var acc = zero;
            for (var i = start; i <= end; i++) {
                var item = items[i];
                acc = f(acc, item, i - start);
            }
            return acc;
        },
        length: end - start,
        slice: function (newStart, newEnd) {
            if (newStart <= end && newStart >= 0 && newEnd <= end && newEnd >= start)
                return exports.ListView(start + newStart, start + newEnd, items);
            else
                throw new Error("new start and new end must ");
        },
        match: function (cases) {
            return self.length === 0
                ? cases.Empty()
                : self.length === 1
                    ? cases.Single(self.at(0))
                    : cases.Cons(self.at(0), self.slice(1, end));
        }
    };
    return self;
};
//# sourceMappingURL=view.js.map