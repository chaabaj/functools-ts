import { List } from "./list";
export declare enum FormFieldType {
    Valid = "Valid",
    Invalid = "Invalid",
    Untouched = "Untouched"
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
export declare const Invalid: <E, A>(value: A, errors: List<E>) => Invalid<E, A>;
export interface Initial<A> {
    type: FormFieldType.Untouched;
    value: A;
}
export declare const Untouched: <A>(value: A) => Initial<A>;
export declare type FormField<E, A> = Valid<A> | Invalid<E, A> | Initial<A>;
interface FormFieldCases<E, A, B> {
    Valid(a: A): B;
    Invalid(a: A, error: List<E>): B;
    Untouched(a: A): B;
}
export declare const FormField: {
    invalid: <E, A>(ff: FormField<E, A>) => ff is Invalid<E, A>;
    valid: <E_1, A_1>(ff: FormField<E_1, A_1>) => ff is Valid<A_1>;
    untouched: <E_2, A_2>(ff: FormField<E_2, A_2>) => ff is Initial<A_2>;
    match: <E_3, A_3, B>(ff: FormField<E_3, A_3>, cases: FormFieldCases<E_3, A_3, B>) => B;
    isValidForm: (...fields: FormField<any, any>[]) => boolean;
};
export {};
