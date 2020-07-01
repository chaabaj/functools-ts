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
    pending: <E_1, A_1>(rd: RemoteData<E_1, A_1>) => rd is Pending<A_1>;
    failed: <E_2, A_2>(rd: RemoteData<E_2, A_2>) => rd is Failed<E_2, A_2>;
    unloaded: <E_3, A_3>(rd: RemoteData<E_3, A_3>) => rd is Unloaded;
    match: <E_4, A_4, B>(rd: RemoteData<E_4, A_4>, cases: RemoteDataCases<E_4, A_4, B>) => B;
    map: <E_5, A_5, B_1>(rd: RemoteData<E_5, A_5>, f: F1<A_5, B_1>) => RemoteData<E_5, B_1>;
    flatMap: <E_6, A_6, B_2>(rd: RemoteData<E_6, A_6>, f: F1<A_6, RemoteData<E_6, B_2>>) => RemoteData<E_6, B_2>;
    map2: <E_7, A_7, B_3, C>(rd1: RemoteData<E_7, A_7>, rd2: RemoteData<E_7, B_3>, f: F2<A_7, B_3, C>) => RemoteData<E_7, C>;
    data: <E_8, A_8>(rd: RemoteData<E_8, A_8>) => Option<A_8>;
    toString: <E_9 extends {}, A_9>(rd: RemoteData<E_9, A_9>) => string;
    getOrElse: <E_10, A_10>(rd1: RemoteData<E_10, A_10>, fval: Lazy<A_10>) => A_10;
    merge: <E_11, A_11>(rd1: RemoteData<E_11, A_11>, rd2: RemoteData<E_11, A_11>, add: F2<A_11, A_11, A_11>) => RemoteData<E_11, A_11>;
    replace: <E_12, A_12>(rd1: RemoteData<E_12, A_12>, rd2: RemoteData<E_12, A_12>) => RemoteData<E_12, A_12>;
    getState: <E_13, A_13>(rd1: RemoteData<E_13, A_13>) => State<E_13, A_13>;
};
export {};
