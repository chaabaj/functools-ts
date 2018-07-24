# functools-ts

## Motivation

I wrote this library to provide basics construction for writing code in functional style in Typescript.
This library doesn't intend to replace other library like lodash but a separate toolbox which you can use with.

## Samples

### Using pipe

Allow to pipe multiple operation on data

```typescript
import { pipe, Right, Either } from "functools-ts"

pipe(
  Right(42),
  a => Either.map(a, x => x + 2),
  a => Either.map(a, x => x + 4)
)
```

### Compose

```typescript
import { compose } from "functools-ts"

const f = compose(
  (a: List<number>) => a.map(x => x * 2),
  a => a.reduce((acc, num) => acc + num, 0)
)
f([1, 2, 3, 4]) // 20
```

### Option

```typescript
import { Option } from "functools-ts"

Option.map(null, n => n + 1) // null
Option.map(5, n => n + 1) // 6
Option.sequence([1, 2, 3, null, 4]) // null
Option.sequence([1, 2, 3, 4]) // [1, 2, 3, 4]
```

### Remote data

An useful data structure to represent data that need to be fetch

Here the definition
```typescript
type RemoteData = Unloaded | Pending | Failed<E> | Loaded<A>
```

I provide basic pattern matching on it like

```typescript
import {Loaded, RemoteData} from "functools-ts"

const rd = Loaded(42)
RemoteData.match(rd, {
  Loaded: x => `Loaded(${x})`,
  Pending: () => "Pending",
  Failed: error => `Failed(${error.toString()})`,
  Unloaded: () => "Unloaded"
})
```

### Form field

Data structure to represent data with validation

```typescript
type FormField<E, A> = Valid<A> | Invalid<E, A>
```

```typescript
import { FormField, Validation } from "functools-ts"

const field: FormField<string, number> = Valid(42)

FormField.match(field, {
  Valid: x => console.log(x),
  Invalid (x, errors) => console.log(errors)
})

// Let's use Validation

const validateNumber = Validation.combine<string, number>(
  x => x > 5 ? Valid(x) : Invalid(x, ["must be greater than 5"]),
  x => x % 2 === 0 ? Valid(x) : Invalid(x, ["must be divisible by 2"])
)

validateNumber(5) // Invalid(5, ["must be divisible by 2"])
validateNumber(3) // Invalid(3, ["must be greater than 5", "must be divisible by 2"])
validateNumber(6) // Valid(6)

```

### View (experimental)

Allow to view a range of the array

```typescript
const v = ListView(0, 2, [1, 2, 3, 4, 5])
v.at(0) // 2
v.foldLeft((acc, item) => acc + item, 0)
```

### Async pipe

Write pipe allowing asynchronous function 

```typescript
const f = asyncPipe(
  (x: number) => x + 42,
  x => new Promise<number>(resolve => resolve(x)),
  x => x + 4,
  x => x + 4
)
f(4) // Promise<number>
f(4).then(console.log) // 58
```

with async group (parallel operations)
```typescript
const f = asyncPipe(
  asyncGroup((x: List<number>) => x.join(","), x => x.slice(2)),
  asyncGroup(
    ([a, _]) => a.repeat(2),
    ([_, b]) => b.reduce((acc, n) => acc + n, 0)
  ),
  ([a, b]) => a + b
)

f([1, 2, 3, 4]).then(console.log) // "1,2,3,41,2,3,47"
```

