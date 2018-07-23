import { expect } from "chai"
import { describe, it } from "mocha"
import { group } from "../src/group";

type A = {x: number}
type B = {y: number}
type C = {o: number}



describe("group", () => {
  it("test compose", () => {
    const f = group(
      (_: A) => ({width: 52}),
      (_: B) => ({height: 52}),
      (_: A) => ({test: ""}),
      (_: C) => ({toto: ""})
    )
    const res = f({x: 42, y: 56, o: 42})
    expect(res).eql({
      width: 52,
      height: 52,
      test: "",
      toto: ""
    })
  })
})
