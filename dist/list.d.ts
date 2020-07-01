import { F1 } from "./function";
import { Option } from "./option";
export declare type List<A> = ReadonlyArray<A>;
declare type Selector<T> = Partial<T> | number | ((item: T, index: number, list: List<T>) => boolean);
interface ListCases<A, B> {
    Single(a: A): B;
    Cons(a: A, rest: List<A>): B;
    Empty(): B;
}
export declare const List: {
    set: <A>(list: List<A>, where: Selector<A>, value: A | F1<A, A>) => List<A>;
    get: <A_1>(list: List<A_1>, where: Selector<A_1>) => Option<A_1>;
    contains: <A_2>(list: List<A_2>, item: A_2) => boolean;
    match: <A_3, B>(list: List<A_3>, cases: ListCases<A_3, B>) => B;
    isList: <A_4>(maybeList: any) => maybeList is List<A_4>;
    remove: <A_5>(list: List<A_5>, itemToRemove: A_5) => List<A_5>;
    equals: <A_6>(list1: List<A_6>, list2: List<A_6>, eq?: ((a: A_6, b: A_6) => boolean) | undefined) => boolean;
    setAndMove: <A_7>(a: A_7, where: Selector<A_7>, newIdx: number) => (list: List<A_7>) => List<A_7>;
};
export {};
