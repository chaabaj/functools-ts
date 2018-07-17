import { Either, Right, Left } from "./either"

export type Result<A> = Either<Error, A>
export const Success = <A>(value: A): Result<A> => Right(value)
export const Failure = <A>(error: Error): Result<A> => Left(error)
