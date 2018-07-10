import { F1 } from "./function";

export function pipe<A, B>(a: A, f: F1<A, B>): B;
export function pipe<A, B, C>(a: A, f: F1<A, B>, g: F1<B, C>): C;
export function pipe<A, B, C, D>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>
): D;
export function pipe<A, B, C, D, E>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>
): E;
export function pipe<A, B, C, D, E, F>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>
): E;
export function pipe<A, B, C, D, E, F, G>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>
): G;
export function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>
): H;
export function pipe<A, B, C, D, E, F, G, H, J>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>
): J;
export function pipe<A, B, C, D, E, F, G, H, J, K>(
  a: A,
  f: F1<A, B>,
  g: F1<B, C>,
  h: F1<C, D>,
  j: F1<D, E>,
  l: F1<E, F>,
  m: F1<F, G>,
  n: F1<G, H>,
  b: F1<H, J>,
  c: F1<J, K>
): K;
export function pipe<A, B, C, D, E, F, G, H, J, K, L>(
  a: A,
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
): L;
export function pipe<A, B, C, D, E, F, G, H, J, K, L, M>(
  a: A,
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
): M;
export function pipe<A, B, C, D, E, F, G, H, J, K, L, M, N>(
  a: A,
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
): N;
export function pipe<A, B, C, D, E, F, G, H, J, K, L, M, N, O>(
  a: A,
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
): O;
