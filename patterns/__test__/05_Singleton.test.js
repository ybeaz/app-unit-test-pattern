describe('Creational Patterns', () => {
  it('--  Pattern: Singleton	A class of which only a single instance can exist', () => {
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

  it('--  Pattern: Singleton II.	A class of which only a single instance can exist', () => {
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
      this.instance = {}
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
    const SingletonInst = new Singleton('MyClass')
    const c = SingletonInst.getInstance()
    const d = SingletonInst.getInstance()
    // console.info('Singleton', { a: a.obj(), 'a === b': a === b, c: c.obj(), 'c === d': c === d })

    expect(a === b).toBe(false)
    expect(c === d).toBe(true)
  })
})

// Singleton
// instance
// createInstance
// getInstance
