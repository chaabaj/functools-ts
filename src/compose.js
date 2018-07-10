export const compose = (...fns) => a =>
  fns.slice(1).reduce((next, fn) => fn(next), fns[0](a));
