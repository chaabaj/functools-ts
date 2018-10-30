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
    set: <A>(list: ReadonlyArray<A>, where: Selector<A>, value: A | F1<A, A>) => ReadonlyArray<A>;
    get: <A>(list: ReadonlyArray<A>, where: Selector<A>) => Option<A>;
    contains: <A>(list: ReadonlyArray<A>, item: A) => boolean;
    match: <A, B>(list: ReadonlyArray<A>, cases: ListCases<A, B>) => B;
    isList: <A>(maybeList: any) => maybeList is ReadonlyArray<A>;
};
export {};
