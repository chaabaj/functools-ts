import { Either } from "./either";
export declare type Result<A> = Either<Error, A>;
export declare const Success: <A>(value: A) => Either<Error, A>;
export declare const Failure: <A>(error: Error) => Either<Error, A>;
