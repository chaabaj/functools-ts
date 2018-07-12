export var Right = function (value) { return ({
    isLeft: false,
    isRight: true,
    value: value
}); };
export var Left = function (error) { return ({
    isLeft: true,
    isRight: false,
    value: error
}); };
export var Either = {
    isRight: function (either) { return either.isRight; },
    isLeft: function (either) { return either.isLeft; },
    bimap: function (either, l, r) {
        return Either.match(either, {
            Right: function (x) { return Right(r(x)); },
            Left: function (e) { return Left(l(e)); }
        });
    },
    map: function (either, f) {
        return Either.flatMap(either, function (x) { return Right(f(x)); });
    },
    toString: function (either) {
        return Either.match(either, {
            Right: function (x) { return "Right(" + x + ")"; },
            Left: function (e) { return "Left(" + e + ")"; }
        });
    },
    flatMap: function (either, f) {
        return Either.isRight(either)
            ? f(either.value)
            : either;
    },
    recover: function (either, f) { return (Either.isLeft(either) ? f(either.value) : either); },
    getOrElse: function (either, defaultVal) {
        return Either.isRight(either) ? either.value : defaultVal();
    },
    forEach: function (either, f) {
        return Either.isRight(either) ? f(either.value) : null;
    },
    sequence: function (list) {
        var i = 0;
        var length = list.length;
        var res = [];
        while (i < length) {
            var current = list[i];
            if (Either.isLeft(current))
                return current;
            res.push(current.value);
            i++;
        }
        return Right(res);
    },
    left: function (either) {
        return Either.isLeft(either) ? either.value : null;
    },
    right: function (either) {
        return Either.isRight(either) ? either.value : null;
    },
    match: function (either, cases) {
        return Either.isRight(either)
            ? cases.Right(either.value)
            : cases.Left(either.value);
    },
    flatMap2: function (ea, eb, f) { return Either.flatMap(ea, function (a) { return Either.flatMap(eb, function (b) { return f(a, b); }); }); },
    flatMap3: function (ea, eb, ec, f) {
        return Either.flatMap2(ea, eb, function (a, b) { return Either.flatMap(ec, function (c) { return f(a, b, c); }); });
    },
    flatMap4: function (ea, eb, ec, ed, f) {
        return Either.flatMap3(ea, eb, ec, function (a, b, c) {
            return Either.flatMap(ed, function (d) { return f(a, b, c, d); });
        });
    },
    flatMap5: function (ea, eb, ec, ed, eh, f) {
        return Either.flatMap4(ea, eb, ec, ed, function (a, b, c, d) {
            return Either.flatMap(eh, function (h) { return f(a, b, c, d, h); });
        });
    },
    flatMap6: function (ea, eb, ec, ed, eh, eg, f) {
        return Either.flatMap5(ea, eb, ec, ed, eh, function (a, b, c, d, h) {
            return Either.flatMap(eg, function (g) { return f(a, b, c, d, h, g); });
        });
    }
};
//# sourceMappingURL=either.js.map