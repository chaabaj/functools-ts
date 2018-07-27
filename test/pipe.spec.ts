import { pipe } from "../src/pipe"
import { expect } from "chai"
import { describe, it } from "mocha"

describe("pipe", () => {
  it("test pipe", () => {
    const res = pipe(
      [1, 2, 3, 4],
      a => a.map(x => x * 2),
      a => a.reduce((acc, num) => acc + num, 0),
    )
    expect(res).eq(2 + 4 + 6 + 8)
  })
})
