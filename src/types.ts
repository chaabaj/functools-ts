import { F1 } from "./function"

export type List<A> = ReadonlyArray<A>
export type Filter<A> = F1<A, boolean>
