const loggerMiddleware = store => next => action => {
  console.log('before', store.getState())
  console.log(action)

  const result = next(action)

  console.log('after', store.getState())
  console.log(result)

  return result
}

export default loggerMiddleware
