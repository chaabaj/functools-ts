import { List } from "./list"

export enum FormFieldType {
  Valid = "Valid",
  Invalid = "Invalid",
  Initial = "Initial"
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

export interface Initial<A> {
  type: FormFieldType.Initial,
  value: A
}
export const Initial = <A>(value: A): Initial<A> => ({
  type: FormFieldType.Initial,
  value
}) 

export type FormField<E, A> = Valid<A> | Invalid<E, A> | Initial<A>

interface FormFieldCases<E, A, B> {
  Valid(a: A): B
  Invalid(a: A, error: List<E>): B
  Initial(a: A): B
}

export const FormField = {
  invalid: <E, A>(ff: FormField<E, A>): ff is Invalid<E, A> =>
    ff.type === FormFieldType.Invalid,

  valid: <E, A>(ff: FormField<E, A>): ff is Valid<A> =>
    ff.type === FormFieldType.Valid,

  initial: <E, A>(ff: FormField<E, A>): ff is Initial<A> =>
    ff.type === FormFieldType.Initial,

  match: <E, A, B>(ff: FormField<E, A>, cases: FormFieldCases<E, A, B>): B => {
    switch (ff.type) {
      case FormFieldType.Valid:
        return cases.Valid(ff.value)
      case FormFieldType.Invalid:
        return cases.Invalid(ff.value, ff.errors)
      case FormFieldType.Initial:
        return cases.Initial(ff.value)
    }
  }
}
