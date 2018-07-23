export const group = (...fns) => arg =>
  fns.reduce((acc, f) => {
    return {
      ...acc,
      ...f(arg)
    }
  }, {})