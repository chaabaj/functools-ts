export declare type F1<A, B> = (a: A) => B;
export declare type F2<A, B, C> = (a: A, b: B) => C;
export declare type F3<A, B, C, D> = (a: A, b: B, c: C) => D;
export declare type F4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
export declare type F5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;
export declare type F6<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G;
export declare type Lazy<A> = () => A;
export declare type Curried<A, B, C> = (a: A) => (b: B) => C;
export declare type Curried2<A, B, C, D> = (a: A) => (b: B) => (c: C) => D;
