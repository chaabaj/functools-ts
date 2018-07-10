import { List } from "./types";
import { Option } from "./option";
import { F1, F2 } from "./function";
export interface View<A> {
    start: number;
    end: number;
    items: List<A>;
}
export declare const View: {
    create: <A>(items: ReadonlyArray<A>, start: number, end?: number) => View<A>;
    at: <A>(view: View<A>, index: number) => Option<A>;
    filter: <A>(view: View<A>, f: F1<A, boolean>) => ReadonlyArray<A>;
    forEach: <A>(view: View<A>, f: F1<A, void>) => void;
    map: <A, B>(view: View<A>, f: F1<A, B>) => ReadonlyArray<B>;
    foldLeft: <A, B>(view: View<A>, f: F2<A, B, B>, zero: B) => B;
};
