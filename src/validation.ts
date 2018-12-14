import { F1 } from "./function"
import { FormField, Valid, Invalid, Initial } from "./form"

export type Validation<E, A> = F1<A, FormField<E, A>>

export const Validation = {
  combine: <E, A>(
    ...validations: Validation<E, A>[]
  ): Validation<E, A> => value => {
    let i = 0
    const length = validations.length
    let current: FormField<E, A> = Valid(value)

    while (i < length) {
      current = FormField.match(validations[i](current.value), {
        Valid: _ => current,
        Invalid: (result, errors) =>
          FormField.match(current, {
            Valid: _ => Invalid(result, errors),
            Invalid: (_, errors2) => Invalid(result, [...errors, ...errors2]),
            Initial: _ => Invalid(result, errors)
          }),
        Initial: x => Initial(x)
      })
      i++
    }
    return current
  }
}
