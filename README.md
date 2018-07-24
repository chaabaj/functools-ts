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





