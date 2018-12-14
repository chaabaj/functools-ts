import { List } from "./list";
export declare enum FormFieldType {
    Valid = "Valid",
    Invalid = "Invalid",
    Initial = "Initial"
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
export interface Initial<A> {
    type: FormFieldType.Initial;
    value: A;
}
export declare const Initial: <A>(value: A) => Initial<A>;
export declare type FormField<E, A> = Valid<A> | Invalid<E, A> | Initial<A>;
interface FormFieldCases<E, A, B> {
    Valid(a: A): B;
    Invalid(a: A, error: List<E>): B;
    Initial(a: A): B;
}
export declare const FormField: {
    invalid: <E, A>(ff: FormField<E, A>) => ff is Invalid<E, A>;
    valid: <E, A>(ff: FormField<E, A>) => ff is Valid<A>;
    initial: <E, A>(ff: FormField<E, A>) => ff is Initial<A>;
    match: <E, A, B>(ff: FormField<E, A>, cases: FormFieldCases<E, A, B>) => B;
    isValidForm: (...fields: FormField<any, any>[]) => boolean;
};
export {};
