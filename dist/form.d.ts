import { List } from "./list";
export declare enum FormFieldType {
    Valid = "Valid",
    Invalid = "Invalid"
}
export interface Valid<A> {
    type: FormFieldType.Valid;
    value: A;
}
export declare const Valid: <A>(value: A) => Valid<A>;
export interface Invalid<E, A> {
    type: FormFieldType.Invalid;
    value: A;
    errors: List<E>;
}
export declare const Invalid: <E, A>(value: A, errors: ReadonlyArray<E>) => Invalid<E, A>;
export declare type FormField<E, A> = Valid<A> | Invalid<E, A>;
interface FormFieldCases<E, A, B> {
    Valid(a: A): B;
    Invalid(a: A, error: List<E>): B;
}
export declare const FormField: {
    invalid: <E, A>(ff: FormField<E, A>) => ff is Invalid<E, A>;
    valid: <E, A>(ff: FormField<E, A>) => ff is Valid<A>;
    match: <E, A, B>(ff: FormField<E, A>, cases: FormFieldCases<E, A, B>) => B;
};
export {};
