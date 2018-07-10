import { Option } from "./option";
import { F1, Lazy, F2, F3, F4, F5, F6 } from "./function";
export declare type Right<A> = {
    isRight: true;
    isLeft: false;
    value: A;
};
export declare type Left<E> = {
    isRight: false;
    isLeft: true;
    value: E;
};
export declare type Either<E, A> = Left<E> | Right<A>;
export declare const Right: <E, A>(value: A) => Either<E, A>;
export declare const Left: <E, A>(error: E) => Either<E, A>;
declare type EitherCases<E, A, B> = {
    Right: (x: A) => B;
    Left: (error: E) => B;
};
export declare const Either: {
    isRight: <E, A>(either: Either<E, A>) => either is Right<A>;
    isLeft: <E, A>(either: Either<E, A>) => either is Left<E>;
    bimap: <E, A, A2, E2>(either: Either<E, A>, l: F1<E, E2>, r: F1<A, A2>) => Either<E2, A2>;
    map: <E, A, B>(either: Either<E, A>, f: F1<A, B>) => Either<E, B>;
    toString: <E, A>(either: Either<E, A>) => string;
    flatMap: <E, A, B>(either: Either<E, A>, f: F1<A, Either<E, B>>) => Either<E, B>;
    recover: <E, A, B extends A>(either: Either<E, A>, f: F1<E, Either<E, B>>) => Either<E, A>;
    getOrElse: <E, A>(either: Either<E, A>, defaultVal: Lazy<A>) => A;
    forEach: <E, A>(either: Either<E, A>, f: F1<A, void>) => void;
    sequence: <E, A>(list: ReadonlyArray<Either<E, A>>) => Either<E, ReadonlyArray<A>>;
    left: <E, A>(either: Either<E, A>) => Option<E>;
    right: <E, A>(either: Either<E, A>) => Option<A>;
    match: <E, A, B>(either: Either<E, A>, cases: EitherCases<E, A, B>) => B;
    flatMap2: <E, A, B, C>(ea: Either<E, A>, eb: Either<E, B>, f: F2<A, B, Either<E, C>>) => Either<E, C>;
    flatMap3: <E, A, B, C, D>(ea: Either<E, A>, eb: Either<E, B>, ec: Either<E, C>, f: F3<A, B, C, Either<E, D>>) => Either<E, D>;
    flatMap4: <E, A, B, C, D, F>(ea: Either<E, A>, eb: Either<E, B>, ec: Either<E, C>, ed: Either<E, D>, f: F4<A, B, C, D, Either<E, F>>) => Either<E, F>;
    flatMap5: <E, A, B, C, D, F, G>(ea: Either<E, A>, eb: Either<E, B>, ec: Either<E, C>, ed: Either<E, D>, eh: Either<E, F>, f: F5<A, B, C, D, F, Either<E, G>>) => Either<E, G>;
    flatMap6: <E, A, B, C, D, F, G, J>(ea: Either<E, A>, eb: Either<E, B>, ec: Either<E, C>, ed: Either<E, D>, eh: Either<E, F>, eg: Either<E, G>, f: F6<A, B, C, D, F, G, Either<E, J>>) => Either<E, J>;
};
export {};
