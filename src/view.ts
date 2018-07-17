import { List } from "./list"
import { F2, F3 } from "./function"

export interface View<A> {
  at(index: number): A
  forEach(f: F2<A, number, void>): void
  foldLeft<B>(f: F3<B, A, number, B>, zero: B): B
  slice(index: number, end: number): View<A>
  length: number
  match<B>(cases: ViewCases<A, B>): B
}

interface ViewCases<A, B> {
  Empty(): B
  Single(a: A): B
  Cons(a: A, rest: View<A>): B
}

export const ListView = <A>(
  start: number,
  end: number,
  items: List<A>
): View<A> => {
  const self: View<A> = {
    at: (index: number) => items[start + index],
    forEach: (f: F2<A, number, void>): void => {
      for (let i = start; i <= end; i++) f(items[i], i - start)
    },
    foldLeft: <B>(f: F3<B, A, number, B>, zero: B): B => {
      let acc = zero

      for (let i = start; i <= end; i++) {
        const item = items[i]
        acc = f(acc, item, i - start)
      }
      return acc
    },
    length: end - start,
    slice: (newStart: number, newEnd: number): View<A> => {
      if (newStart <= end && newStart >= 0 && newEnd <= end && newEnd >= start)
        return ListView(start + newStart, start + newEnd, items)
      else throw new Error("new start and new end must ")
    },
    match: <B>(cases: ViewCases<A, B>): B =>
      self.length === 0
        ? cases.Empty()
        : self.length === 1
          ? cases.Single(self.at(0))
          : cases.Cons(self.at(0), self.slice(1, end))
  }
  return self
}
