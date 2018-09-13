
import {F1} from "./function"

interface ComposeFn {
  <A, B, C>(f1: F1<A, B>, f2: F1<B, C>): F1<A, C>
  <A, B, C, D>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>): F1<A, D>
  <A, B, C, D, E>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>): F1<A, E>
  <A, B, C, D, E, F>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>): F1<A, F>
  <A, B, C, D, E, F, G>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>): F1<A, G>
  <A, B, C, D, E, F, G, H>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>): F1<A, H>
  <A, B, C, D, E, F, G, H, I>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>): F1<A, I>
  <A, B, C, D, E, F, G, H, I, J>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>, f9: F1<I, J>): F1<A, J>
  <A, B, C, D, E, F, G, H, I, J, K>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>, f9: F1<I, J>, f10: F1<J, K>): F1<A, K>
  <A, B, C, D, E, F, G, H, I, J, K, L>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>, f9: F1<I, J>, f10: F1<J, K>, f11: F1<K, L>): F1<A, L>
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>, f9: F1<I, J>, f10: F1<J, K>, f11: F1<K, L>, f12: F1<L, M>): F1<A, M>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(f1: F1<A, B>, f2: F1<B, C>, f3: F1<C, D>, f4: F1<D, E>, f5: F1<E, F>, f6: F1<F, G>, f7: F1<G, H>, f8: F1<H, I>, f9: F1<I, J>, f10: F1<J, K>, f11: F1<K, L>, f12: F1<L, M>, f13: F1<M, N>): F1<A, N>
}

export const compose: ComposeFn = (...fns: F1<any, any>[]) => (a: any) =>
  fns.slice(1).reduce((next, fn) => fn(next), fns[0](a))
