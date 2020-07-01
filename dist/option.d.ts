import { F1, Lazy } from "./function";
import { List } from "./list";
export declare type Option<A> = A | null | undefined;
export declare const Option: {
    map: <A, B>(value: Option<A>, f: F1<A, B>) => Option<B>;
    flatMap: <A_1, B_1>(value: Option<A_1>, f: F1<A_1, Option<B_1>>) => Option<B_1>;
    getOrElse: <A_2>(value: Option<A_2>, defaultVal: Lazy<A_2>) => A_2;
    isDefined: <A_3>(value: Option<A_3>) => value is A_3;
    isEmpty: <A_4>(value: Option<A_4>) => value is null | undefined;
    forEach: <A_5>(value: Option<A_5>, f: F1<A_5, void>) => void;
    sequence: <A_6>(list: List<Option<A_6>>) => Option<List<A_6>>;
};
