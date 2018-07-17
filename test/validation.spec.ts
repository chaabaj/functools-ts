import { Validation } from "../src/validation"
import { expect } from "chai"
import { describe, it } from "mocha"
import { Valid, Invalid } from "../src/form"

describe("validation", () => {
  it("validate", () => {
    const validation = Validation.combine(
      (a: number) => Valid(a),
      a => (a > 5 ? Valid(a) : Invalid(a, ["must be greater than 5"]))
    )
    expect(validation(4)).eql(Invalid(4, ["must be greater than 5"]))
  })
})
