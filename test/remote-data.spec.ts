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
})
