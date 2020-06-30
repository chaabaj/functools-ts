import { F1, F2, Lazy } from "./function"
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

export interface Pending<A> {
  type: RemoteDataStatus.Pending,
  data: Option<A>
}
export const Pending = <E, A>(data?: Option<A>): RemoteData<E, A> => ({
  type: RemoteDataStatus.Pending,
  data
})

export interface Failed<E, A> {
  type: RemoteDataStatus.Failed
  error: E,
  data?: Option<A>
}
export const Failed = <E, A>(error: E, data?: Option<A>): RemoteData<E, A> => ({
  type: RemoteDataStatus.Failed,
  error,
  data
})

export interface Unloaded {
  type: RemoteDataStatus.Unloaded
}
export const Unloaded = <E, A>(): RemoteData<E, A> => ({
  type: RemoteDataStatus.Unloaded
})

export type RemoteData<E, A> = Unloaded | Pending<A> | Failed<E, A> | Loaded<A>
export type State<E, A> = [Option<E>, Option<A>, boolean]

interface RemoteDataCases<E, A, B> {
  Loaded: (a: A) => B
  Pending: (data: Option<A>) => B
  Failed: (error: E, data: Option<A>) => B
  Unloaded: () => B
}

export const RemoteData = {
  loaded: <E, A>(rd: RemoteData<E, A>): rd is Loaded<A> =>
    rd.type === RemoteDataStatus.Loaded,

  pending: <E, A>(rd: RemoteData<E, A>): rd is Pending<A> =>
    rd.type === RemoteDataStatus.Pending,

  failed: <E, A>(rd: RemoteData<E, A>): rd is Failed<E, A> =>
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
        return cases.Pending(rd.data)
      case RemoteDataStatus.Failed:
        return cases.Failed(rd.error, rd.data)
      case RemoteDataStatus.Unloaded:
        return cases.Unloaded()
    }
  },

  map: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, B>): RemoteData<E, B> =>
    RemoteData.match<E, A, RemoteData<E, B>>(rd, {
      Loaded: x => Loaded(f(x)),
      Pending: data => data ? Pending(f(data)): Pending(),
      Failed: (e, data) => data ? Failed(e, f(data)) : Failed(e),
      Unloaded: () => Unloaded()
    }),

  flatMap: <E, A, B>(rd: RemoteData<E, A>, f: F1<A, RemoteData<E, B>>): RemoteData<E, B> =>
    RemoteData.match<E, A, RemoteData<E, B>>(rd, {
      Loaded: x => f(x),
      Pending: data => data ? f(data) : Pending(),
      Failed: (e, data) => data ? f(data) : Failed(e),
      Unloaded: () => Unloaded()
    }),

  map2: <E, A, B, C>(rd1: RemoteData<E, A>, rd2: RemoteData<E, B>, f: F2<A, B, C>): RemoteData<E, C> =>
    RemoteData.flatMap(rd1, data1 => RemoteData.map(rd2, data2 => f(data1, data2))),


  data: <E, A>(rd: RemoteData<E, A>): Option<A> =>
    RemoteData.loaded(rd) || RemoteData.failed(rd) || RemoteData.pending(rd) ? rd.data : null,

  toString: <E extends {}, A>(rd: RemoteData<E, A>): string =>
    RemoteData.match(rd, {
      Loaded: data => `Loaded(${data})`,
      Pending: data => `Pending(${data})`,
      Failed: (error, data) => `Failed(${error.toString()}, ${data})`,
      Unloaded: () => "Unloaded"
    }),
  
  getOrElse: <E, A>(rd1: RemoteData<E, A>, fval: Lazy<A>): A =>
    Option.getOrElse(RemoteData.data(rd1), fval),

  merge: <E, A>(rd1: RemoteData<E, A>, rd2: RemoteData<E, A>, add: F2<A, A, A>): RemoteData<E, A> => {
    if (RemoteData.loaded(rd1) && RemoteData.loaded(rd2))
      return Loaded(add(rd1.data, rd2.data))
    else if (RemoteData.pending(rd1) && RemoteData.loaded(rd2))
      return rd1.data ? Loaded(add(rd1.data, rd2.data)) : rd2
    else if (RemoteData.pending(rd1) && RemoteData.pending(rd2))
      return rd1.data && rd2.data ? Pending(add(rd1.data, rd2.data)) : rd2
    else if (RemoteData.pending(rd1) && RemoteData.failed(rd2))
      return rd1.data ? Failed(rd2.error, rd1.data) : rd2
    else if (RemoteData.failed(rd1) && RemoteData.failed(rd2))
      return rd1.data ? Failed(rd2.error, rd1.data): rd2
    else if (RemoteData.failed(rd1) && RemoteData.pending(rd2))
      return rd1.data ? Pending(rd1.data) : rd2
    else
      return rd2
  },

  replace: <E, A>(rd1: RemoteData<E, A>, rd2: RemoteData<E, A>): RemoteData<E, A> =>
    RemoteData.merge(rd1, rd2, a => a),

  getState: <E, A>(rd1: RemoteData<E, A>): State<E, A> => {
    const b = RemoteData.match(rd1, {
      Loaded: data => [null, data, false] as State<E, A>,
      Pending: (data) => [null, data || null, true],
      Failed: (err, data) => [err, data || null, false],
      Unloaded: () => [null, null, false]
    }) as State<E, A>
    return b
  }
    
}
