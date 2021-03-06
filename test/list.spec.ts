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
      description: "test3"
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

  it("should remove an item", () => {
    const firstItem = items[0]
    expect(List.remove(items, firstItem)).to.eql(items.slice(1))
  })

  it("should not remove if not found", () => {
    expect(List.remove(items, null)).to.eql(items)
  })

  it("should be true if two list are equals", () => {
    expect(List.equals(items, items)).to.eq(true)
  })

  it("should return false if two list are not equals", () => {
    const list2 = List.set(items, {name: "test2"}, {name: "test2", description: "toto"})
    expect(List.equals(items, items.slice(1))).to.eq(false)
    expect(List.equals(items, list2)).to.eq(false)
  })

  it("should move item from index 2 to index 1", () => {
    const moved = List.setAndMove(items[1], 1, 2)(items)
    expect(moved[2]).to.eql(items[1])
  })

  it("should move the first element to the end", () => {
    const moved = List.setAndMove(items[0], 0, 2)(items)
    expect(moved[2]).to.eql(items[0])
  })
})