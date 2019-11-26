const delay = async (millis: number) => new Promise(resolve => {
  return setTimeout(() => {
    return resolve()
  }, millis)
})

export {
  delay
}
