import { Validation } from "../src/validation"
import { expect } from "chai"
import { describe, it } from "mocha"
import { Either } from "../src/either"

describe("validation", () => {
  it("validate", () => {
    const res = Validation.validate(
      "0123456789",
      s => (s.localeCompare("0123456789") ? null : new Error("Invalid"))
    )
    expect(Either.isLeft(res)).eq(true)
  })
})
