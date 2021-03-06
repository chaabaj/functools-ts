import { F1 } from "./function"
import { Option } from "./option"

export type List<A> = ReadonlyArray<A>

type Selector<T> =
  | Partial<T>
  | number
  | ((item: T, index: number, list: List<T>) => boolean)

const match = <T>(
  selector: Selector<T>,
  item: T,
  index: number,
  list: List<T>
): boolean =>
  typeof selector === "number"
    ? selector === index
    : typeof selector === "function"
      ? selector(item, index, list)
      : propsMatch(item, selector)

const propsMatch = <U, T extends U>(record: T, partial: U) => {
  for (const key in partial) {
    if (partial[key] !== record[key]) {
      return false
    }
  }
  return true
}

const getNewValue = <T>(newValue: T | ((oldValue: T) => T), oldValue: T) =>
  typeof newValue === "function" ? (newValue as any)(oldValue) : newValue

interface ListCases<A, B> {
  Single(a: A): B
  Cons(a: A, rest: List<A>): B
  Empty(): B
}

export const List = {
  set: <A>(list: List<A>, where: Selector<A>, value: A | F1<A, A>): List<A> =>
    list.map(
      (item, i) =>
        match(where, item, i, list) ? getNewValue(value, item) : item
    ),

  get: <A>(list: List<A>, where: Selector<A>): Option<A> =>
    list.find((item, i) => match(where, item, i, list)),

  contains: <A>(list: List<A>, item: A): boolean =>
    list.find(x => x === item) ? true : false,

  match: <A, B>(list: List<A>, cases: ListCases<A, B>): B =>
    list.length === 0
      ? cases.Empty()
      : list.length === 1
        ? cases.Single(list[0])
        : cases.Cons(list[0], list.slice(1)),

  isList: <A>(maybeList: any): maybeList is List<A> => Array.isArray(maybeList),
  remove: <A>(list: List<A>, itemToRemove: A): List<A> =>
    list.filter(item => item !== itemToRemove),
  equals: <A>(list1: List<A>, list2: List<A>, eq?: (a: A, b: A) => boolean): boolean => {
    if (list1.length !== list2.length)
      return false
    else {
      for (let i = 0; i < list1.length; ++i) {
        const elem1 = list1[i]
        const elem2 = list2[i]
        if (Option.isDefined(eq) && !eq(elem1, elem2))
          return false
        else if (Option.isEmpty(eq) && elem1 !== elem2)
          return false
        else
          continue
      }
      return true
    }
  },
  setAndMove: <A>(a: A, where: Selector<A>, newIdx: number) => (list: List<A>): List<A> => {
    const list_ = list.filter(
      (item, idx) => !match(where, item, idx, list)
    )
    list_.splice(newIdx, 0, a)
    return list_ 
  }
}
