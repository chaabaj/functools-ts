import { Option } from "./option";
import { F1, Lazy, F2, F3, F4, F5, F6 } from "./function";
import { List } from "./list";
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
    isLeft: <E_1, A_1>(either: Either<E_1, A_1>) => either is Left<E_1>;
    bimap: <E_2, A_2, A2, E2>(either: Either<E_2, A_2>, l: F1<E_2, E2>, r: F1<A_2, A2>) => Either<E2, A2>;
    map: <E_3, A_3, B>(either: Either<E_3, A_3>, f: F1<A_3, B>) => Either<E_3, B>;
    toString: <E_4, A_4>(either: Either<E_4, A_4>) => string;
    flatMap: <E_5, A_5, B_1>(either: Either<E_5, A_5>, f: F1<A_5, Either<E_5, B_1>>) => Either<E_5, B_1>;
    recover: <E_6, A_6, B_2 extends A_6>(either: Either<E_6, A_6>, f: F1<E_6, Either<E_6, B_2>>) => Either<E_6, A_6>;
    getOrElse: <E_7, A_7>(either: Either<E_7, A_7>, defaultVal: Lazy<A_7>) => A_7;
    forEach: <E_8, A_8>(either: Either<E_8, A_8>, f: F1<A_8, void>) => void;
    sequence: <E_9, A_9>(list: List<Either<E_9, A_9>>) => Either<E_9, List<A_9>>;
    left: <E_10, A_10>(either: Either<E_10, A_10>) => Option<E_10>;
    right: <E_11, A_11>(either: Either<E_11, A_11>) => Option<A_11>;
    match: <E_12, A_12, B_3>(either: Either<E_12, A_12>, cases: EitherCases<E_12, A_12, B_3>) => B_3;
    flatMap2: <E_13, A_13, B_4, C>(ea: Either<E_13, A_13>, eb: Either<E_13, B_4>, f: F2<A_13, B_4, Either<E_13, C>>) => Either<E_13, C>;
    flatMap3: <E_14, A_14, B_5, C_1, D>(ea: Either<E_14, A_14>, eb: Either<E_14, B_5>, ec: Either<E_14, C_1>, f: F3<A_14, B_5, C_1, Either<E_14, D>>) => Either<E_14, D>;
    flatMap4: <E_15, A_15, B_6, C_2, D_1, F>(ea: Either<E_15, A_15>, eb: Either<E_15, B_6>, ec: Either<E_15, C_2>, ed: Either<E_15, D_1>, f: F4<A_15, B_6, C_2, D_1, Either<E_15, F>>) => Either<E_15, F>;
    flatMap5: <E_16, A_16, B_7, C_3, D_2, F_1, G>(ea: Either<E_16, A_16>, eb: Either<E_16, B_7>, ec: Either<E_16, C_3>, ed: Either<E_16, D_2>, eh: Either<E_16, F_1>, f: F5<A_16, B_7, C_3, D_2, F_1, Either<E_16, G>>) => Either<E_16, G>;
    flatMap6: <E_17, A_17, B_8, C_4, D_3, F_2, G_1, J>(ea: Either<E_17, A_17>, eb: Either<E_17, B_8>, ec: Either<E_17, C_4>, ed: Either<E_17, D_3>, eh: Either<E_17, F_2>, eg: Either<E_17, G_1>, f: F6<A_17, B_8, C_4, D_3, F_2, G_1, Either<E_17, J>>) => Either<E_17, J>;
};
export {};
