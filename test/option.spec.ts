import { Option } from "../src/option"
import { expect } from "chai"
import { describe, it } from "mocha"

describe("option", () => {
  it("map", () => {
    const res = Option.map(5, n => n + 1)
    expect(res).eq(6)
  })

  it("getOrElse", () => {
    const res = Option.getOrElse(null, () => 5)
    expect(res).eq(5)
  })

  it("isDefined", () => {
    expect(Option.isDefined(5)).eq(true)
    expect(Option.isDefined(null)).eq(false)
  })

  it("isEmpty", () => {
    expect(Option.isEmpty(null)).eq(true)
    expect(Option.isEmpty(5)).eq(false)
  })

  it("sequence", () => {
    expect(Option.sequence([1, 2, null, 4])).eq(null)
    expect(Option.sequence([1, 2, 3, 4, 5])).eql([1, 2, 3, 4, 5])
  })
})
