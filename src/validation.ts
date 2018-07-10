import { F1 } from "./function"
import { Option } from "./option"
import { Left, Right, Either } from "./either"

export type Validation<E, A> = F1<A, Option<E>>

export const Validation = {
  validate: <A, E>(value: A, f: Validation<E, A>): Either<E, A> => {
    const res = f(value)
    return Option.isDefined(res) ? Left(res) : Right(value)
  }
}
