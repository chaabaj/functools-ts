import { List } from "./list";
import { F2, F3 } from "./function";
export interface View<A> {
    at(index: number): A;
    forEach(f: F2<A, number, void>): void;
    foldLeft<B>(f: F3<B, A, number, B>, zero: B): B;
    slice(index: number, end: number): View<A>;
    length: number;
    match<B>(cases: ViewCases<A, B>): B;
}
interface ViewCases<A, B> {
    Empty(): B;
    Single(a: A): B;
    Cons(a: A, rest: View<A>): B;
}
export declare const ListView: <A>(start: number, end: number, items: List<A>) => View<A>;
export {};
