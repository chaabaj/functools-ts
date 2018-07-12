import { compose } from "../src/compose"
import { expect } from "chai"
import { describe, it } from "mocha"
import { List } from "../src/types"

describe("compose", () => {
  it("test compose", () => {
    const res = compose(
      (a: List<number>) => a.map(x => x * 2),
      a => a.reduce((acc, num) => acc + num, 0)
    )([1, 2, 3, 4])
    expect(res).eq(2 + 4 + 6 + 8)
  })
})
