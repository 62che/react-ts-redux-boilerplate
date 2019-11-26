const delay = async millis => new Promise(resolve => {
  return setTimeout(() => {
    return resolve()
  }, millis)
})

export {
  delay
}
