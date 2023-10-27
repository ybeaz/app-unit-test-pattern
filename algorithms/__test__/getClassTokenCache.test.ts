/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getClassTokenCache.test`
 */
describe('Algoritms', () => {
  it('-- ClassTokenCache', async () => {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

    class ClassTokenCache {
      collection: Record<string, any> = {}

      set(key: string, value: any, duration: number) {
        const timeNow = Date.now()
        if (this.collection[key]) return true
        this.collection[key] = { value, duration, timeNow }
        return false
      }

      get(key: string) {
        let output = -1
        if (!this.collection[key]) return output

        const { value, duration, timeNow } = this.collection[key]
        const timeNow2 = Date.now()

        if (timeNow + duration > timeNow2) output = value
        return output
      }

      count() {
        const timeNow2 = Date.now()
        const count = Object.keys(this.collection).filter(
          key =>
            this.collection[key].timeNow + this.collection[key].duration >
            timeNow2
        ).length
        return count
      }
    }

    const classTokenCache: any = new ClassTokenCache()

    const input = ['1', 42, 100]
    const res = classTokenCache.set.apply(classTokenCache, input)
    const res2 = classTokenCache.get('1')
    const res3 = classTokenCache.get('2')
    await sleep(1000)
    const res4 = classTokenCache.count()
    const output = [res, res2, res3, res4]
    const expected = [false, 42, -1, 0]
    console.info('getClassTokenCache.test [28]', { expected, output })

    expect(output).toEqual(expected)

    const input20 = ['2', 50, 1000]
    const res20 = classTokenCache.set.apply(classTokenCache, input20)
    const res21 = classTokenCache.set.apply(classTokenCache, input20)
    const res22 = classTokenCache.get('1')
    const res23 = classTokenCache.get('2')
    const res24 = classTokenCache.count()
    const output20 = [res20, res21, res22, res23, res24]
    const expected20 = [false, true, -1, 50, 1]

    expect(output20).toEqual(expected20)
  })

  it('-- getClassTokenCache', async () => {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

    const getClassTokenCache: any = function (this: any): any {
      this.collection = {}
    }

    getClassTokenCache.prototype.set = function (
      key: string,
      value: any,
      duration: number
    ) {
      const timeNow = Date.now()
      if (this.collection[key]) return true
      this.collection[key] = { value, duration, timeNow }
      return false
    }

    getClassTokenCache.prototype.get = function (key: string) {
      let output = -1
      if (!this.collection[key]) return output

      const { value, duration, timeNow } = this.collection[key]
      const timeNow2 = Date.now()

      if (timeNow + duration > timeNow2) output = value
      return output
    }

    getClassTokenCache.prototype.count = function () {
      const timeNow2 = Date.now()
      const count = Object.keys(this.collection).filter(
        key =>
          this.collection[key].timeNow + this.collection[key].duration >
          timeNow2
      ).length
      return count
    }

    const classTokenCache: any = new getClassTokenCache()

    const input = ['1', 42, 100]
    const res = classTokenCache.set.apply(classTokenCache, input)
    const res2 = classTokenCache.get('1')
    const res3 = classTokenCache.get('2')
    await sleep(1000)
    const res4 = classTokenCache.count()
    const output = [res, res2, res3, res4]
    const expected = [false, 42, -1, 0]
    console.info('getClassTokenCache.test [28]', { expected, output })

    expect(output).toEqual(expected)

    const input20 = ['2', 50, 1000]
    const res20 = classTokenCache.set.apply(classTokenCache, input20)
    const res21 = classTokenCache.set.apply(classTokenCache, input20)
    const res22 = classTokenCache.get('1')
    const res23 = classTokenCache.get('2')
    const res24 = classTokenCache.count()
    const output20 = [res20, res21, res22, res23, res24]
    const expected20 = [false, true, -1, 50, 1]

    expect(output20).toEqual(expected20)
  })
})
