import { F1 } from "./function";
export declare type Filter<A> = F1<A, boolean>;
export declare const Filter: {
    combine: <A>(...filters: F1<A, boolean>[]) => F1<A, boolean>;
};
