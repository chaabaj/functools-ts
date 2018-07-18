const defer = f => setTimeout(f, 0)

export const asyncGroup = (...tasks) => value =>
  Promise.all(tasks.map(task => new Promise(resolve => resolve(task(value)))))

export const asyncPipe = (...tasks) => {
  const _executeNext = (result, pos, future) => {
    if (pos >= tasks.length) future.resolve(result)
    else if (result && result.then)
      result
        .then(value => _executeNext(tasks[pos](value), pos + 1, future))
        .catch(future.reject)
    else
      defer(() => {
        try {
          _executeNext(tasks[pos](result), pos + 1, future)
        } catch (err) {
          future.reject(err)
        }
      })
  }
  return param =>
    new Promise((resolve, reject) =>
      _executeNext(tasks[0](param), 1, { resolve, reject })
    )
}
