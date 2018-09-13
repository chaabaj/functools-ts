import {F1} from "./function"

interface PipeFn {
  <A, B>(a: A, f: F1<A, B>): B
  <A, B, C>(a: A, f: F1<A, B>, g: F1<B, C>): C
  <A, B, C, D>(a: A, f: F1<A, B>, g: F1<B, C>, h: F1<C, D>): D
  <A, B, C, D, E>(
    a: A,
    f: F1<A, B>,
    g: F1<B, C>,
    h: F1<C, D>,
    j: F1<D, E>
  ): E
  <A, B, C, D, E, F>(
    a: A,
    f: F1<A, B>,
    g: F1<B, C>,
    h: F1<C, D>,
    j: F1<D, E>,
    l: F1<E, F>
  ): E
  <A, B, C, D, E, F, G>(
    a: A,
    f: F1<A, B>,
    g: F1<B, C>,
    h: F1<C, D>,
    j: F1<D, E>,
    l: F1<E, F>,
    m: F1<F, G>
  ): G
  <A, B, C, D, E, F, G, H>(
    a: A,
    f: F1<A, B>,
    g: F1<B, C>,
    h: F1<C, D>,
    j: F1<D, E>,
    l: F1<E, F>,
    m: F1<F, G>,
    n: F1<G, H>
  ): H
  <A, B, C, D, E, F, G, H, J>(
    a: A,
    f: F1<A, B>,
    g: F1<B, C>,
    h: F1<C, D>,
    j: F1<D, E>,
    l: F1<E, F>,
    m: F1<F, G>,
    n: F1<G, H>,
    b: F1<H, J>
  ): J
  <A, B, C, D, E, F, G, H, J, K>(
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
  ): K
  <A, B, C, D, E, F, G, H, J, K, L>(
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
  ): L
  <A, B, C, D, E, F, G, H, J, K, L, M>(
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
  ): M
  <A, B, C, D, E, F, G, H, J, K, L, M, N>(
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
  ): N
  <A, B, C, D, E, F, G, H, J, K, L, M, N, O>(
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
  ): O
}

export const pipe: PipeFn = (a: any, ...fns: F1<any, any>[]) =>
  fns.slice(1).reduce((next, fn) => fn(next), fns[0](a))
