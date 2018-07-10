import { F1 } from "./function";
import { Option } from "./option";

export enum RemoteDataStatus {
  Loaded = "Loaded",
  Pending = "Pending",
  Failed = "Failed",
  Unloaded = "Unloaded"
}

export interface Loaded<A> {
  type: RemoteDataStatus.Loaded;
  data: A;
}
export const Data = <A>(data: A): Loaded<A> => ({
  type: RemoteDataStatus.Loaded,
  data
});

export interface Pending {
  type: RemoteDataStatus.Pending;
}
export const Pending = <A>(): RemoteData<A> => ({
  type: RemoteDataStatus.Pending
});

export interface Failed {
  type: RemoteDataStatus.Failed;
}
export const Failed = <A>(): RemoteData<A> => ({
  type: RemoteDataStatus.Failed
});

export interface Unloaded {
  type: RemoteDataStatus.Unloaded;
}
export const Unloaded = <A>(): RemoteData<A> => ({
  type: RemoteDataStatus.Unloaded
});

export type RemoteData<A> = Unloaded | Pending | Failed | Loaded<A>;

interface RemoteDataCases<A, B> {
  Loaded: (a: A) => B;
  Pending: () => B;
  Failed: () => B;
  Unloaded: () => B;
}

export const RemoteData = {
  loaded: <A>(rd: RemoteData<A>): rd is Loaded<A> =>
    rd.type === RemoteDataStatus.Loaded,

  pending: <A>(rd: RemoteData<A>): rd is Pending =>
    rd.type === RemoteDataStatus.Pending,

  failed: <A>(rd: RemoteData<A>): rd is Failed =>
    rd.type === RemoteDataStatus.Failed,

  unloaded: <A>(rd: RemoteData<A>): rd is Unloaded =>
    rd.type === RemoteDataStatus.Unloaded,

  match: <A, B>(rd: RemoteData<A>, cases: RemoteDataCases<A, B>): B => {
    switch (rd.type) {
      case RemoteDataStatus.Loaded:
        return cases.Loaded(rd.data);
      case RemoteDataStatus.Pending:
        return cases.Pending();
      case RemoteDataStatus.Failed:
        return cases.Failed();
      case RemoteDataStatus.Unloaded:
        return cases.Unloaded();
    }
  },

  map: <A, B>(rd: RemoteData<A>, f: F1<A, B>): RemoteData<B> =>
    RemoteData.match(rd, {
      Loaded: x => Data(f(x)),
      Pending: () => Pending<B>(),
      Failed: () => Failed<B>(),
      Unloaded: () => Unloaded<B>()
    }),

  data: <A>(rd: RemoteData<A>): Option<A> =>
    RemoteData.loaded(rd) ? rd.data : null,

  toString: <A>(rd: RemoteData<A>): string =>
    RemoteData.match(rd, {
      Loaded: x => `Loaded(${x})`,
      Pending: () => "Pending",
      Failed: () => "Failed",
      Unloaded: () => "Unloaded"
    })
};
