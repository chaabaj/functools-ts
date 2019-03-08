import { F1, F2, Lazy } from "./function";
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
export interface Pending<A> {
    type: RemoteDataStatus.Pending;
    data: Option<A>;
}
export declare const Pending: <E, A>(data?: Option<A>) => RemoteData<E, A>;
export interface Failed<E, A> {
    type: RemoteDataStatus.Failed;
    error: E;
    data?: Option<A>;
}
export declare const Failed: <E, A>(error: E, data?: Option<A>) => RemoteData<E, A>;
export interface Unloaded {
    type: RemoteDataStatus.Unloaded;
}
export declare const Unloaded: <E, A>() => RemoteData<E, A>;
export declare type RemoteData<E, A> = Unloaded | Pending<A> | Failed<E, A> | Loaded<A>;
export declare type State<E, A> = [Option<E>, Option<A>, boolean];
interface RemoteDataCases<E, A, B> {
    Loaded: (a: A) => B;
    Pending: (data: Option<A>) => B;
    Failed: (error: E, data: Option<A>) => B;
    Unloaded: () => B;
}
export declare const RemoteData: {
    loaded: <E, A>(rd: RemoteData<E, A>) => rd is Loaded<A>;
    pending: <E, A>(rd: RemoteData<E, A>) => rd is Pending<A>;
    failed: <E, A>(rd: RemoteData<E, A>) => rd is Failed<E, A>;
    unloaded: <E, A>(rd: RemoteData<E, A>) => rd is Unloaded;
    match: <E, A, B>(rd: RemoteData<E, A>, cases: RemoteDataCases<E, A, B>) => B;
    map: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, B>) => RemoteData<E, B>;
    flatMap: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, RemoteData<E, B>>) => RemoteData<E, B>;
    map2: <E, A, B, C>(rd1: RemoteData<E, A>, rd2: RemoteData<E, B>, f: F2<A, B, C>) => RemoteData<E, C>;
    data: <E, A>(rd: RemoteData<E, A>) => Option<A>;
    toString: <E, A>(rd: RemoteData<E, A>) => string;
    getOrElse: <E, A>(rd1: RemoteData<E, A>, fval: Lazy<A>) => A;
    merge: <E, A>(rd1: RemoteData<E, A>, rd2: RemoteData<E, A>, add: F2<A, A, A>) => RemoteData<E, A>;
    replace: <E, A>(rd1: RemoteData<E, A>, rd2: RemoteData<E, A>) => RemoteData<E, A>;
    getState: <E, A>(rd1: RemoteData<E, A>) => [Option<E>, Option<A>, boolean];
};
export {};
