export const testLogger = function (type) {
  let log

  if (type && type === 'obj') log = {}
  else if (type && type === 'arr') log = []
  else log = null

  const obj = {}
  const arr = []
  return {
    add(arg) {
      if (type && type === 'obj') log = { ...log, arg }
      else if (type && type === 'arr') log = [...log, arg]
      else log = null
    },
    show() {
      return log
    },
  }
}
