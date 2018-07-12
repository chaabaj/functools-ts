import { List } from "./types"
import { Option } from "./option"
import { F2, F3 } from "./function"

export interface View<A> {
  start: number
  end: number
  at(index: number): Option<A>
  forEach(f: F2<A, number, void>): void
  foldLeft<B>(f: F3<B, A, number, B>, zero: B): B
}

export const ListView = <A>(
  start: number,
  end: number,
  items: List<A>
): View<A> => {
  const self = {
    start,
    end,
    at: (index: number) =>
      self.start + index >= end ? null : items[self.start + index],
    forEach: (f: F2<A, number, void>): void => {
      for (let i = self.start; i <= self.end; i++) f(items[i], i - self.start)
    },
    foldLeft: <B>(f: F3<B, A, number, B>, zero: B): B => {
      let acc = zero

      for (let i = self.start; i <= self.end; i++) {
        const item = items[i]
        acc = f(acc, item, i - self.start)
      }
      return acc
    }
  }
  return self
}
