import { ListView } from "../src/view"
import { expect } from "chai"
import { describe, it } from "mocha"

describe("view", () => {
  it("create a view", () => {
    const view = ListView(1, 3, [1, 2, 3, 4, 5])
    expect(view.at(0)).eq(2)
  })

  it("fold a view", () => {
    const view = ListView(1, 3, [1, 2, 3, 4, 5])
    const res = view.foldLeft((acc, item) => acc + item, 0)
    expect(res).eq(9)
  })

  it("slice a view", () => {
    const view = ListView(1, 3, [1, 2, 3, 4, 5])
    const sliced = view.slice(1, 2)
    expect(sliced.length).eq(1)
  })

  it("match a single case", () => {
    const view = ListView(1, 2, [1, 2, 3, 4, 5])
    const res = view.match({
      Single: _ => 1,
      Empty: () => 2,
      Cons: (_, _1) => 3
    })
    expect(res).eq(1)
  })

  it("match a empty case", () => {
    const view = ListView(1, 1, [1, 2, 3, 4, 5])
    const res = view.match({
      Single: _ => 1,
      Empty: () => 2,
      Cons: (_, _1) => 3
    })
    expect(res).eq(2)
  })

  it("match a cons case", () => {
    const view = ListView(1, 3, [1, 2, 3, 4, 5])
    const res = view.match({
      Single: _ => 1,
      Empty: () => 2,
      Cons: (_, _1) => 3
    })
    expect(res).eq(3)
  })
})
