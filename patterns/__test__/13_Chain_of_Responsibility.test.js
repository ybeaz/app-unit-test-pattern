describe('Behavioral Patterns', () => {
  it('-- Pattern: Chain of Resp II.	A way of passing a request between a chain of objects', () => {
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
