import { expect } from "chai"
import { describe, it } from "mocha"
import { asyncPipe, asyncGroup } from "../src/async-pipe"
import { List } from "../src/list"

describe("async pipe", () => {
  it("test async pipe", () => {
    const f = asyncPipe(
      (x: number) => x + 42,
      x => new Promise<number>(resolve => resolve(x)),
      x => x + 4,
      x => x + 4
    )
    f(4).then(res => expect(res).eq(42 + 4 + 4 + 4))
  })

  it("test async group", () => {
    const f = asyncGroup(
      (x: List<number>) => x.filter(x => x % 2 === 0),
      x => x.filter(x => x % 2 > 0),
      x => x.reduce((acc, n) => acc + n, 0)
    )

    f([1, 2, 3, 4]).then(([a, b, c]) => {
      expect(a).eql([2, 4])
      expect(b).eql([1, 3])
      expect(c).eq(10)
    })
  })

  it("mix async pipe and async group", () => {
    const f = asyncPipe(
      asyncGroup(
        (x: List<number>) => x.join(","),
        x => x.slice(2)
      ),
      asyncGroup(
        ([a, _]) => a.repeat(2),
        ([_, b]) => b.reduce((acc, n) => acc + n, 0)
      ),
      ([a, b]) => a + b
    )
    f([1, 2, 3, 4]).then(res => {
      expect(res).eq("1,2,3,41,2,3,47")
    })
  })
})
