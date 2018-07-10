import { Option } from "./option"
import { F1, Lazy, F2, F3, F4, F5, F6 } from "./function"
import { List } from "./types"

export type Right<A> = {
  isRight: true
  isLeft: false
  value: A
}

export type Left<E> = {
  isRight: false
  isLeft: true
  value: E
}

export type Either<E, A> = Left<E> | Right<A>

export const Right = <E, A>(value: A): Either<E, A> => ({
  isLeft: false,
  isRight: true,
  value
})

export const Left = <E, A>(error: E): Either<E, A> => ({
  isLeft: true,
  isRight: false,
  value: error
})

type EitherCases<E, A, B> = {
  Right: (x: A) => B
  Left: (error: E) => B
}

export const Either = {
  isRight: <E, A>(either: Either<E, A>): either is Right<A> => either.isRight,

  isLeft: <E, A>(either: Either<E, A>): either is Left<E> => either.isLeft,

  bimap: <E, A, A2, E2>(
    either: Either<E, A>,
    l: F1<E, E2>,
    r: F1<A, A2>
  ): Either<E2, A2> =>
    Either.match(either, {
      Right: x => Right<E2, A2>(r(x)),
      Left: e => Left<E2, A2>(l(e))
    }),

  map: <E, A, B>(either: Either<E, A>, f: F1<A, B>): Either<E, B> =>
    Either.flatMap<E, A, B>(either, x => Right(f(x))),

  toString: <E, A>(either: Either<E, A>): string =>
    Either.match(either, {
      Right: x => `Right(${x})`,
      Left: e => `Left(${e})`
    }),

  flatMap: <E, A, B>(
    either: Either<E, A>,
    f: F1<A, Either<E, B>>
  ): Either<E, B> =>
    Either.isRight(either)
      ? f(either.value)
      : ((either as any) as Either<E, B>),

  recover: <E, A, B extends A>(
    either: Either<E, A>,
    f: F1<E, Either<E, B>>
  ): Either<E, A> => (Either.isLeft(either) ? f(either.value) : either),

  getOrElse: <E, A>(either: Either<E, A>, defaultVal: Lazy<A>): A =>
    Either.isRight(either) ? either.value : defaultVal(),

  forEach: <E, A>(either: Either<E, A>, f: F1<A, void>): void =>
    Either.isRight(either) ? f(either.value) : ((null as any) as void),

  sequence: <E, A>(list: List<Either<E, A>>): Either<E, List<A>> => {
    let i = 0
    let length = list.length
    let res: A[] = []

    while (i < length) {
      const current = list[i]
      if (Either.isLeft(current)) return current
      res.push(current.value)
      i++
    }
    return Right(res)
  },

  left: <E, A>(either: Either<E, A>): Option<E> =>
    Either.isLeft(either) ? either.value : null,

  right: <E, A>(either: Either<E, A>): Option<A> =>
    Either.isRight(either) ? either.value : null,

  match: <E, A, B>(either: Either<E, A>, cases: EitherCases<E, A, B>): B =>
    Either.isRight(either)
      ? cases.Right(either.value)
      : cases.Left(either.value),

  flatMap2: <E, A, B, C>(
    ea: Either<E, A>,
    eb: Either<E, B>,
    f: F2<A, B, Either<E, C>>
  ): Either<E, C> => Either.flatMap(ea, a => Either.flatMap(eb, b => f(a, b))),

  flatMap3: <E, A, B, C, D>(
    ea: Either<E, A>,
    eb: Either<E, B>,
    ec: Either<E, C>,
    f: F3<A, B, C, Either<E, D>>
  ): Either<E, D> =>
    Either.flatMap2(ea, eb, (a, b) => Either.flatMap(ec, c => f(a, b, c))),

  flatMap4: <E, A, B, C, D, F>(
    ea: Either<E, A>,
    eb: Either<E, B>,
    ec: Either<E, C>,
    ed: Either<E, D>,
    f: F4<A, B, C, D, Either<E, F>>
  ): Either<E, F> =>
    Either.flatMap3(ea, eb, ec, (a, b, c) =>
      Either.flatMap(ed, d => f(a, b, c, d))
    ),

  flatMap5: <E, A, B, C, D, F, G>(
    ea: Either<E, A>,
    eb: Either<E, B>,
    ec: Either<E, C>,
    ed: Either<E, D>,
    eh: Either<E, F>,
    f: F5<A, B, C, D, F, Either<E, G>>
  ): Either<E, G> =>
    Either.flatMap4(ea, eb, ec, ed, (a, b, c, d) =>
      Either.flatMap(eh, h => f(a, b, c, d, h))
    ),

  flatMap6: <E, A, B, C, D, F, G, J>(
    ea: Either<E, A>,
    eb: Either<E, B>,
    ec: Either<E, C>,
    ed: Either<E, D>,
    eh: Either<E, F>,
    eg: Either<E, G>,
    f: F6<A, B, C, D, F, G, Either<E, J>>
  ): Either<E, J> =>
    Either.flatMap5(ea, eb, ec, ed, eh, (a, b, c, d, h) =>
      Either.flatMap(eg, g => f(a, b, c, d, h, g))
    )
}
