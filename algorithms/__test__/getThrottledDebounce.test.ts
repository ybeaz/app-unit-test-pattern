/**
 * @Description Exploring algorithms
 * @link https://stackoverflow.com/a/59378445/4791116
 * @command to run `yarn jest getThrottled.test`
 */

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

describe('Algoritms', () => {
  it('-- 2023-10-25 getDebounce', async () => {
    const getThrottled = (callback: any, debounceframe: number) => {
      let debouncePrev = 0
      return function () {
        debouncePrev += 1
        if (debouncePrev === 0 || debouncePrev >= debounceframe) {
          debouncePrev = 0
          callback()
        }
      }
    }

    const debounceframe = 5
    let callsNumber = 0
    const series = Array(100).fill(true)

    const callback = () => {
      callsNumber += 1
    }

    const tests: any[] = [
      { isActive: true, input: [callback, debounceframe], expected: '' },
    ]

    const { isActive, input, expected } = tests[0]

    if (isActive) {
      const throttle = getThrottled.apply({}, input)

      const triesSeriesFn = async (series: boolean[]) => {
        try {
          for (let i in series) {
            await sleep(0)
            throttle()
          }
        } catch (e) {
          // handle rejections
        }
      }

      await triesSeriesFn(series)

      const output = {
        debounceframe,
        triesNumber: series.length,
        callsNumber,
      }

      // console.info('getThrottle.test [58]', {
      //   output,
      // })

      const expected = {
        debounceframe,
        triesNumber: 100,
        callsNumber: 20,
      }

      expect(output).toEqual(expected)
    }
  }, 4000)

  it('-- 2023-10-24 getThrottled', async () => {
    const getThrottled = (callback: any, timeframe: number) => {
      let timeFramePrev = Date.now()
      return function () {
        const timeNow = Date.now()
        const timeFrameDelta = timeNow - timeFramePrev
        if (timeFrameDelta >= timeframe) {
          timeFramePrev = timeNow
          callback()
        }
      }
    }

    const timeframe = 500
    let callsNumber = 0

    const callback = () => {
      callsNumber += 1
    }

    const tests: any[] = [
      { isActive: true, input: [callback, timeframe], expected: '' },
    ]

    const { isActive, input, expected } = tests[0]

    if (isActive) {
      const throttle = getThrottled.apply({}, input)

      const triesSeriesFn = async (series: boolean[]) => {
        try {
          for (let i in series) {
            await sleep(100)
            throttle()
          }
        } catch (e) {
          // handle rejections
        }
      }

      const series = Array(20).fill(true)
      await triesSeriesFn(series)

      // console.info('getThrottle.test [15]', {
      //   triesNumber: series.length,
      //   callsNumber,
      // })

      const output = {
        timeframe,
        triesNumber: series.length,
        callsNumber,
      }

      const expected = {
        timeframe,
        triesNumber: 20,
        callsNumber: 4,
      }

      expect(output).toEqual(expected)
    }
  }, 4000)

  it('-- 2023-10-19 getThrottled', async () => {
    const getThrottled = (callback: any, timeframe: number) => {
      let prevStart: number = 0

      return function () {
        const now: number = Date.now()
        // console.info('[37]', { prevStart, now, diff: now - prevStart })
        const diff = now - prevStart
        if (diff >= timeframe) {
          prevStart = now
          callback(diff, prevStart)
        }
      }
    }

    const timeframe = 500
    let callsNumber = 0

    const callback = () => {
      callsNumber += 1
    }

    const tests: any[] = [
      { isActive: true, input: [callback, timeframe], expected: '' },
    ]

    const { isActive, input, expected } = tests[0]

    if (isActive) {
      const throttle = getThrottled.apply({}, input)

      const triesSeriesFn = async (series: boolean[]) => {
        try {
          for (let i in series) {
            await sleep(100)
            throttle()
          }
        } catch (e) {
          // handle rejections
        }
      }

      const series = Array(20).fill(true)
      await triesSeriesFn(series)

      // console.info('getThrottle.test [15]', {
      //   triesNumber: series.length,
      //   callsNumber,
      // })

      const output = {
        timeframe,
        triesNumber: series.length,
        callsNumber,
      }

      const expected = {
        timeframe,
        triesNumber: 20,
        callsNumber: 4,
      }

      expect(output).toEqual(expected)
    }
  }, 4000)
})
