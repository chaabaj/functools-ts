import { Option } from "./option";
import { F2, F3 } from "./function";
export interface View<A> {
    start: number;
    end: number;
    at(index: number): Option<A>;
    forEach(f: F2<A, number, void>): void;
    foldLeft<B>(f: F3<B, A, number, B>, zero: B): B;
}
export declare const ListView: <A>(start: number, end: number, items: ReadonlyArray<A>) => View<A>;
