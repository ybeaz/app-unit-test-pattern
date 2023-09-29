/**
 * @description Pattern: Chain of Responsibility.	A way of passing a request between a chain of objects
 * @narrative
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 13_Chain_of_Responsibility.test`
 */

describe('Behavioral Patterns', () => {
  it('-- 2022-01-19 Pattern: Chain of Resp III.	A way of passing a request between a chain of objects', () => {
    const calculator = (initValue = 0) => {
      let res2 = initValue

      const output2 = {
        add(y) {
          res2 = res2 + y
          return output2
        },
        substitute(y) {
          res2 = res2 - y
          return output2
        },
        multiply(y) {
          res2 = res2 * y
          return output2
        },
        divide(y) {
          res2 = res2 / y
          return output2
        },
        exec(func) {
          res2 = func(res2)
          return output2
        },
        done() {
          return res2
        },
      }

      return output2
    }

    const outputed = calculator(5)
      .add(9)
      .substitute(7)
      .multiply(4)
      .divide(2)
      .exec(x => 3 * x)
      .done()

    const expected = 42

    // console.info('13_Chain_of_Responsibility.test [38]', { output })
    expect(outputed).toBe(expected)
  })

  it('-- Pattern: Chain of Resp II.	A way of passing a request between a chain of objects 2021-06-01', () => {
    const chain = arg => {
      const obj = {
        res: arg,
        add(...args) {
          this.res += args.reduce((prev, item, i, arr) => {
            return prev + item
          })
          return this
        },
        substitute(sub) {
          this.res = sub
          return this
        },
        exec(f) {
          this.res = f(this.res)
          return this
        },
        done() {
          return this.res
        },
      }

      return obj
    }

    expect(
      chain(5)
        .add(2, 4)
        .substitute(7)
        .exec(x => 3 * x)
        .done()
    ).toBe(21)
  })

  it('-- Pattern: Chain of Resp.	A way of passing a request between a chain of objects', () => {
    function Request(amount) {
      this.amount = amount
      this.tmp = amount
      this.output = []
      // console.info(`Requested $${amount}`)
    }
    Request.prototype = {
      reqBills(bill) {
        const count = Math.floor(this.tmp / bill)
        this.tmp -= bill * count

        this.output = [...this.output, { bill, count }]
        // console.info(`despence ${count} of ${bill}`)
        return this
      },
      res() {
        return this.output
      },
    }

    const request = new Request(1089)
    request
      .reqBills(100)
      .reqBills(50)
      .reqBills(20)
      .reqBills(10)
      .reqBills(5)
      .reqBills(2)
      .reqBills(1)

    // console.info('[10]', { 'request.res': request.res() })

    const expected = [
      { bill: 100, count: 10 },
      { bill: 50, count: 1 },
      { bill: 20, count: 1 },
      { bill: 10, count: 1 },
      { bill: 5, count: 1 },
      { bill: 2, count: 2 },
      { bill: 1, count: 0 },
    ]
    expect(request.res()).toEqual(expected)
  })
})

// Request
// amount

// Request
// get
// bill
// count
