import { F1 } from "./function";
import { Option } from "./option";
import { Either } from "./either";
export declare type Validation<E, A> = F1<A, Option<E>>;
export declare const Validation: {
    validate: <A, E>(value: A, f: F1<A, Option<E>>) => Either<E, A>;
};
