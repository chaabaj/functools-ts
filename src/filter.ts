import { F1 } from "./function"

export type Filter<A> = F1<A, boolean>

export const Filter = {
  combine: <A>(...filters: Filter<A>[]): Filter<A> => a =>
    filters.every(filter => filter(a))
}