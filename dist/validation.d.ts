import { F1 } from "./function";
import { FormField } from "./form";
export declare type Validation<E, A> = F1<A, FormField<E, A>>;
export declare const Validation: {
    combine: <E, A>(...validations: F1<A, FormField<E, A>>[]) => F1<A, FormField<E, A>>;
};
