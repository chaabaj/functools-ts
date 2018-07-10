import { List, Filter } from "./types"
import { Option } from "./option"
import { F1, F2 } from "./function"

export interface View<A> {
  start: number
  end: number
  items: List<A>
}

export const View = {
  create: <A>(
    items: List<A>,
    start: number,
    end: number = items.length
  ): View<A> => ({
    start,
    end,
    items
  }),

  at: <A>(view: View<A>, index: number): Option<A> =>
    view.items[view.start + index],

  filter: <A>(view: View<A>, f: Filter<A>): List<A> => {
    let arr: A[] = []
    let length = view.end - view.start
    let start = view.start

    for (let i = start; i < length; i++) {
      const item = view.items[start + i]
      if (f(item)) arr.push(item)
    }
    return arr
  },

  forEach: <A>(view: View<A>, f: F1<A, void>): void => {
    let length = view.end - view.start
    let start = view.start

    for (let i = start; i < length; i++) f(view.items[start + i])
  },

  map: <A, B>(view: View<A>, f: F1<A, B>): List<B> => {
    let arr: B[] = []
    let length = view.end - view.start
    let start = view.start

    for (let i = start; i < length; i++) {
      const item = view.items[start + i]
      arr.push(f(item))
    }
    return arr
  },

  foldLeft: <A, B>(view: View<A>, f: F2<A, B, B>, zero: B): B => {
    let acc = zero
    let length = view.end - view.start
    let start = view.start

    for (let i = start; i < length; i++) {
      const item = view.items[start + i]
      acc = f(item, acc)
    }
    return acc
  }
}
