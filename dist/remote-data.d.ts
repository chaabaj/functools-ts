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
export declare const Data: <A>(data: A) => Loaded<A>;
export interface Pending {
    type: RemoteDataStatus.Pending;
}
export declare const Pending: <A>() => RemoteData<A>;
export interface Failed {
    type: RemoteDataStatus.Failed;
}
export declare const Failed: <A>() => RemoteData<A>;
export interface Unloaded {
    type: RemoteDataStatus.Unloaded;
}
export declare const Unloaded: <A>() => RemoteData<A>;
export declare type RemoteData<A> = Unloaded | Pending | Failed | Loaded<A>;
interface RemoteDataCases<A, B> {
    Loaded: (a: A) => B;
    Pending: () => B;
    Failed: () => B;
    Unloaded: () => B;
}
export declare const RemoteData: {
    loaded: <A>(rd: RemoteData<A>) => rd is Loaded<A>;
    pending: <A>(rd: RemoteData<A>) => rd is Pending;
    failed: <A>(rd: RemoteData<A>) => rd is Failed;
    unloaded: <A>(rd: RemoteData<A>) => rd is Unloaded;
    match: <A, B>(rd: RemoteData<A>, cases: RemoteDataCases<A, B>) => B;
    map: <A, B>(rd: RemoteData<A>, f: F1<A, B>) => RemoteData<B>;
    data: <A>(rd: RemoteData<A>) => Option<A>;
    toString: <A>(rd: RemoteData<A>) => string;
};
export {};
