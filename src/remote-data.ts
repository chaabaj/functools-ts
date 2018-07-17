import { F1 } from "./function"
import { Option } from "./option"

export enum RemoteDataStatus {
  Loaded = "Loaded",
  Pending = "Pending",
  Failed = "Failed",
  Unloaded = "Unloaded"
}

export interface Loaded<A> {
  type: RemoteDataStatus.Loaded
  data: A
}
export const Loaded = <A>(data: A): Loaded<A> => ({
  type: RemoteDataStatus.Loaded,
  data
})

export interface Pending {
  type: RemoteDataStatus.Pending
}
export const Pending = <A, E>(): RemoteData<E, A> => ({
  type: RemoteDataStatus.Pending
})

export interface Failed<E> {
  type: RemoteDataStatus.Failed
  error: E
}
export const Failed = <E, A>(error: E): RemoteData<E, A> => ({
  type: RemoteDataStatus.Failed,
  error
})

export interface Unloaded {
  type: RemoteDataStatus.Unloaded
}
export const Unloaded = <E, A>(): RemoteData<E, A> => ({
  type: RemoteDataStatus.Unloaded
})

export type RemoteData<E, A> = Unloaded | Pending | Failed<E> | Loaded<A>

interface RemoteDataCases<E, A, B> {
  Loaded: (a: A) => B
  Pending: () => B
  Failed: (error: E) => B
  Unloaded: () => B
}

export const RemoteData = {
  loaded: <E, A>(rd: RemoteData<E, A>): rd is Loaded<A> =>
    rd.type === RemoteDataStatus.Loaded,

  pending: <E, A>(rd: RemoteData<E, A>): rd is Pending =>
    rd.type === RemoteDataStatus.Pending,

  failed: <E, A>(rd: RemoteData<E, A>): rd is Failed<E> =>
    rd.type === RemoteDataStatus.Failed,

  unloaded: <E, A>(rd: RemoteData<E, A>): rd is Unloaded =>
    rd.type === RemoteDataStatus.Unloaded,

  match: <E, A, B>(
    rd: RemoteData<E, A>,
    cases: RemoteDataCases<E, A, B>
  ): B => {
    switch (rd.type) {
      case RemoteDataStatus.Loaded:
        return cases.Loaded(rd.data)
      case RemoteDataStatus.Pending:
        return cases.Pending()
      case RemoteDataStatus.Failed:
        return cases.Failed(rd.error)
      case RemoteDataStatus.Unloaded:
        return cases.Unloaded()
    }
  },

  map: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, B>): RemoteData<E, B> =>
    RemoteData.match<E, A, RemoteData<E, B>>(rd, {
      Loaded: x => Loaded(f(x)),
      Pending: () => Pending(),
      Failed: e => Failed(e),
      Unloaded: () => Unloaded()
    }),

  data: <E, A>(rd: RemoteData<E, A>): Option<A> =>
    RemoteData.loaded(rd) ? rd.data : null,

  toString: <E, A>(rd: RemoteData<E, A>): string =>
    RemoteData.match(rd, {
      Loaded: x => `Loaded(${x})`,
      Pending: () => "Pending",
      Failed: error => `Failed(${error.toString()})`,
      Unloaded: () => "Unloaded"
    })
}
