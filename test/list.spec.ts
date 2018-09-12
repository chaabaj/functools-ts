import { List } from "../src/list";
import { expect } from "chai"

describe("list", () => {
  const items = [
    {
      name: "test",
      description: "test2"
    },
    {
      name: "test3",
      description: "test2"
    },
    {
      name: "test2",
      description: "test2"
    }
  ]

  it("should get a value", () => {
    const firstItem = List.get(items, {name: "test"})
    expect(firstItem).to.eql(items[0])
  })
})