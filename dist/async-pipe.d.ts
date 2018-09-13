import { F1 } from "./function";
declare type TaskResult<A> = A | Promise<A>;
export declare type Task<A, B> = F1<A, TaskResult<B>>;
interface AsyncPipeFn {
    <A, B>(task1: Task<A, B>): F1<A, Promise<B>>;
    <A, B, C>(task1: Task<A, B>, task2: Task<B, C>): F1<A, Promise<C>>;
    <A, B, C, D>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>): F1<A, Promise<D>>;
    <A, B, C, D, E>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>): F1<A, Promise<E>>;
    <A, B, C, D, E, F>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>): F1<A, Promise<F>>;
    <A, B, C, D, E, F, G>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>): F1<A, Promise<G>>;
    <A, B, C, D, E, F, G, H>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>): F1<A, Promise<G>>;
    <A, B, C, D, E, F, G, H, J>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>): F1<A, Promise<J>>;
    <A, B, C, D, E, F, G, H, J, K>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>, task9: Task<J, K>): F1<A, Promise<K>>;
    <A, B, C, D, E, F, G, H, J, K, L>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>, task9: Task<J, K>, task10: Task<K, L>): F1<A, Promise<L>>;
    <A, B, C, D, E, F, G, H, J, K, L, M>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>, task9: Task<J, K>, task10: Task<K, L>, task11: Task<L, M>): F1<A, Promise<M>>;
    <A, B, C, D, E, F, G, H, J, K, L, M, N>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>, task9: Task<J, K>, task10: Task<K, L>, task11: Task<L, M>, task12: Task<M, N>): F1<A, Promise<N>>;
    <A, B, C, D, E, F, G, H, J, K, L, M, N, O>(task1: Task<A, B>, task2: Task<B, C>, task3: Task<C, D>, task4: Task<D, E>, task5: Task<E, F>, task6: Task<F, G>, task7: Task<G, H>, task8: Task<H, J>, task9: Task<J, K>, task10: Task<K, L>, task11: Task<L, M>, task12: Task<M, N>, task13: Task<N, O>): F1<A, Promise<O>>;
}
interface AsyncGroupFn {
    <A, B>(task1: Task<A, B>): F1<A, Promise<B>>;
    <A, B, C>(task1: Task<A, B>, task2: Task<A, C>): F1<A, Promise<[B, C]>>;
    <A, B, C, D>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>): F1<A, Promise<[B, C, D]>>;
    <A, B, C, D, E>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>): F1<A, Promise<[B, C, D, E]>>;
    <A, B, C, D, E, F>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>): F1<A, Promise<[B, C, D, E, F]>>;
    <A, B, C, D, E, F, G>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>): F1<A, Promise<[B, C, D, E, F, G]>>;
    <A, B, C, D, E, F, G, H>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>): F1<A, Promise<[B, C, D, E, F, G, H]>>;
    <A, B, C, D, E, F, G, H, L>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>): F1<A, Promise<[B, C, D, E, F, G, H, L]>>;
    <A, B, C, D, E, F, G, H, L, M>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>, task9: Task<A, M>): F1<A, Promise<[B, C, D, E, F, G, H, L, M]>>;
    <A, B, C, D, E, F, G, H, L, M, N>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>, task9: Task<A, M>, task10: Task<A, N>): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N]>>;
    <A, B, C, D, E, F, G, H, L, M, N, O>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>, task9: Task<A, M>, task10: Task<A, N>, task11: Task<A, O>): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O]>>;
    <A, B, C, D, E, F, G, H, L, M, N, O, P>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>, task9: Task<A, M>, task10: Task<A, N>, task11: Task<A, O>, task12: Task<A, P>): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O, P]>>;
    <A, B, C, D, E, F, G, H, L, M, N, O, P, Q>(task1: Task<A, B>, task2: Task<A, C>, task3: Task<A, D>, task4: Task<A, E>, task5: Task<A, F>, task6: Task<A, G>, task7: Task<A, H>, task8: Task<A, L>, task9: Task<A, M>, task10: Task<A, N>, task11: Task<A, O>, task12: Task<A, P>, task13: Task<A, Q>): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O, P, Q]>>;
}
declare const asyncGroup: AsyncGroupFn;
export { asyncGroup };
export declare const asyncPipe: AsyncPipeFn;
