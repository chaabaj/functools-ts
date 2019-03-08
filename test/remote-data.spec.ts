import { expect } from "chai"
import { describe, it } from "mocha"
import {
  Loaded,
  RemoteData,
  Pending,
  Failed,
  Unloaded
} from "../src/remote-data"

describe("remote data", () => {
  it("toString", () => {
    expect(RemoteData.toString(Loaded(42))).eq("Loaded(42)")
    expect(RemoteData.toString(Pending())).eq("Pending")
    expect(RemoteData.toString(Failed(new Error("some msg")))).eq(
      "Failed(Error: some msg)"
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
})
