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
})

// Singleton
// instance
// createInstance
// getInstance
