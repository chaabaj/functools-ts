import { List } from "./types"

export enum FormFieldType {
  Valid = "Valid",
  Invalid = "Invalid"
}

export interface Valid<A> {
  type: FormFieldType.Valid
  value: A
}
export const Valid = <A>(value: A): Valid<A> => ({
  type: FormFieldType.Valid,
  value
})

export interface Invalid<E, A> {
  type: FormFieldType.Invalid
  value: A
  errors: List<E>
}
export const Invalid = <E, A>(value: A, errors: List<E>): Invalid<E, A> => ({
  type: FormFieldType.Invalid,
  value,
  errors
})

export type FormField<E, A> = Valid<A> | Invalid<E, A>

interface FormFieldCases<E, A, B> {
  Valid(a: A): B
  Invalid(a: A, error: List<E>): B
}

export const FormField = {
  invalid: <E, A>(ff: FormField<E, A>): ff is Invalid<E, A> =>
    ff.type === FormFieldType.Invalid,

  valid: <E, A>(ff: FormField<E, A>): ff is Valid<A> =>
    ff.type === FormFieldType.Valid,

  match: <E, A, B>(ff: FormField<E, A>, cases: FormFieldCases<E, A, B>): B => {
    switch (ff.type) {
      case FormFieldType.Valid:
        return cases.Valid(ff.value)
      case FormFieldType.Invalid:
        return cases.Invalid(ff.value, ff.errors)
    }
  }
}
