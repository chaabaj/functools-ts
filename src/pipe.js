export const pipe = (a, ...fns) =>
  fns.slice(1).reduce((next, fn) => fn(next), fns[0](a))
