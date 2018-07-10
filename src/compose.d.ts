import { F1 } from "./function";

export function compose<A, B, C>(f: F1<A, B>, g: F1<B, C>): F1<A, C>;
export function compose<A, B, C, D>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>
): F1<A, D>;
export function compose<A, B, C, D, E>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>
): F1<A, E>;
export function compose<A, B, C, D, E, F>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>
): F1<A, F>;
export function compose<A, B, C, D, E, F, G>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>
): F1<A, G>;
export function compose<A, B, C, D, E, F, G, H>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>
): F1<A, H>;
export function compose<A, B, C, D, E, F, G, H, J>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>
): F1<A, J>;
export function compose<A, B, C, D, E, F, G, H, J, K>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>
): F1<A, K>;
export function compose<A, B, C, D, E, F, G, H, J, K, L>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>,
  x: F1<K, L>
): F1<A, L>;
export function compose<A, B, C, D, E, F, G, H, J, K, L, M>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>,
  x: F1<K, L>,
  w: F1<L, M>
): F1<A, M>;
export function compose<A, B, C, D, E, F, G, H, J, K, L, M, N>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>,
  x: F1<K, L>,
  w: F1<L, M>,
  q: F1<M, N>
): F1<A, N>;
export function compose<A, B, C, D, E, F, G, H, J, K, L, M, N, O>(
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>,
  x: F1<K, L>,
  w: F1<L, M>,
  q: F1<M, N>,
  o: F1<N, O>
): F1<A, O>;
