import { F1 } from "./function"

type TaskResult<A> = A | Promise<A>
export type Task<A, B> = F1<A, TaskResult<B>>

export function asyncGroup<A, B>(task1: Task<A, B>): F1<A, Promise<B>>
export function asyncGroup<A, B, C>(
  task1: Task<A, B>,
  task2: Task<A, C>
): F1<A, Promise<[B, C]>>

export function asyncGroup<A, B, C, D>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>
): F1<A, Promise<[B, C, D]>>

export function asyncGroup<A, B, C, D, E>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>
): F1<A, Promise<[B, C, D, E]>>

export function asyncGroup<A, B, C, D, E, F>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>
): F1<A, Promise<[B, C, D, E, F]>>

export function asyncGroup<A, B, C, D, E, F, G>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>
): F1<A, Promise<[B, C, D, E, F, G]>>

export function asyncGroup<A, B, C, D, E, F, G, H>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>
): F1<A, Promise<[B, C, D, E, F, G, H]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>
): F1<A, Promise<[B, C, D, E, F, G, H, L]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L, M>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>,
  task9: Task<A, M>
): F1<A, Promise<[B, C, D, E, F, G, H, L, M]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L, M, N>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>,
  task9: Task<A, M>,
  task10: Task<A, N>
): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L, M, N, O>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>,
  task9: Task<A, M>,
  task10: Task<A, N>,
  task11: Task<A, O>
): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L, M, N, O, P>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>,
  task9: Task<A, M>,
  task10: Task<A, N>,
  task11: Task<A, O>,
  task12: Task<A, P>
): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O, P]>>

export function asyncGroup<A, B, C, D, E, F, G, H, L, M, N, O, P, Q>(
  task1: Task<A, B>,
  task2: Task<A, C>,
  task3: Task<A, D>,
  task4: Task<A, E>,
  task5: Task<A, F>,
  task6: Task<A, G>,
  task7: Task<A, H>,
  task8: Task<A, L>,
  task9: Task<A, M>,
  task10: Task<A, N>,
  task11: Task<A, O>,
  task12: Task<A, P>,
  task13: Task<A, Q>
): F1<A, Promise<[B, C, D, E, F, G, H, L, M, N, O, P, Q]>>

export function asyncPipe<A, B>(task1: Task<A, B>): F1<A, Promise<B>>
export function asyncPipe<A, B, C>(
  task1: Task<A, B>,
  task2: Task<B, C>
): F1<A, Promise<C>>

export function asyncPipe<A, B, C, D>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>
): F1<A, Promise<D>>

export function asyncPipe<A, B, C, D, E>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>
): F1<A, Promise<E>>
export function asyncPipe<A, B, C, D, E, F>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>
): F1<A, Promise<F>>

export function asyncPipe<A, B, C, D, E, F, H>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>
): F1<A, Promise<H>>
export function asyncPipe<A, B, C, D, E, F, H, G>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>
): F1<A, Promise<G>>
export function asyncPipe<A, B, C, D, E, F, H, G, I>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>,
  task8: Task<G, I>
): F1<A, Promise<I>>

export function asyncPipe<A, B, C, D, E, F, H, G, I, L>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>,
  task8: Task<G, I>,
  task9: Task<I, L>
): F1<A, Promise<L>>
export function asyncPipe<A, B, C, D, E, F, H, G, I, L, M>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>,
  task8: Task<G, I>,
  task9: Task<I, L>,
  task10: Task<L, M>
): F1<A, Promise<M>>

export function asyncPipe<A, B, C, D, E, F, H, G, I, L, M, N>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>,
  task8: Task<G, I>,
  task9: Task<I, L>,
  task10: Task<L, M>,
  task11: Task<M, N>
): F1<A, Promise<N>>
export function asyncPipe<A, B, C, D, E, F, H, G, I, L, M, N, O, P>(
  task1: Task<A, B>,
  task2: Task<B, C>,
  task3: Task<C, D>,
  task4: Task<D, E>,
  task5: Task<E, F>,
  task6: Task<F, H>,
  task7: Task<H, G>,
  task8: Task<G, I>,
  task9: Task<I, L>,
  task10: Task<L, M>,
  task11: Task<M, N>,
  task12: Task<N, O>,
  task13: Task<O, P>
): F1<A, Promise<P>>
