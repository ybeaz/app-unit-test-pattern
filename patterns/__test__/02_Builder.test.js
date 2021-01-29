describe('Creational Patterns', () => {
  it('--  Pattern: Builder  Separates object construction from its representation', () => {
    function Car() {
      this.carType = 'car'
      this.addParts = function () {
        this.doors = 4
      }
      this.getVehicle = function () {
        return this
      }
    }

    function Truck() {
      this.carType = 'truck'
      this.addParts = function () {
        this.doors = 2
        this.body = '12 m3'
      }
      this.getVehicle = function () {
        return this
      }
    }

    function Builder(Vehicle) {
      this.vehicle = {}
      this.step1 = function () {
        this.vehicle = new Vehicle()
      }
      this.step2 = function () {
        this.vehicle.addParts()
      }
      this.step3 = function () {
        return this.vehicle.getVehicle()
      }
    }

    function shop(Builder) {
      return function (Vehicle) {
        let self = {}
        const builder = new Builder(Vehicle)
        // console.info('[7]', { self, builder })
        builder.step1()
        builder.step2()
        self = builder.step3()
        return self
      }
    }

    const {
      addParts: addPartsCarFn,
      getVehicle: getVehicleCarFn,
      ...car
    } = shop(Builder)(Car)
    let expected = { carType: 'car', doors: 4 }
    expect(car).toEqual(expected)

    const {
      addParts: addPartsTruck,
      getVehicle: getVehicleTruck,
      ...truck
    } = shop(Builder)(Truck)
    // console.info('[10]', { car, truck })
    expected = { carType: 'truck', doors: 2, body: '12 m3' }
    expect(truck).toEqual(expected)
  })
})

// Shop
// construct

// CarBuilder
// car
// step1
// step2
// get

// TruckBuilder
// truck
// step1
// step2
// get

// Car
// doors
// addParts
// say

// Truck
// doors
// addParts
// say
