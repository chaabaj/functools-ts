import { Left, Right, Either } from "../src/either"
import { expect } from "chai"
import { describe, it } from "mocha"
import { pipe } from "../src/pipe"
import { List } from "../src/list"

describe("either", () => {
  it("is right", () => {
    const res = Right(42)
    expect(Either.isRight(res)).eq(true)
  })

  it("is left", () => {
    const res = Left(new Error(""))
    expect(Either.isLeft(res)).eq(true)
  })

  it("map", () => {
    const res = Right(32)
    expect(
      pipe(
        res,
        e => Either.map(e, n => n + 1),
        e =>
          Either.map(e, n => {
            expect(n).eq(33)
            return n
          })
      )
    )
  })

  it("recover", () => {
    const res = Left(new Error("error"))
    expect(
      pipe(
        res,
        e =>
          Either.recover(e, err => {
            expect(err.message).eq("error")
            return Right(42)
          }),
        e =>
          Either.map(e, n => {
            expect(n).eq(42)
            return n
          })
      )
    )
  })

  it("getOrElse", () => {
    const res = Left(new Error("toto"))
    const n = Either.getOrElse(res, () => 42)
    expect(n).eq(42)
  })

  it("getOrElse doesn't throw", () => {
    const res = Right(42)
    Either.getOrElse(res, () => {
      throw new Error("toto")
    })
  })

  it("sequence", () => {
    const res = [
      Right<Error, number>(42),
      Right<Error, number>(45),
      Right<Error, number>(43)
    ]
    const a = Either.sequence(res)
    Either.forEach(a, arr => {
      expect(arr).eql([42, 45, 43])
    })
  }),
    it("sequence with error", () => {
      const res = [
        Right<Error, number>(42),
        Left<Error, number>(new Error("error")),
        Right<Error, number>(43)
      ]
      const a = Either.sequence(res)
      Either.recover(a, err => {
        return Left<Error, List<number>>(err)
      })
    })

  it("toString", () => {
    const res = Right(42)
    const res2 = Left(new Error("error"))
    expect(Either.toString(res)).eq("Right(42)")
    expect(Either.toString(res2)).eq("Left(Error: error)")
  })
})
