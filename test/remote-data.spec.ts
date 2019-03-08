import { expect } from "chai"
import { describe, it } from "mocha"
import {
  Loaded,
  RemoteData,
  Pending,
  Failed,
  Unloaded
} from "../src/remote-data"
import { List } from "../src/list";

describe("remote data", () => {
  it("toString", () => {
    expect(RemoteData.toString(Loaded(42))).eq("Loaded(42)")
    expect(RemoteData.toString(Pending())).eq("Pending(undefined)")
    expect(RemoteData.toString(Failed(new Error("some msg")))).eq(
      "Failed(Error: some msg, undefined)"
    )
    expect(RemoteData.toString(Unloaded())).eq("Unloaded")
  })

  it("data", () => {
    expect(RemoteData.data(Loaded(42))).eq(42)
  })

  it("test map2", () => {
    expect(RemoteData.map2(Loaded(42), Loaded(42), (a, b) => [a, b])).eql(Loaded([42, 42]))
  })

  it("test map2 with the second failed", () => {
    expect(RemoteData.map2(Loaded(42), Failed("test"), (a, b) => [a, b])).eql(Failed("test"))
  })

  it("test if the first failed", () => {
    expect(RemoteData.map2(Failed("test"), Loaded(42), (a, b) => [a, b])).eql(Failed("test"))
  })

  it("getOrElse when failed", () => {
    expect(RemoteData.getOrElse(Failed("test"), () => 42)).eql(42)
  })

  it("getOrElse when loaded", () => {
    expect(RemoteData.getOrElse(Loaded(42), () => 43)).eql(42)
  })

  it("merge", () => {
    const rd1 = Loaded([1, 2])
    const rd2 = Loaded([3, 4])
    const rd3 = Pending([1, 2])
    const rd4 = Pending()
    const rd5 = Failed("test", [1, 2])
    const rd6 = Failed("failed")
    const concat = <A>(a: List<A>, b: List<A>) => a.concat(b)

    expect(RemoteData.merge(rd1, rd2, concat)).eql(Loaded([1, 2, 3, 4]))
    expect(RemoteData.merge(rd3, rd1, concat)).eql(Loaded([1, 2, 1, 2]))
    expect(RemoteData.merge(rd4, rd1, concat)).eql(Loaded([1, 2]))
    expect(RemoteData.merge(rd5, rd4, concat)).eql(Pending([1, 2]))
    expect(RemoteData.merge(rd6, rd1, concat)).eql(Loaded([1, 2]))
  })
})
