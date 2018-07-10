import { Curried, F2, F3, Curried2 } from "./function"

export const curry1 = <A, B, C>(f: F2<A, B, C>): Curried<A, B, C> => a => b =>
  f(a, b)

export const curry2 = <A, B, C, D>(
  f: F3<A, B, C, D>
): Curried2<A, B, C, D> => a => b => c => f(a, b, c)
