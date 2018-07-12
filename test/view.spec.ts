import { ListView } from "../src/view"
import { expect } from "chai"
import { describe, it } from "mocha"

describe("view", () => {
  it("create a view", () => {
    const view = ListView(1, 3, [1, 2, 3, 4, 5])
    expect(view.at(0)).eq(2)
  })
})
