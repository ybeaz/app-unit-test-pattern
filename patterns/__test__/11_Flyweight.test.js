/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 11_Flyweight.test`
 */

describe('Structural Patterns', () => {
  it('-- Pattern: Flyweight  A fine-grained instance used for efficient sharing', () => {
    var FlyWeightFactory = (function () {
      var flyweights = {}

      return {
        get: function (make, model) {
          if (!flyweights[`${make}-${model}`]) {
            flyweights[`${make}-${model}`] = { make, model }
          }
          return flyweights[`${make}-${model}`]
        },

        getCount: function () {
          var count = 0
          for (var f in flyweights) count++
          return count
        },

        getFlyWeights() {
          return flyweights
        },
      }
    })()

    var Computer = function (make, model, processor, memory, tag) {
      this.make = FlyWeightFactory.get(make, model).make
      this.model = FlyWeightFactory.get(make, model).model
      this.processor = processor
      this.memory = memory
      this.tag = tag
      console.info('11_Flyweight.test [38]', this)
    }

    function ComputerCollection() {
      var computers = {}
      var count = 0

      return {
        add: function (make, model, processor, memory, tag) {
          computers[tag] = new Computer(make, model, processor, memory, tag)
          count++
        },

        get: function (tag) {
          return computers[tag]
        },

        getCount: function () {
          return count
        },

        getComputers() {
          return computers
        },
      }
    }

    function run() {
      var computers = new ComputerCollection()

      computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P')
      computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T')
      computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80')
      computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777')
      computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A')
      computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701')
      computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283')

      expect(FlyWeightFactory.getCount()).toBe(2)
      expect(computers.getCount()).toBe(7)
    }
    run()
  })
})

// Flyweight
// make, model, processor

// FlyWeightFactory
// flyweights
// get
// getCount

// ComputerCollection
// computers
// count
// add
// get

// Computer
// make, model, processor, memory, tag
