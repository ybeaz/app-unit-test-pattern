/**
 * @description The Singleton Pattern limits the number of instances of a particular object to just one.
 * @link https://www.dofactory.com/javascript/design-patterns/singleton
 * @test yarn jest patterns/__test__/05_Singleton.test.js
 */

// Singleton
// instance
// createInstance
// getInstance

describe('Creational Patterns, Singleton', () => {
  it('--  2023-09-27 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (func, args) {
      this.instance = undefined
      this.getInstance = () => {
        if (!this.instance) this.instance = func(args)
        return this.instance
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = new Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()
    console.info('05_Singleton.test [35]', { c, d })

    expect(a === b).toBe(false)
    expect(
      c === d &&
        c !== undefined &&
        d !== undefined &&
        c.toString() === d.toString()
    ).toBe(true)
  })

  it('--  2023-04-07 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (func, value) {
      let instance = undefined

      return {
        getInstance() {
          if (!instance) instance = func(value)
          return instance
        },
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()

    expect(a === b).toBe(false)
    expect(
      c === d &&
        c !== undefined &&
        d !== undefined &&
        c.toString() === d.toString()
    ).toBe(true)
  })

  it('--  2021-12-25-2 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    class CalcClass {
      mult(x, y) {
        return x * y
      }
    }

    const classCollection = {
      CalcClass,
    }

    const Singleton = function () {
      let instance = Object.keys(classCollection).reduce(
        (reducer, item, i) => ({ ...reducer, [item]: undefined }),
        {}
      )

      return {
        getInstance(className) {
          return (
            instance[className]
              ? instance[className]
              : (instance[className] = new classCollection[className]()),
            instance[className]
          )
        },
      }
    }

    const a = new classCollection['CalcClass']()
    const b = new classCollection['CalcClass']()
    const s = Singleton()
    const c = s.getInstance('CalcClass')
    const d = s.getInstance('CalcClass')

    expect(a === b).toBe(false)
    expect(
      c === d &&
        c !== undefined &&
        d !== undefined &&
        c.toString() === d.toString()
    ).toBe(true)
  })

  it('--  2021-12-25 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (Func, x2) {
      let instance

      const createInstance = function () {
        instance = Func(x2)
        return instance
      }

      return {
        getInstance() {
          if (!instance) instance = createInstance()
          return instance
        },
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()

    expect(a === b).toBe(false)
    expect(
      c === d &&
        c !== undefined &&
        d !== undefined &&
        c.toString() === d.toString()
    ).toBe(true)
  })

  it('--  2021-02-01 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    class MyClass {
      obj() {
        return {}
      }
    }

    const classesMap = {
      MyClass,
    }

    // eslint-disable-next-line func-names
    const Singleton = function () {
      this.instance = undefined
    }

    // eslint-disable-next-line func-names
    Singleton.prototype.getInstance = function (className) {
      if (!this.instance) {
        this.instance = new classesMap[className]()
      }
      return this.instance
    }

    const a = new MyClass()
    const b = new MyClass()
    const SingletonInst = new Singleton()
    const c = SingletonInst.getInstance('MyClass')
    const d = SingletonInst.getInstance('MyClass')
    // console.info('Singleton', { a: a.obj(), 'a === b': a === b, c: c.obj(), 'c === d': c === d })

    expect(a === b).toBe(false)
    expect(
      c === d &&
        c !== undefined &&
        d !== undefined &&
        c.toString() === d.toString()
    ).toBe(true)
  })

  it('--  2020-11-01 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    function Calculation() {
      return (x, y) => ({ sum: x + y, mult: x * y, div: x / y })
    }

    function Singleton(func) {
      this.instance = null

      this.createInstance = func

      this.getInstance = function () {
        if (this.instance === null) {
          this.instance = this.createInstance()
        }
        return this.instance
      }
    }

    const singleton = new Singleton(Calculation)
    const calc = singleton.getInstance()

    const expected = singleton.getInstance()
    expect(calc).toBe(expected)
    expect(calc(3, 2).sum).toBe(5)
    expect(calc(7, 2).mult).toBe(14)
    expect(calc(9, 4).div).toBe(2.25)
  })
})
