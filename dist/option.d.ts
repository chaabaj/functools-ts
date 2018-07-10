import { F1, Lazy } from "./function";
export declare type Option<A> = A | null | undefined;
export declare const Option: {
    map: <A, B>(value: Option<A>, f: F1<A, B>) => Option<B>;
    flatMap: <A, B>(value: Option<A>, f: F1<A, Option<B>>) => Option<B>;
    getOrElse: <A>(value: Option<A>, defaultVal: Lazy<A>) => A;
    isDefined: <A>(value: Option<A>) => value is A;
    isEmpty: <A>(value: Option<A>) => value is null | undefined;
    forEach: <A>(value: Option<A>, f: F1<A, void>) => void;
    sequence: <A>(list: ReadonlyArray<Option<A>>) => Option<ReadonlyArray<A>>;
};
