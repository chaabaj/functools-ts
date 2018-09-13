import { F1 } from "./function";


interface GroupFn {
  <A, B, C, D>(f1: F1<A, B>, f2: F1<B, C>): F1<A & C, B & D>
  <A, B, C, D, E, F>(
    f: F1<A, D>,
    g: F1<B, E>,
    h: F1<C, F>
  ): F1<A & B & C, D & E & F>
  <A, B, C, D, E, F, G, H>(
    f: F1<A, E>,
    g: F1<B, F>,
    h: F1<C, G>,
    j: F1<D, H>
  ): F1<A & B & C & D, E & F & G & H>
  <A, B, C, D, E, F, G, H, I, J>(
    f: F1<A, F>,
    g: F1<B, G>,
    h: F1<C, H>,
    j: F1<D, I>,
    k: F1<E, J>
  ): F1<A & B & C & D & E, F & G & H & I & J>
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    f: F1<A, G>,
    g: F1<B, H>,
    h: F1<C, I>,
    j: F1<D, J>,
    k: F1<E, K>,
    l: F1<F, L>
  ): F1<A & B & C & D & E & F, G & H & I & J & K & L>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    f: F1<A, H>,
    g: F1<B, I>,
    h: F1<C, J>,
    j: F1<D, K>,
    k: F1<E, L>,
    l: F1<F, M>,
    m: F1<G, N>
  ): F1<A & B & C & D & E & F & G, H & I & J & K & L & M & N>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    f: F1<A, I>,
    g: F1<B, J>,
    h: F1<C, K>,
    j: F1<D, L>,
    k: F1<E, M>,
    l: F1<F, N>,
    m: F1<G, O>,
    n: F1<H, P>
  ): F1<A & B & C & D & E & F & G & H, I & J & K & L & M & N & O & P>
  <A, B, C, D, E, F, G, H, I, J, K, M, N, O, P, Q, R, S>(
    f: F1<A, J>,
    g: F1<B, K>,
    h: F1<C, M>,
    j: F1<D, N>,
    k: F1<E, O>,
    l: F1<F, P>,
    m: F1<G, Q>,
    n: F1<H, R>,
    b: F1<I, S>
  ): F1<A & B & C & D & E & F & G & H & I, J & K & M & N & O & P & Q & R & S>
  p<A, B, C, D, E, F, G, H, I, J, K, M, N, O, P, Q, R, S, T, U>(
    f: F1<A, K>,
    g: F1<B, M>,
    h: F1<C, N>,
    j: F1<D, O>,
    k: F1<E, P>,
    l: F1<F, Q>,
    m: F1<G, R>,
    n: F1<H, S>,
    b: F1<I, T>,
    v: F1<J, U>
  ): F1<A & B & C & D & E & F & G & H & I & J, K & M & N & O & P & Q & R & S & T & U>
}

const group_ = (...fns: F1<any, any>[]) => (arg: any) =>
  fns.reduce((acc, f) => {
    return {
      ...acc,
      ...f(arg)
    }
  }, {})

const group = group_ as any as GroupFn
export {group}