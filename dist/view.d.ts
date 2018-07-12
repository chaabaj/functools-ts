import { Option } from "./option";
import { F1, F2 } from "./function";
export interface View<A> {
    start: number;
    end: number;
    at(index: number): Option<A>;
    forEach(f: F1<A, void>): void;
    foldLeft<B>(f: F2<A, B, B>, zero: B): B;
}
export declare const ListView: <A>(start: number, end: number, items: ReadonlyArray<A>) => View<A>;
