/**
 * @description Pattern: Iterator  Sequentially access the elements of a collection
 * @narrative
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 16_Iterator.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Iterator  Sequentially access the elements of a collection', () => {
    function Iterator(items) {
      this.items = items
    }

    Iterator.prototype = {
      index: 0,
      first: function () {
        this.reset()
        return this.next()
      },
      next() {
        return this.items[this.index++]
      },
      hasNext() {
        return this.index <= this.items.length
      },
      reset() {
        this.index = 0
      },
      each(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
          callback(item)
        }
      },
    }

    const items = ['one', 2, 'circle', true, 'Applepie']

    let str = ''
    const callback = function (item) {
      str += `-${item}`
    }

    const iterator = new Iterator(items)
    iterator.each(callback)

    expect(str).toBe('-one-2-circle-true-Applepie')
  })
})

// Iterator
// index
// items

// Iterator
// first
// next
// hasNext
// reset
// each
