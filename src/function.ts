export type F1<A, B> = (a: A) => B
export type F2<A, B, C> = (a: A, b: B) => C
export type F3<A, B, C, D> = (a: A, b: B, c: C) => D
export type F4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E
export type F5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F
export type F6<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G
export type F7<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
export type F8<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I
export type F9<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J
export type F10<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K
export type Lazy<A> = () => A
export type Curried<A, B, C> = (a: A) => (b: B) => C
export type Curried2<A, B, C, D> = (a: A) => (b: B) => (c: C) => D
