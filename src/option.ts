import { F1, Lazy } from "./function"
import { List } from "./types"

export type Option<A> = A | null | undefined

export const Option = {
  map: <A, B>(value: Option<A>, f: F1<A, B>): Option<B> =>
    Option.flatMap(value, f),

  flatMap: <A, B>(value: Option<A>, f: F1<A, Option<B>>): Option<B> =>
    Option.isDefined(value) ? f(value) : null,

  getOrElse: <A>(value: Option<A>, defaultVal: Lazy<A>): A =>
    Option.isDefined(value) ? value : defaultVal(),

  isDefined: <A>(value: Option<A>): value is A => value != null,

  isEmpty: <A>(value: Option<A>): value is null | undefined =>
    !Option.isDefined(value),

  forEach: <A>(value: Option<A>, f: F1<A, void>): void =>
    Option.isDefined(value) ? f(value) : ((null as any) as void),

  // optimized version of sequence
  sequence: <A>(list: List<Option<A>>): Option<List<A>> => {
    let i = 0
    let length = list.length
    let res: A[] = []

    while (i < length) {
      const current = list[i]
      if (Option.isEmpty(current)) return null
      res.push(current)
      i++
    }
    return res
  }
}
