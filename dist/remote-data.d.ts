import { F1 } from "./function";
import { Option } from "./option";
export declare enum RemoteDataStatus {
    Loaded = "Loaded",
    Pending = "Pending",
    Failed = "Failed",
    Unloaded = "Unloaded"
}
export interface Loaded<A> {
    type: RemoteDataStatus.Loaded;
    data: A;
}
export declare const Loaded: <A>(data: A) => Loaded<A>;
export interface Pending {
    type: RemoteDataStatus.Pending;
}
export declare const Pending: <A, E>() => RemoteData<E, A>;
export interface Failed<E> {
    type: RemoteDataStatus.Failed;
    error: E;
}
export declare const Failed: <E, A>(error: E) => RemoteData<E, A>;
export interface Unloaded {
    type: RemoteDataStatus.Unloaded;
}
export declare const Unloaded: <E, A>() => RemoteData<E, A>;
export declare type RemoteData<E, A> = Unloaded | Pending | Failed<E> | Loaded<A>;
interface RemoteDataCases<E, A, B> {
    Loaded: (a: A) => B;
    Pending: () => B;
    Failed: (error: E) => B;
    Unloaded: () => B;
}
export declare const RemoteData: {
    loaded: <E, A>(rd: RemoteData<E, A>) => rd is Loaded<A>;
    pending: <E, A>(rd: RemoteData<E, A>) => rd is Pending;
    failed: <E, A>(rd: RemoteData<E, A>) => rd is Failed<E>;
    unloaded: <E, A>(rd: RemoteData<E, A>) => rd is Unloaded;
    match: <E, A, B>(rd: RemoteData<E, A>, cases: RemoteDataCases<E, A, B>) => B;
    map: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, B>) => RemoteData<E, B>;
    data: <E, A>(rd: RemoteData<E, A>) => Option<A>;
    toString: <E, A>(rd: RemoteData<E, A>) => string;
};
export {};
