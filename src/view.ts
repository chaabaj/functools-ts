import { List } from "./types"
import { Option } from "./option"
import { F1, F2 } from "./function"

export interface View<A> {
  start: number
  end: number
  at(index: number): Option<A>
  forEach(f: F1<A, void>): void
  foldLeft<B>(f: F2<A, B, B>, zero: B): B
}

export const ListView = <A>(
  start: number,
  end: number,
  items: List<A>
): View<A> => {
  const self = {
    start,
    end,
    at: (index: number) => (start + index >= end ? null : items[start + index]),
    forEach: (f: F1<A, void>): void => {
      let length = self.end - self.start

      for (let i = start; i < length; i++) f(items[start + i])
    },
    foldLeft: <B>(f: F2<A, B, B>, zero: B): B => {
      let acc = zero
      let length = self.end - self.start
      let start = self.start

      for (let i = start; i < length; i++) {
        const item = items[start + i]
        acc = f(item, acc)
      }
      return acc
    }
  }
  return self
}
